import { getGithubRepos } from '@/api/github';

import { RepoStatus, WorkProject, WorksResult } from '@/types/worksTypes';

const DAY_MS = 86_400_000;

/**
 * A repository pushed within this many days
 * is considered active.
 */
const ACTIVE_WINDOW_DAYS = 60;

/**
 * Convert:
 *
 * my-cool_repo
 *
 * into:
 *
 * My Cool Repo
 */
const humanizeName = (name: string): string => {
	return name
		.replace(/[-_]+/g, ' ')
		.split(' ')
		.filter(Boolean)
		.map((word) => {
			if (word === word.toLowerCase()) {
				return word.charAt(0).toUpperCase() + word.slice(1);
			}

			return word;
		})
		.join(' ');
};

const timeAgo = (iso: string, now: number): string => {
	const days = Math.floor((now - new Date(iso).getTime()) / DAY_MS);

	if (days < 1) {
		return 'Today';
	}

	if (days === 1) {
		return 'Yesterday';
	}

	if (days < 30) {
		return `${days} days ago`;
	}

	if (days < 365) {
		return `${Math.floor(days / 30)} mo ago`;
	}

	return `${Math.floor(days / 365)} yr ago`;
};

const monthYear = (iso: string): string => {
	return new Date(iso).toLocaleDateString('en-US', {
		month: 'short',
		year: 'numeric',
		timeZone: 'UTC',
	});
};

const hostOf = (url: string | null): string | null => {
	if (!url) {
		return null;
	}

	try {
		return new URL(url).host.replace(/^www\./, '');
	} catch {
		return null;
	}
};

export const getWorks = async (): Promise<WorksResult> => {
	const { repos, error } = await getGithubRepos();

	const now = Date.now();

	/**
	 * `repos` is already strongly typed as
	 * GithubRepo[], so `repo` and `i` are
	 * properly inferred here.
	 */
	const projects: WorkProject[] = repos.map((repo, index) => {
		const idleDays = (now - new Date(repo.pushedAt).getTime()) / DAY_MS;

		const status: RepoStatus = repo.isArchived
			? 'ARCHIVED'
			: idleDays <= ACTIVE_WINDOW_DAYS
				? 'ACTIVE'
				: 'PAUSED';

		return {
			...repo,

			index: String(index + 1).padStart(2, '0'),

			title: humanizeName(repo.name),

			status,

			homepageHost: hostOf(repo.homepage),

			pushedLabel: timeAgo(repo.pushedAt, now),

			createdLabel: monthYear(repo.createdAt),
		};
	});

	return {
		projects,

		error,

		stats: {
			total: projects.length,

			public: projects.filter((project) => !project.isPrivate).length,

			private: projects.filter((project) => project.isPrivate).length,

			stars: projects.reduce((sum, project) => sum + project.stars, 0),
		},
	};
};
