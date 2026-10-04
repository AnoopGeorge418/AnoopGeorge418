import { WorkMeta } from '@/types/works';

/**
 * Add / reorder projects here. `repo` must match the GitHub repo name exactly
 * (case-insensitive). Anything missing (video, write-up...) renders a
 * disabled "Coming soon" tile instead of breaking the layout.
 */
export const WorksData: WorkMeta[] = [
	{
		repo: 'greenhood', // TODO: change to your real repo name
		title: 'Greenhoodspace',
		badge: 'FEATURED ARCHITECTURE',
		status: 'IN PROGRESS',
		summary:
			"An ongoing personal build-in-progress digital garden and knowledge ecosystem, applying new engineering skills daily as they're mastered. Features vector search, bi-directional conceptual linking, and local-first SQLite sync architecture.",
		stack: ['Next.js 15', 'FastAPI', 'Tailwind CSS', 'SQLite', 'pgvector'],
		previewUrl: 'greenhoodspace.dev/knowledge',
		detailUrl: '', // optional case study page
		deployment: {
			stage: 'STAGING',
			label: 'Live Preview',
			desc: 'Continuous delivery via Cloudflare Workers & Docker edge nodes.',
			url: '', // TODO: live site url
		},
		walkthrough: {
			title: 'Architecture Log',
			desc: 'Full system walkthrough: SQLite vector search & indexing.',
			duration: '18:42',
			url: '', // TODO: youtube url
		},
		writeup: {
			title: 'Read the Write-up',
			quote: 'Architecture choices, data schema modeling, and key technical tradeoffs when building an offline-first engine.',
			readTime: '6 min read',
			url: '', // TODO: blog url
		},
		fallbackRepo: {
			isPrivate: false,
			description:
				'Relational note-taking engine with local vector sync.',
			language: 'TypeScript',
		},
	},

	// Template for the next project:
	// {
	// 	repo: 'your-repo-name',
	// 	title: 'Project Name',
	// 	status: 'SHIPPED',
	// 	summary: '...',
	// 	stack: ['Next.js', 'Tailwind CSS'],
	// },
];
