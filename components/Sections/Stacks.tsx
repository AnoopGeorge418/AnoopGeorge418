type FilterCategory =
	| 'Languages'
	| 'Frontend'
	| 'Backend & Service'
	| 'Tooling'
	| 'Ai & Data Science';
type ItemCategory = Exclude<FilterCategory, 'All Capabilities'>;
type Expertise = 'Active' | 'Expert' | 'Advanced';

type FilterItems = {
	category: ItemCategory;
	items: {
		itemName: string;
		itemDesc: string;
		expertise: Expertise;
		tag: string;
	}[];
};

const FilterCategoryItems: FilterItems[] = [
	// Languages
	{
		category: 'Languages',
		items: [
			{
				itemName: 'TypeScript',
				itemDesc: 'Strict Type Safety',
				expertise: 'Active',
				tag: 'Primary',
			},
		],
	},
	// Frontend
	{
		category: 'Frontend',
		items: [
			{
				itemName: 'React 19',
				itemDesc: 'Server Actions',
				expertise: 'Active',
				tag: 'v19',
			},
			{
				itemName: 'Next.js 16',
				itemDesc: 'App Router SSR',
				expertise: 'Active',
				tag: 'v15',
			},
		],
	},
	// Backend & Service
	{
		category: 'Backend & Service',
		items: [
			{
				itemName: 'FastAPI',
				itemDesc: 'Async API',
				expertise: 'Expert',
				tag: 'Python',
			},
		],
	},
	// Tooling
	{
		category: 'Tooling',
		items: [
			{
				itemName: 'Zed',
				itemDesc: 'Lightweight editor',
				expertise: 'Expert',
				tag: 'code',
			},
		],
	},
	// Ai & Data Science
	{
		category: 'Ai & Data Science',
		items: [
			{
				itemName: 'Machine Learning',
				itemDesc: 'Model Training',
				expertise: 'Expert',
				tag: 'data',
			},
		],
	},
];

export const MyStacks = () => {
	return (
		<div className="bg-accent w-full pt-5 p-4 rounded-md">
			Will be working on this.
		</div>
	);
};
