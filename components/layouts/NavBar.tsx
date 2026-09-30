'use client';

import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import {
	Zap,
	UserRound,
	LucideHome,
	BriefcaseBusiness,
	Layers3,
	Code2,
	NotebookText,
} from 'lucide-react';

import { FaGithub } from 'react-icons/fa';
import { ImLinkedin } from 'react-icons/im';

import { Button } from '../ui/button';

import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@/components/ui/tooltip';

const navItems = [
	{ name: 'Home', href: '/#hero', icon: LucideHome },
	{ name: 'Works', href: '/works', icon: BriefcaseBusiness },
	{ name: 'About', href: '/about', icon: UserRound },
	{ name: 'Services', href: '/#services', icon: Layers3 },
	{ name: 'Stacks', href: '/#stacks', icon: Code2 },
	{ name: 'Blogs', href: '/blogs', icon: NotebookText },
];

// Mobile navigation excludes homepage sections.
const mobileNavItems = navItems.filter(
	(item) => !['Services', 'Stacks'].includes(item.name),
);

export const NavBar = () => {
	const pathname = usePathname();

	const [hideNavbar, setHideNavbar] = useState(false);
	const [activeSection, setActiveSection] = useState('hero');

	// ==========================================
	// Desktop navbar scroll behavior
	// ==========================================
	useEffect(() => {
		let lastY = window.scrollY;

		const onScroll = () => {
			const currentY = window.scrollY;

			if (currentY > lastY && currentY > 80) {
				setHideNavbar(true);
			} else if (currentY < lastY) {
				setHideNavbar(false);
			}

			lastY = currentY;
		};

		window.addEventListener('scroll', onScroll, { passive: true });

		return () => {
			window.removeEventListener('scroll', onScroll);
		};
	}, []);

	// ==========================================
	// Track homepage sections
	// ==========================================
	useEffect(() => {
		// Only track sections on homepage.
		// No synchronous setState here.
		if (pathname !== '/') {
			return;
		}

		const sections = ['hero', 'works', 'stacks', 'services'];

		const handleScroll = () => {
			const scrollPosition = window.scrollY + window.innerHeight * 0.35;

			let currentSection = 'hero';

			for (const sectionId of sections) {
				const section = document.getElementById(sectionId);

				if (!section) {
					continue;
				}

				if (scrollPosition >= section.offsetTop) {
					currentSection = sectionId;
				}
			}

			setActiveSection(currentSection);
		};

		handleScroll();

		window.addEventListener('scroll', handleScroll, { passive: true });

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [pathname]);

	// ==========================================
	// Desktop active navigation
	// ==========================================
	const isActive = (href: string, name: string) => {
		// Homepage section navigation
		if (pathname === '/') {
			if (name === 'Home') {
				return activeSection === 'hero';
			}

			if (name === 'Works') {
				return activeSection === 'works';
			}

			if (name === 'Stacks') {
				return activeSection === 'stacks';
			}

			if (name === 'Services') {
				return activeSection === 'services';
			}

			return false;
		}

		// Regular pages
		if (!href.includes('#')) {
			return pathname === href;
		}

		return false;
	};

	// ==========================================
	// Mobile active navigation
	// ==========================================
	//
	// On the homepage, Home stays active
	// regardless of which section is visible.
	//
	const isMobileActive = (href: string, name: string) => {
		if (pathname === '/') {
			return name === 'Home';
		}

		if (!href.includes('#')) {
			return pathname === href;
		}

		return false;
	};

	return (
		<>
			{/* ========================================
			    Desktop Navbar
			======================================== */}
			<nav
				className={cn(
					'fixed top-0 left-1/2 z-50 hidden',
					'h-15 w-[70%] -translate-x-1/2',
					'items-center justify-between',
					'rounded-full p-2',
					'shadow-[0_0_10px_rgba(0,0,0,0.10)]',
					'transition-transform duration-300 ease-in-out',
					'md:mt-5 md:flex md:px-10',
					hideNavbar ? 'translate-y-[-150%]' : 'translate-y-0',
				)}>
				{/* Logo */}
				<Link href="/" className="flex shrink-0 items-center gap-1">
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

				{/* Desktop Navigation */}
				<div className="flex items-center gap-10 uppercase text-gray-500">
					{navItems.map((item) => {
						const active = isActive(item.href, item.name);

						return (
							<Link
								key={item.name}
								href={item.href}
								className={cn(
									'font-mono text-sm font-bold tracking-widest transition-all',
									'hover:text-gray-950 hover:underline',
									active &&
										'text-gray-950 underline underline-offset-4',
								)}>
								{item.name}
							</Link>
						);
					})}
				</div>

				{/* Social Links + CTA */}
				<div className="flex items-center gap-6">
					{/* GitHub */}
					<Link
						href="https://github.com/AnoopGeorge418"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="GitHub">
						<FaGithub className="h-5 w-5 transition-opacity hover:opacity-60" />
					</Link>

					{/* LinkedIn */}
					<Link
						href="https://www.linkedin.com/in/anoop-george418/"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="LinkedIn">
						<ImLinkedin className="h-5 w-5 transition-opacity hover:opacity-60" />
					</Link>

					{/* Get In Touch */}
					<Button className="h-10 w-45 cursor-pointer gap-2 uppercase tracking-widest">
						<Zap className="h-5 w-5" />
						Get In Touch
					</Button>
				</div>
			</nav>

			{/* ========================================
			    Mobile Bottom Tab Bar
			======================================== */}
			<TooltipProvider>
				<nav
					className="
						fixed right-0 bottom-3 left-0
						z-50
						mx-auto
						w-[96%]
						rounded-2xl
						border
						bg-gray-100/95
						p-2
						shadow-[0_0_15px_rgba(0,0,0,0.12)]
						backdrop-blur-md
						md:hidden
					">
					<div className="flex flex-nowrap items-center justify-around">
						{/* Navigation */}
						{mobileNavItems.map((item) => {
							const Icon = item.icon;

							const active = isMobileActive(item.href, item.name);

							return (
								<Tooltip key={item.name}>
									<TooltipTrigger>
										<Link
											href={item.href}
											aria-label={item.name}
											className={cn(
												'flex h-10 w-10 shrink-0 items-center justify-center rounded-xl',
												'transition-all duration-200',
												active &&
													'bg-white text-black shadow-[0_2px_8px_rgba(0,0,0,0.15)]',
												!active &&
													'text-gray-500 hover:bg-gray-200 hover:text-gray-900',
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
									className="
										flex h-10 w-10 shrink-0
										items-center justify-center
										rounded-xl
										text-gray-500
										transition
										hover:bg-gray-200
										hover:text-gray-900
									">
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
									className="
										flex h-10 w-10 shrink-0
										items-center justify-center
										rounded-xl
										text-gray-500
										transition
										hover:bg-gray-200
										hover:text-gray-900
									">
									<ImLinkedin className="h-5 w-5" />
								</Link>
							</TooltipTrigger>

							<TooltipContent side="top">
								<p>LinkedIn</p>
							</TooltipContent>
						</Tooltip>

						{/* Get In Touch */}
						<Tooltip>
							<TooltipTrigger>
								<Link
									href="/#hero"
									aria-label="Get In Touch"
									className="
										flex h-10 w-10 shrink-0
										items-center justify-center
										rounded-xl
										text-gray-500
										transition
										hover:bg-gray-200
										hover:text-gray-900
									">
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
