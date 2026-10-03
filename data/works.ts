import type { WorkMetadata } from '@/types/works';

/**
 * Optional presentation metadata for GitHub repositories.
 *
 * IMPORTANT:
 *
 * This is NOT an allowlist.
 *
 * Every GitHub repository will be displayed even if
 * it does not exist in this object.
 *
 * Use this object only when you want to customize
 * how a particular repository appears.
 */
export const WorkMetadata: Record<
	string,
	WorkMetadata
> = {
	/**
	 * Example:
	 *
	 * faststrapy: {
	 * 	progressTag: 'Portfolio Project',
	 * 	specificTag: 'Open Source',
	 * 	categories: ['web'],
	 * 	accent: 'violet',
	 * 	previewImage: '/logo.png',
	 * },
	 *
	 * GreenHoodSpace: {
	 * 	progressTag: 'In Progress',
	 * 	categories: ['web'],
	 * 	accent: 'emerald',
	 * },
	 */
};

export const getWorkMetadata = (
	repositoryName: string,
): WorkMetadata | undefined => {
	return WorkMetadata[repositoryName];
};
