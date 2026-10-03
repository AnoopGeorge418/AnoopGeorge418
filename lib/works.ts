export type WorkCategory =
	'web' | 'desktop' | 'mobile' | 'ai-data' | 'game' | 'blender';

export type FilterId = 'all' | WorkCategory;

export const WORK_FILTERS: { id: FilterId; label: string }[] = [
	{ id: 'all', label: 'All' },
	{ id: 'web', label: 'Web' },
	{ id: 'desktop', label: 'Desktop' },
	{ id: 'mobile', label: 'Mobile' },
	{ id: 'ai-data', label: 'AI & Data Science' },
	{ id: 'game', label: 'Game' },
	{ id: 'blender', label: 'Blender' },
];

export type WorkStatus = 'in-progress' | 'shipped' | 'pre-production';

export type WorkAccent = 'emerald' | 'amber' | 'sky' | 'violet' | 'rose';

export type Work = {
	slug: string;
	/** Short name shown next to the number, e.g. "Greenhoodspace" */
	title: string;
	/** Pill beside the title, e.g. "Featured Architecture" */
	eyebrow: string;
	status: WorkStatus;
	categories: WorkCategory[];
	accent: WorkAccent;
	/** Bigger heading inside the main card */
	headline: string;
	description: string;
	tags: string[];
	/** Text shown in the fake browser address bar of the preview */
	previewLabel: string;
	links: {
		live?: { url: string; title: string; note: string; badge?: string };
		repo?: {
			url: string;
			name: string;
			note: string;
			visibility?: 'Public' | 'Private';
		};
		video?: { url: string; title: string; note: string; duration?: string };
		writeup?: {
			url: string;
			title: string;
			excerpt: string;
			readTime?: string;
		};
	};
};

/**
 * Add, remove or reorder projects here — the home page and /works
 * both read from this list. Anything missing from `links` automatically
 * renders as a "coming soon" tile.
 */
export const WORKS: Work[] = [
	{
		slug: 'greenhoodspace',
		title: 'Greenhoodspace',
		eyebrow: 'Featured Architecture',
		status: 'in-progress',
		categories: ['web'],
		accent: 'emerald',
		headline: 'Greenhoodspace Organization Platform',
		description:
			'An ongoing personal build where a school, institute or organization can run many departments — Finance, Accounting and more — from one workspace. A Turborepo monorepo with an async FastAPI backend and a Next.js frontend, and the testbed where I apply every new engineering skill the day I learn it.',
		tags: [
			'Next.js',
			'FastAPI',
			'Turborepo',
			'Bun',
			'Alembic',
			'shadcn/ui',
		],
		previewLabel: 'greenhoodspace / departments',
		links: {
			repo: {
				url: 'https://github.com/AnoopGeorge418/GreenHoodSpace',
				name: 'AnoopGeorge418/GreenHoodSpace',
				note: 'Monorepo with a FastAPI API, a Next.js app and shared UI packages.',
			},
		},
	},
	{
		slug: 'lumenquest',
		title: 'LumenQuest',
		eyebrow: 'Mobile + Web',
		status: 'in-progress',
		categories: ['mobile', 'web'],
		accent: 'sky',
		headline: 'LumenQuest Book Reading Platform',
		description:
			'A multi-platform book reading app: a React Native (Expo) mobile client, a FastAPI backend and two internal web panels, organized as a Turborepo monorepo on Bun. Data lives in serverless Postgres on Neon, accessed through async SQLAlchemy 2.0.',
		tags: [
			'React Native',
			'Expo',
			'FastAPI',
			'Turborepo',
			'SQLAlchemy 2.0',
			'Neon Postgres',
		],
		previewLabel: 'lumenquest / library',
		links: {
			repo: {
				url: 'https://github.com/AnoopGeorge418/LumenQuest',
				name: 'AnoopGeorge418/LumenQuest',
				note: 'Expo app, FastAPI backend and web panels in one Turborepo.',
			},
		},
	},
	{
		slug: 'hunters-frontier',
		title: 'Hunters Frontier',
		eyebrow: 'Game Project',
		status: 'pre-production',
		categories: ['game', 'blender'],
		accent: 'amber',
		headline: 'Hunters Frontier: A Third-Person Action-Adventure',
		description:
			'A solo-developed third-person action-adventure set in one persistent world of jungles, dungeons and monsters. Register at the Guild, earn a Hunter License, join clans, and take on seven colossal bosses — with magic, swords, guns and a mystery to unravel. Low-poly 3D art keeps the scope realistic for one developer.',
		tags: [
			'Godot',
			'Blender',
			'Low-poly 3D',
			'Third-person',
			'Multiplayer',
		],
		previewLabel: 'hunters-frontier / guild-hall',
		links: {},
	},
	{
		slug: 'school-finance-dashboard',
		title: 'School Finance Dashboard',
		eyebrow: 'Client Project',
		status: 'in-progress',
		categories: ['web'],
		accent: 'rose',
		headline: 'Income & Expense Tracking Dashboard',
		description:
			'An admin-only internal web app for a school I learned at. Upload Excel or CSV exports of income and expenses and get instant analysis and a clear dashboard view — one protected place to see where the money goes, instead of juggling spreadsheets.',
		tags: [
			'CSV / Excel Import',
			'Analytics Dashboard',
			'Admin Access',
			'Internal Tool',
		],
		previewLabel: 'school / finance-overview',
		links: {},
	},
	{
		slug: 'faststrapy',
		title: 'faststrapy',
		eyebrow: 'Open Source',
		status: 'shipped',
		categories: ['web'],
		accent: 'violet',
		headline: 'faststrapy: FastAPI Scaffolding CLI',
		description:
			'An open-source CLI that scaffolds a FastAPI project in one command, inspired by create-next-app. A Pydantic-driven config contract feeds a Jinja2 template generator, so every new backend starts from the same clean structure.',
		tags: ['Python', 'FastAPI', 'Pydantic', 'Jinja2', 'CLI'],
		previewLabel: 'uvx faststrapy@latest',
		links: {
			live: {
				url: 'https://pypi.org/project/faststrapy/',
				title: 'Published on PyPI',
				note: 'Run it instantly with uvx faststrapy@latest.',
				badge: 'Live',
			},
		},
	},
];
