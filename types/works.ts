export type WorkProgressType =
	| 'In Progress'
	| 'Portfolio Project'
	| 'Client Project';

export type RepoVisibility = 'Private' | 'Public';

export type WorkCategory =
	| 'web'
	| 'desktop'
	| 'mobile'
	| 'ai-data'
	| 'game'
	| 'blender';

export type WorkAccent =
	| 'emerald'
	| 'amber'
	| 'sky'
	| 'violet'
	| 'rose';

export type WorkMetadata = {
	/**
	 * Optional presentation metadata.
	 *
	 * GitHub repositories are displayed automatically.
	 * This object is NOT an allowlist.
	 */
	progressTag?: WorkProgressType;

	specificTag?: string;

	categories?: WorkCategory[];

	accent?: WorkAccent;

	previewImage?: string;

	youtube?: {
		videoPreviewUrl: string;
		title: string;
		desc: string;
		duration?: string;
	};

	blog?: {
		length: string;
		title: string;
		desc: string;
		blogUrl: string;
	};
};

export type WorkData = {
	workName: string;

	progressTag: WorkProgressType;

	specificTag?: string;

	categories: WorkCategory[];

	accent: WorkAccent;

	info: {
		previewImage: string;
		title: string;
		desc: string;
		stack: string[];
		viewWorkUrl?: string;
	};

	deployment?: {
		tag: string;
		title: string;
		desc: string;
		liveSiteUrl: string;
	};

	repository: {
		visibility: RepoVisibility;
		repoName: string;
		desc: string;
		currentVersion: string;
		githubUrl?: string;
	};

	youtube?: {
		videoPreviewUrl: string;
		title: string;
		desc: string;
		duration?: string;
	};

	blog?: {
		length: string;
		title: string;
		desc: string;
		blogUrl: string;
	};
};

export type WorkDataType = WorkData[];
