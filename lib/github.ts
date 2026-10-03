import { WorkMetadata } from '@/data/works';

import type {
	RepoVisibility,
	WorkAccent,
	WorkDataType,
	WorkMetadata as WorkMetadataType,
	WorkProgressType,
} from '@/types/works';

const GITHUB_API =
	'https://api.github.com';

const githubHeaders: HeadersInit = {
	Accept: 'application/vnd.github+json',

	'X-GitHub-Api-Version':
		'2022-11-28',

	Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
};

type GithubOwner = {
	login: string;
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

	fork: boolean;

	default_branch: string;

	created_at: string;

	updated_at: string;

	stargazers_count: number;

	forks_count: number;

	languages_url: string;

	owner: GithubOwner;
};

type GithubLanguages = Record<
	string,
	number
>;

type GithubRelease = {
	tag_name: string;

	name: string | null;

	published_at?: string;
};

/* ------------------------------------------------------------------ */
/* GitHub fetch                                                        */
/* ------------------------------------------------------------------ */

async function githubFetch<T>(
	url: string,
): Promise<T> {
	const response = await fetch(url, {
		headers: githubHeaders,

		next: {
			revalidate: 3600,
		},
	});

	if (!response.ok) {
		const errorText =
			await response.text();

		throw new Error(
			`GitHub API ${response.status}: ${errorText}`,
		);
	}

	return response.json();
}

/* ------------------------------------------------------------------ */
/* Languages                                                           */
/* ------------------------------------------------------------------ */

async function getRepositoryLanguages(
	languagesUrl: string,
): Promise<string[]> {
	try {
		const languages =
			await githubFetch<GithubLanguages>(
				languagesUrl,
			);

		return Object.keys(languages);
	} catch {
		return [];
	}
}

/* ------------------------------------------------------------------ */
/* Latest release                                                      */
/* ------------------------------------------------------------------ */

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

/* ------------------------------------------------------------------ */
/* Accent                                                              */
/* ------------------------------------------------------------------ */

const defaultAccents: WorkAccent[] = [
	'emerald',
	'amber',
	'sky',
	'violet',
	'rose',
];

function getDefaultAccent(
	index: number,
): WorkAccent {
	return defaultAccents[
		index % defaultAccents.length
	];
}

/* ------------------------------------------------------------------ */
/* Categories                                                          */
/* ------------------------------------------------------------------ */

function inferCategories(
	repo: GithubRepository,
	languages: string[],
): WorkDataType[number]['categories'] {
	const metadata =
		WorkMetadata[repo.name];

	/**
	 * Manually configured category wins.
	 */
	if (metadata?.categories?.length) {
		return metadata.categories;
	}

	const normalized = [
		repo.name,
		repo.description ?? '',
		repo.language ?? '',
		...languages,
	]
		.join(' ')
		.toLowerCase();

	const categories =
		new Set<
			WorkDataType[number]['categories'][number]
		>();

	/* Web */

	if (
		[
			'javascript',
			'typescript',
			'html',
			'css',
			'react',
			'next',
			'nextjs',
			'vue',
			'svelte',
			'fastapi',
			'flask',
			'django',
			'web',
		].some((keyword) =>
			normalized.includes(
				keyword,
			),
		)
	) {
		categories.add('web');
	}

	/* Game */

	if (
		[
			'godot',
			'gdscript',
			'unity',
			'unreal',
			'game',
			'gamedev',
		].some((keyword) =>
			normalized.includes(
				keyword,
			),
		)
	) {
		categories.add('game');
	}

	/* Blender */

	if (
		[
			'blender',
			'3d',
			'modeling',
			'modelling',
		].some((keyword) =>
			normalized.includes(
				keyword,
			),
		)
	) {
		categories.add('blender');
	}

	/* Mobile */

	if (
		[
			'flutter',
			'android',
			'ios',
			'react native',
			'react-native',
			'swift',
			'kotlin',
		].some((keyword) =>
			normalized.includes(
				keyword,
			),
		)
	) {
		categories.add('mobile');
	}

	/* AI / Data */

	if (
		[
			'ai',
			'llm',
			'machine learning',
			'machine-learning',
			'data science',
			'data-science',
			'pytorch',
			'tensorflow',
		].some((keyword) =>
			normalized.includes(
				keyword,
			),
		)
	) {
		categories.add('ai-data');
	}

	/* Desktop */

	if (
		[
			'c#',
			'c++',
			'wpf',
			'winforms',
			'electron',
			'desktop',
			'qt',
		].some((keyword) =>
			normalized.includes(
				keyword,
			),
		)
	) {
		categories.add('desktop');
	}

	/**
	 * If GitHub doesn't give us enough information,
	 * put the project into Web by default.
	 */
	if (categories.size === 0) {
		categories.add('web');
	}

	return Array.from(categories);
}

