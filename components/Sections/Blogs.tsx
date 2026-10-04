import Link from 'next/link';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { BlogsData } from '@/data/blogsData';

export const MyBlogs = () => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-1 gap-6 bg-accent w-full pt-5 p-4 rounded-md">
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
