'use client';

import { useState } from 'react';
import { Button } from '../ui/button';

type FilterCategory =
	| 'All Capabilities'
	| 'Web'
	| 'Backend'
	| 'Hosting'
	| 'Design'
	| 'Mobile'
	| 'Ai & Data Science'
	| 'Tooling'
	| 'Languages';

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
	{
		category: 'Web',
		items: [
			{
				itemName: 'React 19',
				itemDesc: 'Server Actions',
				expertise: 'Expert',
				tag: 'v19',
			},
			{
				itemName: 'Next.js 15',
				itemDesc: 'App Router SSR',
				expertise: 'Expert',
				tag: 'v15',
			},
			{
				itemName: 'TypeScript',
				itemDesc: 'Strict Type Safety',
				expertise: 'Expert',
				tag: 'Primary',
			},
			{
				itemName: 'Tailwind CSS',
				itemDesc: 'Utility Systems',
				expertise: 'Expert',
				tag: 'Tokens',
			},
			{
				itemName: 'shadcn/ui',
				itemDesc: 'Radix Primitives',
				expertise: 'Expert',
				tag: 'UI Lib',
			},
			{
				itemName: 'Turborepo',
				itemDesc: 'Monorepo Builds',
				expertise: 'Advanced',
				tag: 'Monorepo',
			},
			{
				itemName: 'GSAP',
				itemDesc: 'Timeline Animations',
				expertise: 'Advanced',
				tag: 'Motion',
			},
		],
	},

	{
		category: 'Backend',
		items: [
			{
				itemName: 'Python',
				itemDesc: 'FastAPI & Pipelines',
				expertise: 'Expert',
				tag: 'Language',
			},
			{
				itemName: 'FastAPI',
				itemDesc: 'Async APIs',
				expertise: 'Expert',
				tag: 'Python',
			},
			{
				itemName: 'Node.js',
				itemDesc: 'High Concurrency',
				expertise: 'Expert',
				tag: 'Runtime',
			},
			{
				itemName: 'Hono',
				itemDesc: 'Edge-first Framework',
				expertise: 'Advanced',
				tag: 'Framework',
			},
			{
				itemName: 'SQLAlchemy',
				itemDesc: 'ORM & Migrations',
				expertise: 'Advanced',
				tag: 'ORM',
			},
			{
				itemName: 'PostgreSQL',
				itemDesc: 'pgvector + Index',
				expertise: 'Advanced',
				tag: 'Relational',
			},
			{
				itemName: 'Docker',
				itemDesc: 'Containerized Deploys',
				expertise: 'Advanced',
				tag: 'Deploy',
			},
		],
	},

	{
		category: 'Hosting',
		items: [
			{
				itemName: 'Neon DB',
				itemDesc: 'Serverless Postgres',
				expertise: 'Advanced',
				tag: 'Database',
			},
			{
				itemName: 'Vercel',
				itemDesc: 'Frontend Hosting',
				expertise: 'Expert',
				tag: 'Frontend',
			},
			{
				itemName: 'Render',
				itemDesc: 'Backend Services',
				expertise: 'Advanced',
				tag: 'Backend',
			},
			{
				itemName: 'Cloudflare',
				itemDesc: 'Edge & DNS',
				expertise: 'Advanced',
				tag: 'Edge',
			},
			{
				itemName: 'GitHub',
				itemDesc: 'Repos & Pages',
				expertise: 'Expert',
				tag: 'Source',
			},
		],
	},

	{
		category: 'Design',
		items: [
			{
				itemName: 'Google Stitch',
				itemDesc: 'AI UI Design',
				expertise: 'Active',
				tag: 'Design',
			},
			{
				itemName: 'Figma',
				itemDesc: 'UI Design',
				expertise: 'Active',
				tag: 'Design',
			},
		],
	},

	{
		category: 'Mobile',
		items: [
			{
				itemName: 'React Native',
				itemDesc: 'Cross-platform Apps',
				expertise: 'Advanced',
				tag: 'Native',
			},
			{
				itemName: 'Expo',
				itemDesc: 'Managed Workflow',
				expertise: 'Advanced',
				tag: 'Toolchain',
			},
			{
				itemName: 'NativeWind',
				itemDesc: 'Tailwind for Native',
				expertise: 'Advanced',
				tag: 'Styling',
			},
			{
				itemName: 'Gluestack',
				itemDesc: 'Universal UI Kit',
				expertise: 'Active',
				tag: 'UI Lib',
			},
		],
	},

	{
		category: 'Ai & Data Science',
		items: [
			{
				itemName: 'Machine Learning',
				itemDesc: 'Model Training',
				expertise: 'Expert',
				tag: 'Data',
			},
			{
				itemName: 'Applied AI & RAG',
				itemDesc: 'Agents & Vector Search',
				expertise: 'Active',
				tag: 'In Progress',
			},
			{
				itemName: 'pgvector',
				itemDesc: 'Embedding Search',
				expertise: 'Advanced',
				tag: 'Vector',
			},
			{
				itemName: 'Pandas & NumPy',
				itemDesc: 'Data Wrangling',
				expertise: 'Expert',
				tag: 'Python',
			},
			{
				itemName: 'PyTorch',
				itemDesc: 'Deep Learning',
				expertise: 'Advanced',
				tag: 'Training',
			},
		],
	},

	{
		category: 'Tooling',
		items: [
			{
				itemName: 'Zed',
				itemDesc: 'Lightweight editor',
				expertise: 'Expert',
				tag: 'Code',
			},
			{
				itemName: 'Git',
				itemDesc: 'Branching & PR Flow',
				expertise: 'Expert',
				tag: 'VCS',
			},
			{
				itemName: 'GitHub Actions',
				itemDesc: 'CI Pipelines',
				expertise: 'Advanced',
				tag: 'CI/CD',
			},
			{
				itemName: 'Vite',
				itemDesc: 'Fast Dev Builds',
				expertise: 'Expert',
				tag: 'Build',
			},
			{
				itemName: 'pnpm',
				itemDesc: 'Workspace Monorepos',
				expertise: 'Advanced',
				tag: 'Package',
			},
		],
	},

	{
		category: 'Languages',
		items: [
			{
				itemName: 'TypeScript',
				itemDesc: 'Strict Type Safety',
				expertise: 'Expert',
				tag: 'Primary',
			},
			{
				itemName: 'Python',
				itemDesc: 'FastAPI & Pipelines',
				expertise: 'Expert',
				tag: 'Backend',
			},
			{
				itemName: 'JavaScript',
				itemDesc: 'ESNext & Web APIs',
				expertise: 'Expert',
				tag: 'Browser',
			},
			{
				itemName: 'SQL',
				itemDesc: 'PostgreSQL / SQLite',
				expertise: 'Advanced',
				tag: 'Relational',
			},
			{
				itemName: 'Rust & C++',
				itemDesc: 'Low-latency Logic',
				expertise: 'Active',
				tag: 'Systems',
			},
		],
	},
];

