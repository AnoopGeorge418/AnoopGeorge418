import { GithubRepo, GithubReposResult } from '@/types/worksTypes';

type RawRepo = {
	id: number;
	name: string;
	full_name: string;
	description: string | null;
	private: boolean;
	fork: boolean;
	archived: boolean;
	stargazers_count: number;
	forks_count: number;
	open_issues_count: number;
	language: string | null;
	topics?: string[];
	homepage: string | null;
	created_at: string;
	pushed_at: string | null;
	updated_at: string;
	html_url: string;
};

const GITHUB_API = 'https://api.github.com';

const MAX_PAGES = 5;

const REVALIDATE_SECONDS = 60 * 60;

/**
 * Only allow normal HTTP/HTTPS URLs.
 *
 * GitHub's homepage field is user-controlled/free text,
 * so we don't want javascript: or other protocols reaching
 * the frontend.
 */
const toSafeUrl = (value: string | null): string | null => {
	const trimmed = value?.trim();

	if (!trimmed) {
		return null;
	}

	try {
		const url = new URL(
			/^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`,
		);

		if (url.protocol !== 'http:' && url.protocol !== 'https:') {
			return null;
		}

		return url.toString();
	} catch {
		return null;
	}
};

const toRepo = (repo: RawRepo): GithubRepo => {
	return {
		id: repo.id,
		name: repo.name,
		fullName: repo.full_name,

		description: repo.description?.trim() || null,

		isPrivate: repo.private,
		isFork: repo.fork,
		isArchived: repo.archived,

		stars: repo.stargazers_count,
		forks: repo.forks_count,
		openIssues: repo.open_issues_count,

		language: repo.language,

		topics: repo.topics ?? [],

		homepage: toSafeUrl(repo.homepage),

		createdAt: repo.created_at,

		// Empty repositories can have no pushed_at value.
		pushedAt: repo.pushed_at ?? repo.updated_at,

		/**
		 * Never expose GitHub URLs for private repositories.
		 */
		url: repo.private ? null : repo.html_url,
	};
};

export const getGithubRepos = async (): Promise<GithubReposResult> => {
	const username = process.env.GITHUB_USERNAME;

	const token = process.env.GITHUB_TOKEN;

	/**
	 * No GitHub configuration.
	 */
	if (!username && !token) {
		return {
			repos: [],
			error: 'GITHUB_USERNAME / GITHUB_TOKEN missing in environment variables.',
		};
	}

	const headers: HeadersInit = {
		Accept: 'application/vnd.github+json',

		'X-GitHub-Api-Version': '2022-11-28',

		...(token ? { Authorization: `Bearer ${token}` } : {}),
	};

	/**
	 * With a token:
	 *   /user/repos
	 *
	 * Without a token:
	 *   /users/:username/repos
	 */
	const base = token
		? `${GITHUB_API}/user/repos?affiliation=owner&visibility=all`
		: `${GITHUB_API}/users/${encodeURIComponent(
				username!,
			)}/repos?type=owner`;

	const repos: GithubRepo[] = [];

	let error: string | null = null;

	try {
		for (let page = 1; page <= MAX_PAGES; page++) {
			const response = await fetch(
				`${base}&per_page=100&sort=pushed&page=${page}`,
				{ headers, next: { revalidate: REVALIDATE_SECONDS } },
			);

			if (!response.ok) {
				error = `GitHub API ${response.status}: ${response.statusText}`;

				console.error(error);

				break;
			}

			const data = (await response.json()) as RawRepo[];

			repos.push(...data.map(toRepo));

			/**
			 * Less than 100 means there are
			 * no more pages.
			 */
			if (data.length < 100) {
				break;
			}
		}
	} catch (exception) {
		error = 'Could not reach GitHub.';

		console.error('Failed to fetch GitHub repositories:', exception);
	}

	return { repos, error };
};
