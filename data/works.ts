import type { WorkProgressType } from '@/types/work';

type WorkMetadata = {
	progressTag: WorkProgressType;
	specificTag?: string;
	previewImage?: string;

	youtube?: { videoPreviewUrl: string; title: string; desc: string };

	blog?: { length: string; title: string; desc: string; blogUrl: string };
};

export const WorkMetadata: Record<string, WorkMetadata> = {
	faststrapy: {
		progressTag: 'Portfolio Project',
		specificTag: 'Open Source',
		previewImage: '/logo',

		// youtube: {
		// 	videoPreviewUrl: '',
		// 	title: '',
		// 	desc: '',
		// },

		// blog: {
		// 	length: '',
		// 	title: '',
		// 	desc: '',
		// 	blogUrl: '',
		// },
	},
};
