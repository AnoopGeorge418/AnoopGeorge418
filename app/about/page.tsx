import { ConversationSection } from '@/components/Sections/Conversation';
import { MyStacks } from '@/components/Sections/Stacks';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
	AboutApproachData,
	AboutHeroCardData,
	AboutWorkExperienceData,
} from '@/data/aboutData';
import { AboutHeroCardType } from '@/types/aboutTypes';
import { ArrowDown, Download, Zap } from 'lucide-react';
import Link from 'next/link';

const AboutPage = ({}: AboutHeroCardType) => {
	return (
		<div className="flex flex-col min-h-screen gap-4 bg-background w-full md:mt-10 p-6 md:p-10">
			{/*header*/}
			<div className="flex flex-row gap-2 justify-between items-center">
				<div className="flex flex-row gap-2 justify-center items-center bg-accent rounded-full p-2 pr-4">
					<span className="w-2 h-2 rounded-full bg-black animate-pulse" />
					<p className="font-mono tracking-widest text-[8px] uppercase font-bold">
						About Me
					</p>
				</div>
				<div className="flex-row gap-2 justify-center items-center bg-accent rounded-full p-2 hidden md:flex">
					<span className="w-2 h-2 rounded-full bg-green-300 animate-pulse" />
					<p className="font-mono tracking-widest text-[8px] uppercase font-bold">
						Available For Freelance/Contract Works
					</p>
				</div>
			</div>

			{/*hero*/}
			<div className="flex flex-col">
				<div className="flex flex-col md:flex-row gap-6 md:gap-4 justify-between items-center">
					<div className="flex flex-col gap-2">
						<h1 className="font-lora text-2xl md:text-7xl tracking-widest w-full md:w-[70%] leading-10 md:leading-24">
							Hey, I'm Anoop George — A solo software developer,
							product builder, crafting thoughtful digital
							experiences.
						</h1>
						<p className="font-mono text-[10px] md:text-lg tracking-widest w-full md:w-[60%] leading-5 md:leading-10">
							I build across web platforms, native mobile, desktop
							utilities, AI tools, and interactive graphics. With
							a background grounded in systems engineering and
							human-centered design, I partner directly with
							founders and teams to transform complex technical
							hurdles into intuitive, resilient, and
							high-performance software.
						</p>
					</div>
					{/*right CTA cards*/}
					<div className="flex flex-col p-6 justify-center items-center bg-accent-background border shadow rounded-lg w-auto">
						{/*header*/}
						<div className="flex flex-row justify-between items-center w-full">
							<span className="font-mono tracking-widest uppercase text-neutral-400 text-[10px] font-bold">
								Engagement
							</span>
							<div className="flex flex-row gap-2 bg-green-200 p-2 rounded-full justify-between items-center">
								<span className="rounded-full w-2 h-2 bg-green-500 animate-pulse" />
								<p className="font-mono tracking-widest text-[8px] uppercase text-green-500">
									Direct 1:1
								</p>
							</div>
						</div>
						{/*content*/}
						<div className="flex flex-col gap-2 mt-4 w-full">
							<h2 className="font-lora text-md tracking-widest font-bold">
								Ready to build something exceptional?
							</h2>
							<p className="font-mono text-[10px] tracking-widest">
								Available for select commissions, fractional
								lead engineering, and end-to-end product
								architecture.
							</p>
						</div>
						{/*Buttons*/}
						<div className="flex flex-col gap-2 mt-4 w-full">
							<Button className="flex flex-row justify-between items-center h-12 text-[8px] tracking-widest font-mono cursor-pointer pl-4 pr-4 font-bold">
								GET IN TOUCH
								<Zap />
							</Button>
							<Link
								href="/works"
								className="cursor-pointer w-full">
								<Button className="flex flex-row justify-between items-center text-[8px] tracking-widest font-mono pl-4 pr-4 w-full h-12 bg-secondary shadow text-primary hover:bg-amber-50 font-bold">
									EXPLORE WORKS
									<ArrowDown />
								</Button>
							</Link>
						</div>
					</div>
				</div>
				{/*key info*/}
				<div className="grid grid-col-1 grid-col-4 mt-5 w-full">
					<div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-10">
						{AboutHeroCardData.map((data) => (
							<Card
								className="flex flex-col gap-2 p-6 md:p-8 w-full md:w-[60%] bg-accent-foreground md:bg-transparent text-white md:text-primary"
								key={data.title}>
								<span className="font-mono text-[10px] tracking-widest text-neutral-700 uppercase">
									{data.title}
								</span>
								<p className="font-lora text-sm tracking-widest font-bold">
									{data.info}
								</p>
							</Card>
						))}
					</div>
				</div>
			</div>

			{/*Approach*/}
			<div className="flex flex-col gap-6 mt-6">
				{/*header*/}
				<div className="flex flex-col md:flex-row justify-between items-center">
					<div className="flex flex-col gap-2 w-full">
						<span className="text-neutral-400 uppercase font-mono tracking-widest text-[8px]">
							Philosophy & Method
						</span>
						<h2 className="font-lora text-xl md:text-3xl tracking-widest">
							How I Approach Software
						</h2>
					</div>
					<p className="font-mono text-[10px] text-neutral-600 mt-2 md:mt-0 tracking-widest">
						A disciplined fusion of full-stack engineering rigor,
						rapid iteration velocity, and nuanced interaction craft.
					</p>
				</div>
				{/*Cards*/}
				<div className="w-full">
					<div className="flex flex-col md:flex-row justify-between items-stretch gap-4">
						{AboutApproachData.map((data) => (
							<Card
								key={data.title}
								className="flex flex-col justify-between flex-1 p-6 gap-4 bg-accent-foreground md:bg-transparent">
								<div className="flex flex-col gap-4">
									{/*icon*/}
									<div>{data.icon}</div>
									{/*content*/}
									<div className="flex flex-col gap-2">
										<span className="font-mono tracking-widest font-bold text-lg">
											{data.title}
										</span>
										<p className="font-mono tracking-widest text-xs text-neutral-600 leading-relaxed">
											{data.desc}
										</p>
									</div>
								</div>
								{/*tags in a row */}
								<div className="flex flex-row flex-wrap gap-2 mt-4">
									{data.tags.map((tag) => (
										<span
											key={tag}
											className="font-mono bg-accent tracking-widest text-[8px] px-2 py-1 rounded">
											{tag}
										</span>
									))}
								</div>
							</Card>
						))}
					</div>
				</div>
			</div>

			{/*Experience*/}
			<div className="flex flex-col gap-2 mt-5">
				{/*header*/}
				<div className="flex flex-row justify-between items-center">
					<div className="flex flex-col gap-2">
						<span className="font-mono text-[8px] tracking-widest text-neutral-500">
							Track Record
						</span>
						<h1 className="font-lora tracking-widest text-xl md:text-3xl">
							Education & Work Experience
						</h1>
					</div>
					<Button className="flex flex-row gap-2 font-mono text-[8px] cursor-pointer h-12 pl-4 pr-4 uppercase tracking-widest">
						<Download />
						Download Resume (PDF)
					</Button>
				</div>
				{/*Content*/}
				<div className="relative flex flex-col gap-6 w-full rounded-lg mt-4">
					{/* Vertical line placed inside the padding/flow */}
					<div className="absolute left-6 top-6 bottom-6 w-1 bg-gradient-to-b from-neutral-300 via-neutral-400 to-neutral-300 dark:from-neutral-700 dark:via-neutral-600 dark:to-neutral-700 rounded-full" />

					{AboutWorkExperienceData.map((data) => (
						<div
							key={data.title}
							className="relative flex items-center pl-14">
							{/* Big timeline dot placed directly on the vertical line */}
							<div className="absolute left-6 w-5 h-5 rounded-full bg-primary border-4 border-background -translate-x-1/2 z-10 shadow-md flex items-center justify-center">
								<div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
							</div>

							<Card className="border shadow bg-accent-foreground md:bg-transparent p-6 w-full">
								{/*title, role and duration*/}
								<div className="flex flex-row justify-between items-start">
									<div className="flex flex-col gap-2">
										<h1 className="font-lora tracking-widest text-2xl">
											{data.title}
										</h1>
										<span className="font-mono tracking-widest text-[10px] text-neutral-500 uppercase">
											{data.company}
										</span>
									</div>
									<span className="font-mono tracking-widest text-[8px] bg-accent rounded-full text-black p-1 pl-4 pr-4 font-bold uppercase">
										{data.duration}
									</span>
								</div>
								{/*description & tag*/}
								<div className="flex flex-col gap-8 mt-4">
									<p className="font-mono tracking-widest text-[10px] text-neutral-600">
										{data.desc}
									</p>
									<div className="flex flex-col md:flex-row md:items-center gap-2">
										<p className="font-mono tracking-widest text-[8px] text-neutral-400 uppercase">
											Highlights:
										</p>
										<div className="flex flex-row flex-wrap gap-2">
											{data.tags.map((tag) => (
												<span
													key={tag}
													className="font-mono tracking-widest text-[8px] bg-accent text-black rounded-md p-1 pl-3 pr-3">
													{tag}
												</span>
											))}
										</div>
									</div>
								</div>
							</Card>
						</div>
					))}
				</div>
			</div>

			{/*Stack*/}
			<div className="mt-5">
				{/*header*/}
				<div className="flex flex-row justify-between items-center">
					<div className="flex flex-col gap-2">
						<span className="font-mono text-[8px] tracking-widest text-neutral-500">
							Toolbox
						</span>
						<h1 className="font-lora tracking-widest text-xl md:text-3xl">
							Technologies & Craft
						</h1>
						<p className="font-mono text-[10px] tracking-widest">
							Curated languages, frameworks, and infrastructure I
							reach for daily to build reliable, high-speed
							products.
						</p>
					</div>
				</div>
				<div className="mt-5">
					<MyStacks />
				</div>
			</div>

			{/*Connect*/}
			<div className="mt-5">
				<ConversationSection />
			</div>
		</div>
	);
};

export default AboutPage;
