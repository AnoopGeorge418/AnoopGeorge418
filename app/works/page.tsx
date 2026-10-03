import type { Metadata } from 'next';

import { MyWorks } from '@/components/Sections/Works';

import { Footer } from '@/components/layouts/Footer';

import { getGithubRepositories } from '@/lib/github';

export const metadata: Metadata = {
	title: 'Works - Anoop George',

	description:
		'Projects across web, mobile, games and 3D — built and shipped by Anoop George.',
};

const WorksPage = async () => {
	const works =
		await getGithubRepositories();

	return (
		<div className="flex min-h-screen flex-col items-center gap-4 bg-background text-foreground">
			<section className="flex w-full flex-col gap-10 px-6 pt-16 pb-24 md:px-10 md:pt-40 md:pb-4">
				{/* ------------------------------------------------------ */}
				{/* Header                                                   */}
				{/* ------------------------------------------------------ */}

				<div className="flex flex-col gap-4">
					<span className="inline-flex w-fit items-center gap-2 rounded-full border bg-background px-4 py-1.5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
						<span className="size-2 animate-pulse rounded-full bg-emerald-500" />

						Selected Works
					</span>

					<h1 className="font-lora text-4xl tracking-widest md:text-6xl">
						Works
					</h1>

					<p className="max-w-md font-mono text-[10px] leading-relaxed tracking-wider text-neutral-600 md:max-w-190 md:text-sm">
						Platforms, apps, tools and
						games I&apos;ve built — from
						full-stack applications to
						experimental projects.
					</p>
				</div>

				{/* ------------------------------------------------------ */}
				{/* GitHub projects                                          */}
				{/* ------------------------------------------------------ */}

				<MyWorks works={works} />
			</section>

			<div className="mt-5 w-full">
				<Footer />
			</div>
		</div>
	);
};

export default WorksPage;
