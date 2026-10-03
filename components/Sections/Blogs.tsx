import Link from 'next/link';
import { Button } from '../ui/button';
import { Card } from '../ui/card';

export type Blogstype = {
	tag: OfficialTags;
	infoTag?: string;
	title: string;
	desc: string;
	dateOfPublish: string;
	blogLength?: string;
	blogPageUrl: string;
};

export type OfficialTags = 'DEV LOG' | 'CASE STUDY' | 'REFLECTION';

export const BlogsData: Blogstype[] = [
	{
		tag: 'DEV LOG',
		infoTag: 'Featured Essay',
		title: "Why I'm Building Greenhoodspace While Learning to Code",
		desc: 'A reflection on building an ambitious offline-first knowledge ecosystem day-by-day while mastering fundamental software engineering concepts from pure scratch.',
		dateOfPublish: 'Sept 20, 2026',
		blogLength: '5 min read',
		blogPageUrl: '/blog',
	},
	{
		tag: 'CASE STUDY',
		title: 'Building an Internal Dashboard for a School — CSV Import Done Right',
		desc: 'Handling dirty spreadsheets, edge transaction rollbacks, and PostgreSQL NUMERIC precision when financial accuracy is paramount.',
		dateOfPublish: 'Aug 28, 2026',
		blogLength: '5 min read',
		blogPageUrl: '/blog',
	},
	{
		tag: 'REFLECTION',
		title: '100 Days of Learning: Engineering Principles & Week 1 Notes',
		desc: 'Early takeaways from an intensive self-directed curriculum covering low-level concurrency, WebGPU pipelines, and systems design.',
		dateOfPublish: 'July 12, 2026',
		blogLength: '5 min read',
		blogPageUrl: '/blog',
	},
	{
		tag: 'DEV LOG',
		infoTag: 'Featured Essay',
		title: "Why I'm Building Greenhoodspace While Learning to Code",
		desc: 'A reflection on building an ambitious offline-first knowledge ecosystem day-by-day while mastering fundamental software engineering concepts from pure scratch.',
		dateOfPublish: 'Sept 20, 2026',
		blogPageUrl: '/blog',
	},
];

export const MyBlogs = () => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-accent w-full pt-5 p-4 rounded-md">
			{BlogsData.map((item) => {
				// Setting up color rules for info tag
				let tagColorClass = 'bg-blue-200';
				let tagTextColorClass = 'text-blue-500'; // Fixed typo from "b-blue-500"

				if (item.tag === 'CASE STUDY') {
					tagColorClass = 'bg-amber-200';
					tagTextColorClass = 'text-amber-500';
				} else if (item.tag === 'REFLECTION') {
					tagColorClass = 'bg-red-200';
					tagTextColorClass = 'text-red-500';
				}

				return (
					<div key={item.title} className="w-full">
						<Link href={item.blogPageUrl} className="w-full block">
							<Card className="p-4 gap-4 w-full">
								{/*tags*/}
								<div className="flex justify-between items-center">
									<span
										className={`font-mono tracking-widest text-[8px] ${tagColorClass} ${tagTextColorClass} p-2 rounded-md font-bold`}>
										{item.tag}
									</span>
									<span className="font-mono tracking-widest text-[8px] text-neutral-500">
										{item.infoTag}
									</span>
								</div>
								{/*content*/}
								<div className="flex flex-col gap-2">
									<h1 className="font-bold font-lora tracking-wide text-sm text-primary">
										{item.title}
									</h1>
									<p className="font-mono tracking-wider text-[10px] text-neutral-700">
										{item.desc}
									</p>
								</div>
								{/*blog info*/}
								<hr />
								<div className="flex justify-between items-center">
									<div className="flex justify-center items-center gap-2">
										<span className="font-mono tracking-widest text-[8px]">
											{item.dateOfPublish}
										</span>
										<span className="font-mono tracking-widest text-[8px] text-neutral-500">
											{item.blogLength}
										</span>
									</div>
									<Button className="uppercase text-mono text-[8px] text-secondary pl-4 pr-4 cursor-pointer">
										READ {'>'}
									</Button>
								</div>
							</Card>
						</Link>
					</div>
				);
			})}
		</div>
	);
};
