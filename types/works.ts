export type WorkProgressType =
	'In Progress' | 'Portfolio Project' | 'Client Project';

export type RepoVisibility = 'Private' | 'Public';

export type WorkData = {
	workName: string;
	progressTag: WorkProgressType;
	specificTag?: string;

	info: {
		previewImage: string;
		title: string;
		desc: string;
		stack: string[];
		viewWorkUrl: string;
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
		githubUrl: string;
	};

	youtube?: { videoPreviewUrl: string; title: string; desc: string };

	blog?: { length: string; title: string; desc: string; blogUrl: string };
};

export type WorkDataType = WorkData[];
