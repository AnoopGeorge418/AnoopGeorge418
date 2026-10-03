import { Button } from '@/components/ui/button';

import { MoveUpRight, MoveDown, ArrowRight } from 'lucide-react';
import Link from 'next/link';

import { MyStacks } from '@/components/Sections/Stacks';
import { MyServices } from '@/components/Sections/Services';
import { Footer } from '../components/layouts/Footer';
import { ConversationSection } from '@/components/Sections/Conversation';

const Home = () => {
	return (
		<div className="flex flex-col min-h-screen gap-4 bg-background text-foreground items-center">
			{/*hero section*/}
			<section
				id="hero"
				className="relative min-h-screen w-full flex justify-center items-center md:pt-0 overflow-hidden bg-background px-6">
				<div
					aria-hidden="true"
					className="pointer-events-none absolute inset-0 select-none z-0 justify-center items-center flex"
					style={{
						backgroundImage: `
                            linear-gradient(to right, var(--color-border) 1px, transparent 1px),
                            linear-gradient(to bottom, var(--color-border) 1px, transparent 1px)
                        `,
						backgroundSize: '48px 48px',
						maskImage:
							'radial-gradient(ellipse 70% 60% at 50% 45%, #000 30%, transparent 85%)',
						WebkitMaskImage:
							'radial-gradient(ellipse 70% 60% at 50% 45%, #000 30%, transparent 85%)',
					}}
				/>

				{/* Subtle ambient central warmth / depth glow */}
				<div
					aria-hidden="true"
					className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-180 h-130 bg-linear-to-tr from-amber-50/40 via-emerald-50/25 to-transparent rounded-full blur-3xl opacity-80 z-0"
				/>

				{/* Hero Foreground Content */}
				<div className="relative flex flex-col order-first z-10 max-w-4xl mx-auto text-center">
					<div className="mx-auto inline-flex items-center gap-2 px-6 py-2 rounded-full border border-neutral-200/80 bg-background backdrop-blur-md text-[11px] font-mono tracking-widest uppercase text-neutral-600 mb-8 shadow-sm justify-center order-first">
						<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
						<span className="font-mono text-[8px] md:text-sm">
							Freelance Developer • Web, Mobile, Desktop, AI &
							Games
						</span>
					</div>

					{/* Heading */}
					<h1 className="font-lora tracking-widest text-5xl md:text-6xl lg:text-8xl leading-tight mb-6">
						Anoop George
					</h1>

					{/* Tagline */}
					<p className="max-w-88 md:max-w-2xl mx-auto text-[12px] md:text-lg leading-relaxed mb-10 font-mono">
						Freelance developer specializing in engineering Web,
						Mobile, Desktop, AI apps, and Games — focused on solving
						real-world business and product problems.
					</p>

					{/* CTA Buttons */}
					<div className="flex flex-col md:flex-row items-center justify-center gap-4">
						<Button className="flex justify-center items-center w-80 md:w-56 cursor-pointer h-15 md:h-12 gap-2 rounded-full md:rounded-md">
							<span className="font-mono tracking-widest uppercase text-[8px] md:text-sm">
								Get In Touch
							</span>
							<MoveUpRight className="w-2 h-2" />
						</Button>
						<Link href="/works" className="cursor-pointer">
							<Button className="flex justify-center items-center w-80 md:w-56 h-15 md:h-12 gap-2 border border-gray-300 bg-white/80 hover:bg-neutral-100 text-neutral-600 rounded-full md:rounded-md">
								<span className="font-mono tracking-widest uppercase text-[8px] md:text-sm">
									Explore My Works
								</span>
								<MoveDown className="w-2 h-2" />
							</Button>
						</Link>
					</div>

					{/*tags*/}
					<div className="flex justify-center items-center flex-row py-12">
						<div className="bg-none md:bg-none bg-background w-95 md:w-full rounded-full border-none md:border md:border-gray-200 h-12 flex justify-center items-center flex-row gap-10 px-10 shadow-none md:shadow">
							<p className="font-mono text-[8px] md:text-sm font-medium tracking-wider">
								3+ Projects Shipped
							</p>
							<span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
							<p className="font-mono text-[8px] md:text-sm font-medium tracking-wider">
								100-Day Build Streak
							</p>
							<span className="w-2 h-2 rounded-full bg-gray-500 animate-pulse" />
							<p className="font-mono text-[8px] md:text-sm font-medium tracking-wider">
								<span className="text-green-300">Open</span> For
								Freelance Works
							</p>
						</div>
					</div>
				</div>
			</section>

			{/*Service*/}
			<section
				id="services"
				className="flex flex-col w-full pl-6 pr-6 md:pl-10 md:pr-10 my-20 pt-4 pb-4">
				{/*header*/}
				<div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
					<div className="flex flex-col space-y-4">
						<h1 className="font-lora text-3xl md:text-5xl tracking-widest">
							Services & Capabilities
						</h1>
						<p className="font-mono tracking-wider max-w-md md:max-w-190 text-[10px] md:text-md  text-neutral-600 leading-relaxed">
							I help ambitious individuals and high-velocity
							businesses turn ideas into working, resilient
							products — from custom interfaces to full-stack
							platforms.
						</p>
					</div>
					<Button className="w-full md:w-60 h-12 text-[8px] md:text-md font-mono tracking-widest uppercase shrink-0">
						<Link href="/about">Start A Project</Link>
						<ArrowRight />
					</Button>
				</div>

				{/*content*/}
				<div className="mt-5">
					<MyServices />
				</div>

				{/*CTA*/}
				<div className="flex flex-col md:flex-row justify-between bg-accent-foreground w-full rounded-md mt-10 p-6 min-h-40 md:h-40 items-center">
					<div className="flex flex-col gap-2 justify-start items-start">
						<h1 className="font-lora text-md md:text-3xl text-primary-foreground tracking-wider">
							Have a project in mind? Let's build it together.
						</h1>
						<p className="text-sm text-neutral-300 font-mono tracking-wider text-[10px] md:text-sm">
							Available for select freelance contracts, MVP
							builds, and architectural consulting.
						</p>
					</div>
					<Button
						variant="secondary"
						className="hover:bg-amber-50 cursor-pointer md:w-70 h-12 uppercase tracking-widest text-[8px] mt-7 md:mt-0 w-full">
						Initiate Discussion
						<MoveUpRight />
					</Button>
				</div>
			</section>

			{/*Stacks*/}
			<section
				id="stacks"
				className="flex flex-col w-full pl-6 pr-6 md:pl-10 md:pr-10 my-20 pt-4 pb-4">
				{/*header*/}
				<div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
					<div className="flex flex-col space-y-4">
						<h1 className="font-lora text-3xl md:text-5xl tracking-widest">
							Stack & Tooling
						</h1>
						<p className="font-mono tracking-wider max-w-md md:max-w-190 text-[10px] md:text-md  text-neutral-600 leading-relaxed">
							The languages, frameworks, and engineering tools I
							rely on to architect, build, and ship full-stack
							applications with high reliability.
						</p>
					</div>
					<Button className="w-full md:w-60 h-12 text-[8px] md:text-md font-mono tracking-widest uppercase shrink-0">
						<Link href="/about">Learn More About Me</Link>
						<ArrowRight />
					</Button>
				</div>

				{/*content*/}
				<div className="mt-5">
					<MyStacks />
				</div>
			</section>

			{/*Initiate conversation */}
			<div className="flex flex-col w-full pl-6 pr-6 md:pl-10 md:pr-10 my-20 pt-4 pb-4">
				{/*header*/}
				<div className="flex flex-col md:flex-row justify-center items-center md:items-end gap-6">
					<div className="flex flex-col items-center space-y-4">
						<h1 className="font-lora text-xl md:text-5xl tracking-widest text-center md:w-200">
							Let's Build Something Together
						</h1>
						<p className="text-center font-mono tracking-wider max-w-md md:max-w-190 text-[10px] md:text-md  text-neutral-600 leading-relaxed">
							Whether you need an architectural consultation, an
							end-to-end web system, or a high-polish visual
							experience — reach out across any channel below.
						</p>
					</div>
				</div>
				{/*content*/}
				<div className="mt-5">
					<ConversationSection />
				</div>
			</div>
		</div>
	);
};

export default Home;