const totalCount = FilterCategoryItems.reduce(
	(total, category) => total + category.items.length,
	0,
);

const filters: { label: FilterCategory; count: number }[] = [
	{ label: 'All Capabilities', count: totalCount },
	...FilterCategoryItems.map((category) => ({
		label: category.category,
		count: category.items.length,
	})),
];

const dotsFor: Record<Expertise, number> = {
	Expert: 3,
	Advanced: 2,
	Active: 1,
};

const Dots = ({ level }: { level: Expertise }) => {
	return (
		<div className="text-muted-foreground flex items-center gap-2 font-mono text-[10px]">
			<span className="flex gap-0.5" aria-hidden>
				{[0, 1, 2].map((i) => (
					<span
						key={i}
						className={`size-1.5 rounded-full ${
							i < dotsFor[level]
								? 'bg-foreground'
								: 'bg-muted-foreground/30'
						}`}
					/>
				))}
			</span>

			{level}
		</div>
	);
};

export const MyStacks = () => {
	const [active, setActive] = useState<FilterCategory>('All Capabilities');

	const handleFilter = (category: FilterCategory) => {
		setActive(category);
	};

	const sections = FilterCategoryItems.map((section, index) => ({
		...section,
		index: index + 1,
	})).filter(
		(section) =>
			active === 'All Capabilities' || active === section.category,
	);

	return (
		<div className="bg-accent w-full rounded-md p-4 pt-5">
			{/* FILTER CATEGORIES */}
			<div
				role="tablist"
				aria-label="Technology categories"
				className="relative z-10 -mx-4 mb-6 flex gap-2 overflow-x-auto border-b border-border px-4 pb-5 [scrollbar-width:none] sm:mx-0 sm:grid sm:grid-cols-3 sm:overflow-visible sm:px-0 md:grid-cols-5 xl:grid-cols-9 [&::-webkit-scrollbar]:hidden">
				{filters.map((filter) => {
					const isActive = active === filter.label;

					return (
						<Button
							key={filter.label}
							type="button"
							variant="ghost"
							aria-pressed={isActive}
							onClick={() => handleFilter(filter.label)}
							className={[
								'h-auto min-h-0 shrink-0',
								'cursor-pointer select-none',
								'flex flex-col items-start justify-start',
								'gap-1 rounded-lg border p-3',
								'text-left font-mono',
								'transition-colors duration-200',
								'hover:bg-background',
								'focus-visible:ring-2',
								'focus-visible:ring-ring',
								'sm:min-w-0',

								isActive
									? 'border-foreground bg-foreground text-background hover:bg-foreground hover:text-background'
									: 'border-border bg-background text-foreground hover:border-foreground/40',
							].join(' ')}>
							<span
								className={
									isActive
										? 'text-background/60 text-[9px]'
										: 'text-muted-foreground text-[9px]'
								}>
								{filter.count}{' '}
								{filter.count === 1 ? 'skill' : 'skills'}
							</span>

							<span className="whitespace-nowrap text-xs font-semibold">
								{filter.label}
							</span>
						</Button>
					);
				})}
			</div>

			{/* TECHNOLOGY SECTIONS */}
			<div className="flex flex-col gap-10">
				{sections.map((section) => (
					<div key={section.category} className="flex flex-col gap-4">
						{/* Section Header */}
						<div className="border-border flex items-center justify-between border-b pb-3 font-mono text-[10px] tracking-widest">
							<span className="text-muted-foreground uppercase">
								{String(section.index).padStart(2, '0')} /{' '}
								{section.category}
							</span>

							<span className="text-muted-foreground text-xs tracking-normal">
								{section.items.length} Technologies
							</span>
						</div>

						{/* Technology Cards */}
						<div className="grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-6">
							{section.items.map((item) => (
								<article
									key={`${section.category}-${item.itemName}`}
									className="border-border bg-background flex flex-col gap-1 rounded-lg border p-4">
									<span className="text-muted-foreground font-mono text-[9px]">
										{item.tag}
									</span>

									<h3 className="font-mono text-xs font-semibold tracking-widest">
										{item.itemName}
									</h3>

									<p className="text-muted-foreground text-[10px]">
										{item.itemDesc}
									</p>

									<div className="mt-3">
										<Dots level={item.expertise} />
									</div>
								</article>
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
