export type RepoStatus = 'ACTIVE' | 'PAUSED' | 'ARCHIVED';

/** One repository, exactly the fields we keep from the GitHub API. */
export type GithubRepo = {
	id: number;
	name: string;
	fullName: string;
	description: string | null;
	isPrivate: boolean;
	isFork: boolean;
	isArchived: boolean;
	stars: number;
	forks: number;
	openIssues: number;
	language: string | null;
	topics: string[];
	/** Sanitised (http/https only) "Website" field from the repo settings. */
	homepage: string | null;
	createdAt: string;
	pushedAt: string;
	/** `null` for private repos on purpose - the codebase link is never exposed. */
	url: string | null;
};

export type GithubReposResult = { repos: GithubRepo[]; error: string | null };

/** What the UI renders: a repo plus a few derived display fields. */
export type WorkProject = GithubRepo & {
	index: string;
	title: string;
	status: RepoStatus;
	homepageHost: string | null;
	pushedLabel: string;
	createdLabel: string;
};

export type WorksStats = {
	total: number;
	public: number;
	private: number;
	stars: number;
};

export type WorksResult = {
	projects: WorkProject[];
	stats: WorksStats;
	error: string | null;
};
