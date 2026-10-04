import { MyBlogs } from '@/components/Sections/Blogs';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const BlogsPage = () => {
	return (
		<div className="flex flex-col dark:bg-black min-h-screen gap-4 bg-background items-center">
			{/* Blogs */}
			<div className="flex flex-col w-full pl-6 pr-6 md:pl-10 md:pr-10 my-20 pt-4 pb-4">
				{/*header*/}
				<div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
					<div className="flex flex-col space-y-4">
						<h1 className="font-lora text-3xl md:text-5xl tracking-widest">
							Blogs & Writing
						</h1>
						<p className="font-mono tracking-wider max-w-md md:max-w-190 text-[10px] md:text-md  text-neutral-600 leading-relaxed">
							Thoughts, breakdowns, and engineering lessons from
							what I'm building and learning — written as I go,
							not after the fact.
						</p>
					</div>
				</div>
				{/* content */}
				<div className="mt-5">
					<MyBlogs />
				</div>
			</div>
		</div>
	);
};

export default BlogsPage;
