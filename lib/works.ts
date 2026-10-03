import type { WorkCategory } from '@/types/works';

export type WorkCategoryType = WorkCategory;

export type FilterId =
	| 'all'
	| WorkCategoryType;

export const WORK_FILTERS: {
	id: FilterId;
	label: string;
}[] = [
	{
		id: 'all',
		label: 'All',
	},
	{
		id: 'web',
		label: 'Web',
	},
	{
		id: 'desktop',
		label: 'Desktop',
	},
	{
		id: 'mobile',
		label: 'Mobile',
	},
	{
		id: 'ai-data',
		label: 'AI & Data',
	},
	{
		id: 'game',
		label: 'Game',
	},
	{
		id: 'blender',
		label: 'Blender',
	},
    ];
