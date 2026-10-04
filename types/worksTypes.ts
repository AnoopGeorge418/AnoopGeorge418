export type RepoStatus = 'ACTIVE' | 'PAUSED' | 'ARCHIVED';

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
	homepage: string | null;
	createdAt: string;
	pushedAt: string;
	url: string | null;
};

export type GithubReposResult = { repos: GithubRepo[]; error: string | null };

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

/**
 * Static metadata for manually configured work/project entries.
 */
export type WorkMeta = {
	repo: string;
	title: string;
	badge?: string;
	status?: string;
	summary: string;
	stack: string[];
	previewUrl?: string;
	detailUrl?: string;
	deployment?: { stage: string; label: string; desc: string; url?: string };
	walkthrough?: {
		title: string;
		desc: string;
		duration: string;
		url?: string;
	};
	writeup?: { title: string; quote: string; readTime: string; url?: string };
	fallbackRepo?: {
		isPrivate: boolean;
		description: string;
		language: string;
	};
};
