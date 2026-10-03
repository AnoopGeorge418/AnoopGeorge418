import { Footer } from '@/components/layouts/Footer';
import { WorksSection } from '@/components/Sections/Works';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const WorksPage = () => {
	return (
		<div className="flex flex-col dark:bg-black min-h-screen gap-4 bg-background items-center mt-20">
			{/*Works*/}
			<div className="flex flex-col w-full pl-6 pr-6 md:pl-10 md:pr-10 pt-4 pb-4">
				{/*header*/}
				<div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
					<div className="flex flex-col space-y-4">
						<h1 className="font-lora text-3xl md:text-5xl tracking-widest">
							Works
						</h1>
						<p className="font-mono tracking-wider max-w-md md:max-w-190 text-[10px] md:text-md  text-neutral-600 leading-relaxed">
							A collection of projects I've built and shipped —
							from full-stack apps to experiments. Each one
							reflects what I was learning at the time.
						</p>
					</div>
				</div>

				{/*bento cards*/}
				<div className="mt-5">
					<WorksSection />
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default WorksPage;
