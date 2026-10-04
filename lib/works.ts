import { getGithubRepos } from '@/api/github';
import { RepoStatus, WorkProject, WorksResult } from '@/types/works';

const DAY_MS = 86_400_000;
/** Pushed within this many days = ACTIVE, older = PAUSED. */
const ACTIVE_WINDOW_DAYS = 60;

/** "my-cool_repo" -> "My Cool Repo" (names that already have capitals stay as-is). */
const humanizeName = (name: string) =>
	name
		.replace(/[-_]+/g, ' ')
		.split(' ')
		.filter(Boolean)
		.map((word) =>
			word === word.toLowerCase()
				? word.charAt(0).toUpperCase() + word.slice(1)
				: word,
		)
		.join(' ');

const timeAgo = (iso: string, now: number) => {
	const days = Math.floor((now - new Date(iso).getTime()) / DAY_MS);

	if (days < 1) return 'Today';
	if (days === 1) return 'Yesterday';
	if (days < 30) return `${days} days ago`;
	if (days < 365) return `${Math.floor(days / 30)} mo ago`;
	return `${Math.floor(days / 365)} yr ago`;
};

const monthYear = (iso: string) =>
	new Date(iso).toLocaleDateString('en-US', {
		month: 'short',
		year: 'numeric',
		timeZone: 'UTC',
	});

const hostOf = (url: string | null) => {
	if (!url) return null;
	try {
		return new URL(url).host.replace(/^www\./, '');
	} catch {
		return null;
	}
};

/** Every public AND private repo from GitHub, plus the derived display fields. */
export const getWorks = async (): Promise<WorksResult> => {
	const { repos, error } = await getGithubRepos();
	const now = Date.now();

	const projects: WorkProject[] = repos.map((repo, i) => {
		const idleDays = (now - new Date(repo.pushedAt).getTime()) / DAY_MS;
		const status: RepoStatus = repo.isArchived
			? 'ARCHIVED'
			: idleDays <= ACTIVE_WINDOW_DAYS
				? 'ACTIVE'
				: 'PAUSED';

		return {
			...repo,
			index: String(i + 1).padStart(2, '0'),
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
			public: projects.filter((p) => !p.isPrivate).length,
			private: projects.filter((p) => p.isPrivate).length,
			stars: projects.reduce((sum, p) => sum + p.stars, 0),
		},
	};
};
