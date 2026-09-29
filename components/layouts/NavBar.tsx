'use client';

import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import { Zap } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { ImLinkedin } from 'react-icons/im';
import {
	UserRound,
	LucideHome,
	BriefcaseBusiness,
	Layers3,
	Code2,
	NotebookText,
} from 'lucide-react';
import { Button } from '../ui/button';
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@/components/ui/tooltip';

const navItems = [
	{ name: 'Home', href: '#hero', icon: LucideHome },
	{ name: 'Works', href: '/works', icon: BriefcaseBusiness },
	{ name: 'About', href: '/about', icon: UserRound },
	{ name: 'Services', href: '#services', icon: Layers3 },
	{ name: 'Stacks', href: '#stacks', icon: Code2 },
	{ name: 'Blogs', href: '/blogs', icon: NotebookText },
];

export const NavBar = () => {
	// to get the current path
	const pathname = usePathname();

	return (
		<>
			{/* Desktop */}
			<nav className="mx-auto hidden h-15 w-[70%] items-center justify-between rounded-full p-2 shadow-[0_0_10px_rgba(0,0,0,0.10)] md:mt-5 md:flex md:px-10">
				{/* Logo */}
				<Link href="/" className="shrink-0 items-center gap-1 flex">
					<Image
						src="/logo.png"
						alt="Anoop George logo"
						width={20}
						height={20}
					/>
					<h1 className="font-lora text-xl font-black uppercase tracking-widest">
						Anoop George
					</h1>
				</Link>

				{/* Navigation */}
				<div className="flex items-center gap-10 uppercase text-gray-500">
					{navItems.map((item) => {
						const isActive = pathname === item.href;
						// const Icon = item.icon;

						return (
							<Link
								key={item.name}
								href={item.href}
								className={cn(
									'font-mono text-sm tracking-widest transition-all',
									'hover:text-gray-950 hover:underline font-bold',
									isActive &&
										'font-bold text-gray-950 underline underline-offset-4',
								)}>
								{item.name}
							</Link>
						);
					})}
				</div>

				{/* Social Links + CTA */}
				<div className="flex items-center gap-6">
					<Link
						href="https://github.com/AnoopGeorge418"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="GitHub">
						<FaGithub className="h-5 w-5 transition-opacity hover:opacity-60" />
					</Link>

					<Link
						href="https://www.linkedin.com/in/anoop-george418/"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="LinkedIn">
						<ImLinkedin className="h-5 w-5 transition-opacity hover:opacity-60" />
					</Link>

					<Button className="h-10 w-45 cursor-pointer tracking-widest uppercase gap-2">
						<Zap className="h-5 w-5" />
						Get In Touch
					</Button>
				</div>
			</nav>

			{/* Mobile tab bar */}
			<TooltipProvider>
				<nav className="fixed right-0 bottom-3 left-0 z-50 mx-auto w-[96%] rounded-2xl border bg-white/95 p-2 shadow-[0_0_15px_rgba(0,0,0,0.12)] backdrop-blur-md md:hidden">
					<div className="flex flex-nowrap items-center justify-around">
						{/* Navigation Icons */}
						{navItems.map((item) => {
							const Icon = item.icon;
							const isActive = item.href.startsWith('#')
								? false
								: pathname === item.href;

							return (
								<Tooltip key={item.name}>
									<TooltipTrigger>
										<Link
											href={item.href}
											aria-label={item.name}
											className={cn(
												'flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-all',
												isActive
													? 'bg-black text-white'
													: 'text-gray-500 hover:bg-gray-100 hover:text-gray-900',
											)}>
											<Icon className="h-5 w-5" />
										</Link>
									</TooltipTrigger>

									<TooltipContent side="top">
										<p>{item.name}</p>
									</TooltipContent>
								</Tooltip>
							);
						})}

						{/* GitHub */}
						<Tooltip>
							<TooltipTrigger>
								<Link
									href="https://github.com/AnoopGeorge418"
									target="_blank"
									rel="noopener noreferrer"
									aria-label="GitHub"
									className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-gray-500 transition hover:bg-gray-100 hover:text-gray-900">
									<FaGithub className="h-5 w-5" />
								</Link>
							</TooltipTrigger>

							<TooltipContent side="top">
								<p>GitHub</p>
							</TooltipContent>
						</Tooltip>

						{/* LinkedIn */}
						<Tooltip>
							<TooltipTrigger>
								<Link
									href="https://www.linkedin.com/in/anoop-george418/"
									target="_blank"
									rel="noopener noreferrer"
									aria-label="LinkedIn"
									className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-gray-500 transition hover:bg-gray-100 hover:text-gray-900">
									<ImLinkedin className="h-5 w-5" />
								</Link>
							</TooltipTrigger>

							<TooltipContent side="top">
								<p>LinkedIn</p>
							</TooltipContent>
						</Tooltip>
						{/* Get in touch */}
						<Tooltip>
							<TooltipTrigger>
								<Link
									href="#hero"
									aria-label="Get In touch"
									className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-gray-500 transition hover:bg-gray-100 hover:text-gray-900">
									<Zap className="h-5 w-5" />
								</Link>
							</TooltipTrigger>

							<TooltipContent side="top">
								<p>Get In Touch</p>
							</TooltipContent>
						</Tooltip>
					</div>
				</nav>
			</TooltipProvider>
		</>
	);
};
