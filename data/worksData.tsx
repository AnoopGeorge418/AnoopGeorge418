import { WorkMeta } from '@/types/worksTypes';

/**
 * Manually configured project metadata.
 *
 * `repo` must match the GitHub repository name
 * exactly, ignoring case.
 */
export const WorksData: WorkMeta[] = [
	{
		repo: 'greenhood',

		title: 'Greenhoodspace',

		badge: 'FEATURED ARCHITECTURE',

		status: 'IN PROGRESS',

		summary:
			"An ongoing personal build-in-progress digital garden and knowledge ecosystem, applying new engineering skills daily as they're mastered. Features vector search, bi-directional conceptual linking, and local-first SQLite sync architecture.",

		stack: ['Next.js 15', 'FastAPI', 'Tailwind CSS', 'SQLite', 'pgvector'],

		previewUrl: 'greenhoodspace.dev/knowledge',

		detailUrl: '',

		deployment: {
			stage: 'STAGING',

			label: 'Live Preview',

			desc: 'Continuous delivery via Cloudflare Workers & Docker edge nodes.',

			url: '',
		},

		walkthrough: {
			title: 'Architecture Log',

			desc: 'Full system walkthrough: SQLite vector search & indexing.',

			duration: '18:42',

			url: '',
		},

		writeup: {
			title: 'Read the Write-up',

			quote: 'Architecture choices, data schema modeling, and key technical tradeoffs when building an offline-first engine.',

			readTime: '6 min read',

			url: '',
		},

		fallbackRepo: {
			isPrivate: false,

			description:
				'Relational note-taking engine with local vector sync.',

			language: 'TypeScript',
		},
	},

	/*
	 * Add future projects here.
	 *
	 * Example:
	 *
	 * {
	 *   repo: 'your-repository',
	 *   title: 'Your Project',
	 *   status: 'SHIPPED',
	 *   summary: 'Project description.',
	 *   stack: ['Next.js', 'TypeScript'],
	 * }
	 */
];
