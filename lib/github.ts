import type { RepoVisibility, WorkDataType } from '@/types/work';

import { WorkMetadata } from '@/data/works';

const GITHUB_API = 'https://api.github.com';

const githubHeaders: HeadersInit = {
	Accept: 'application/vnd.github+json',

	'X-GitHub-Api-Version': '2022-11-28',

	...(process.env.GITHUB_TOKEN && {
		Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
	}),
};

type GithubRepository = {
	id: number;
	name: string;
	full_name: string;
	private: boolean;
	description: string | null;
	html_url: string;
	homepage: string | null;
	language: string | null;
	archived: boolean;
	default_branch: string;
	created_at: string;
	updated_at: string;
	stargazers_count: number;
	forks_count: number;
	languages_url: string;
};

type GithubLanguages = Record<string, number>;

type GithubRelease = { tag_name: string; name: string | null };

async function githubFetch<T>(url: string): Promise<T> {
	const response = await fetch(url, {
		headers: githubHeaders,

		next: { revalidate: 3600 },
	});

	if (!response.ok) {
		throw new Error(`GitHub API error: ${response.status}`);
	}

	return response.json();
}

async function getRepositoryLanguages(languagesUrl: string): Promise<string[]> {
	try {
		const languages = await githubFetch<GithubLanguages>(languagesUrl);

		return Object.keys(languages);
	} catch {
		return [];
	}
}

async function getLatestRelease(
	username: string,
	repository: string,
): Promise<GithubRelease | null> {
	try {
		return await githubFetch<GithubRelease>(
			`${GITHUB_API}/repos/${username}/${repository}/releases/latest`,
		);
	} catch {
		return null;
	}
}

export async function getGithubRepositories(): Promise<WorkDataType> {
	const username = process.env.GITHUB_USERNAME;

	if (!username) {
		throw new Error('GITHUB_USERNAME is not configured.');
	}

	const repositories = await githubFetch<GithubRepository[]>(
		`${GITHUB_API}/users/${username}/repos?per_page=100&sort=updated&direction=desc`,
	);

	const activeRepositories = repositories.filter((repo) => !repo.archived);

	const works = await Promise.all(
		activeRepositories.map(async (repo) => {
			const [languages, release] = await Promise.all([
				getRepositoryLanguages(repo.languages_url),

				getLatestRelease(username, repo.name),
			]);

			const metadata = WorkMetadata[repo.name];

			return {
				workName: repo.name,

				progressTag: metadata?.progressTag ?? 'Portfolio Project',

				specificTag:
					metadata?.specificTag ?? repo.language ?? undefined,

				info: {
					previewImage: metadata?.previewImage ?? '',

					title: repo.name,

					desc: repo.description ?? 'No description available.',

					stack: languages,

					viewWorkUrl: repo.html_url,
				},

				...(repo.homepage
					? {
							deployment: {
								tag: 'Live',

								title: repo.name,

								desc: 'Live deployment',

								liveSiteUrl: repo.homepage,
							},
						}
					: {}),

				repository: {
					visibility: (repo.private
						? 'Private'
						: 'Public') as RepoVisibility,

					repoName: repo.name,

					desc: repo.description ?? '',

					currentVersion: release?.tag_name ?? '',

					githubUrl: repo.html_url,
				},

				...(metadata?.youtube ? { youtube: metadata.youtube } : {}),

				...(metadata?.blog ? { blog: metadata.blog } : {}),
			};
		}),
	);

	return works;
}
