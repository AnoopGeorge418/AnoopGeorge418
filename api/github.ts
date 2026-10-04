import { GithubRepo, GithubReposResult } from '@/types/works';

/**
 * Server-side only. Reads GITHUB_USERNAME / GITHUB_TOKEN from .env, so the token
 * never reaches the browser. Only import this from Server Components.
 *
 * - With a token  -> GET /user/repos        (public + private repos you own)
 * - Without token -> GET /users/:name/repos (public repos only)
 *
 * Token scope: classic PAT with `repo`, or a fine-grained PAT with
 * "Metadata: read" on the repos you want listed.
 */

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

/** Only plain http(s) links are allowed through (the field is free text). */
const toSafeUrl = (value: string | null): string | null => {
	const trimmed = value?.trim();
	if (!trimmed) return null;

	try {
		const url = new URL(
			/^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`,
		);
		return url.protocol === 'http:' || url.protocol === 'https:'
			? url.toString()
			: null;
	} catch {
		return null;
	}
};

const toRepo = (repo: RawRepo): GithubRepo => ({
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
	// Empty repos have no push yet.
	pushedAt: repo.pushed_at ?? repo.updated_at,
	// Private repo = no access to the codebase, so the URL is dropped right here.
	url: repo.private ? null : repo.html_url,
});

export const getGithubRepos = async (): Promise<GithubReposResult> => {
	const username = process.env.GITHUB_USERNAME;
	const token = process.env.GITHUB_TOKEN;

	if (!username && !token) {
		return {
			repos: [],
			error: 'GITHUB_USERNAME / GITHUB_TOKEN missing in .env',
		};
	}

	const headers: HeadersInit = {
		Accept: 'application/vnd.github+json',
		'X-GitHub-Api-Version': '2022-11-28',
		...(token ? { Authorization: `Bearer ${token}` } : {}),
	};

	const base = token
		? `${GITHUB_API}/user/repos?affiliation=owner&visibility=all`
		: `${GITHUB_API}/users/${username}/repos?type=owner`;

	const repos: GithubRepo[] = [];
	let error: string | null = null;

	try {
		for (let page = 1; page <= MAX_PAGES; page++) {
			const res = await fetch(
				`${base}&per_page=100&sort=pushed&page=${page}`,
				{ headers, next: { revalidate: REVALIDATE_SECONDS } },
			);

			if (!res.ok) {
				error = `GitHub API ${res.status}: ${res.statusText}`;
				console.error(error);
				break;
			}

			const data = (await res.json()) as RawRepo[];
			repos.push(...data.map(toRepo));

			if (data.length < 100) break;
		}
	} catch (e) {
		error = 'Could not reach GitHub.';
		console.error('Failed to fetch GitHub repos:', e);
	}

	return { repos, error };
};