/* ------------------------------------------------------------------ */
/* Repository mapper                                                   */
/* ------------------------------------------------------------------ */

function mapRepositoryToWork(
	repo: GithubRepository,
	metadata:
		| WorkMetadataType
		| undefined,
	languages: string[],
	release: GithubRelease | null,
	index: number,
): WorkDataType[number] {
	const visibility: RepoVisibility =
		repo.private
			? 'Private'
			: 'Public';

	/**
	 * IMPORTANT:
	 *
	 * Private repositories DO NOT get a GitHub URL.
	 */
	const githubUrl =
		repo.private
			? undefined
			: repo.html_url;

	const categories =
		inferCategories(
			repo,
			languages,
		);

	const accent =
		metadata?.accent ??
		getDefaultAccent(index);

	const progressTag: WorkProgressType =
		metadata?.progressTag ??
		'Portfolio Project';

	/**
	 * For private repositories we intentionally
	 * don't expose the repository URL.
	 */
	const description =
		repo.description ??
		(repo.private
			? 'This project is maintained privately and its source code is not publicly available.'
			: 'No description available for this repository.');

	return {
		workName: repo.name,

		progressTag,

		specificTag:
			metadata?.specificTag,

		categories,

		accent,

		info: {
			previewImage:
				metadata?.previewImage ??
				'',

			title: repo.name,

			desc: description,

			stack: languages,

			viewWorkUrl:
				repo.private
					? undefined
					: repo.html_url,
		},

		...(repo.homepage
			? {
					deployment: {
						tag: 'Live',

						title:
							repo.name,

						desc:
							'Live deployment',

						liveSiteUrl:
							repo.homepage,
					},
				}
			: {}),

		repository: {
			visibility,

			repoName:
				repo.name,

			desc: description,

			currentVersion:
				release?.tag_name ??
				'',

			githubUrl,
		},

		...(metadata?.youtube
			? {
					youtube:
						metadata.youtube,
				}
			: {}),

		...(metadata?.blog
			? {
					blog:
						metadata.blog,
				}
			: {}),
	};
}

/* ------------------------------------------------------------------ */
/* Get ALL repositories                                                */
/* ------------------------------------------------------------------ */

export async function getGithubRepositories(): Promise<WorkDataType> {
	const username =
		process.env.GITHUB_USERNAME;

	const token =
		process.env.GITHUB_TOKEN;

	if (!username) {
		throw new Error(
			'GITHUB_USERNAME is missing from environment variables.',
		);
	}

	if (!token) {
		throw new Error(
			'GITHUB_TOKEN is required to fetch private repositories.',
		);
	}

	/**
	 * IMPORTANT:
	 *
	 * /user/repos returns repositories available
	 * to the authenticated GitHub user.
	 *
	 * visibility=all means public + private.
	 *
	 * affiliation=owner means repositories owned
	 * by the authenticated user.
	 */
	const repositories =
		await githubFetch<GithubRepository[]>(
			`${GITHUB_API}/user/repos?visibility=all&affiliation=owner&per_page=100&sort=updated&direction=desc`,
		);

	/**
	 * Extra safety:
	 *
	 * Only display repositories whose owner
	 * actually matches GITHUB_USERNAME.
	 */
	const ownedRepositories =
		repositories.filter(
			(repo) =>
				repo.owner.login.toLowerCase() ===
				username.toLowerCase(),
		);

	console.log(
		`GitHub repositories found: ${ownedRepositories.length}`,
	);

	ownedRepositories.forEach(
		(repo) => {
			console.log(
				`${repo.private ? '🔒 PRIVATE' : '🌐 PUBLIC'} - ${repo.name}`,
			);
		},
	);

	const works =
		await Promise.all(
			ownedRepositories.map(
				async (
					repo,
					index,
				) => {
					const metadata =
						WorkMetadata[
							repo.name
						];

					const [
						languages,
						release,
					] =
						await Promise.all([
							getRepositoryLanguages(
								repo.languages_url,
							),

							getLatestRelease(
								username,
								repo.name,
							),
						]);

					return mapRepositoryToWork(
						repo,
						metadata,
						languages,
						release,
						index,
					);
				},
			),
		);

	return works;
}
