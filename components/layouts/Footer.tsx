'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ContactInfo } from '../Sections/Conversation';

const directory = [
	{ label: 'Works', href: '/works' },
	{ label: 'About', href: '/about' },
	{ label: 'Stack', href: '/#stacks' },
	{ label: 'Services', href: '/#services' },
	{ label: 'Testimonials', href: '/#testimonials' },
	{ label: 'Blogs', href: '/#blogs' },
	{ label: 'Contact', href: '/#contact' },
];

const connect = [
	{ label: 'GitHub', href: '#' },
	{ label: 'YouTube', href: '#' },
	{ label: 'LinkedIn', href: '#' },
	{ label: 'X / Twitter', href: '#' },
	{ label: 'ReadCV / Resume', href: '#' },
];

const headingClass =
	'font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-secondary/50';

const linkClass =
	'w-fit font-mono text-xs text-secondary/60 transition-colors hover:text-secondary focus-visible:text-secondary focus-visible:outline-none focus-visible:underline underline-offset-4';

export const Footer = () => {
	const [copied, setCopied] = useState(false);

	const copyEmail = async () => {
		try {
			await navigator.clipboard.writeText(ContactInfo.email);
			setCopied(true);

			setTimeout(() => {
				setCopied(false);
			}, 2000);
		} catch {
			setCopied(false);
		}
	};

	return (
		<footer className="relative left-1/2 w-screen -translate-x-1/2 bg-accent-foreground px-6 pt-12 pb-8 md:px-12 md:pt-14 lg:px-20">
			{/* Main Footer Content */}
			<div className="grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-[2fr_1fr_1fr_1.5fr] lg:gap-x-12">
				{/* Brand */}
				<div className="col-span-2 flex flex-col items-start gap-4 lg:col-span-1">
					<Link href="/" className="flex items-center gap-3">
						<Image
							src="/logo.png"
							alt="Anoop George logo"
							width={28}
							height={28}
							className="rounded-full"
						/>

						<span className="font-lora text-xl font-semibold text-secondary">
							Anoop George
						</span>
					</Link>

					<p className="max-w-sm text-sm leading-relaxed text-secondary/60">
						Crafting resilient web apps, local-first tools, and 3D
						experiences with high architectural rigor.
					</p>

					<div className="inline-flex items-center gap-2 rounded-full border border-secondary/15 bg-secondary/5 px-4 py-2">
						<span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />

						<span className="font-mono text-xs text-secondary">
							Freelance Developer • Web, AI & Games
						</span>
					</div>
				</div>

				{/* Directory */}
				<nav
					aria-label="Directory"
					className="flex flex-col gap-3">
					<p className={headingClass}>Directory</p>

					{directory.map((item) => (
						<Link
							key={item.label}
							href={item.href}
							className={linkClass}>
							{item.label}
						</Link>
					))}
				</nav>

				{/* Connect & Code */}
				<nav
					aria-label="Connect and code"
					className="flex flex-col gap-3">
					<p className={headingClass}>Connect & Code</p>

					{connect.map((item) => (
						<a
							key={item.label}
							href={item.href}
							target="_blank"
							rel="noopener noreferrer"
							className={linkClass}>
							{item.label} ↗
						</a>
					))}
				</nav>

				{/* Direct Dispatch */}
				<div className="col-span-2 flex min-w-0 flex-col gap-3 lg:col-span-1">
					<p className={headingClass}>Direct Dispatch</p>

					<button
						type="button"
						onClick={copyEmail}
						aria-label="Copy email address"
						className="flex w-full cursor-pointer items-center justify-between gap-3 rounded-md border border-secondary/10 bg-secondary/5 px-3 py-2.5 text-left font-mono text-[11px] text-secondary transition-colors hover:bg-secondary/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary">
						<span className="min-w-0 break-all">
							{ContactInfo.email}
						</span>

						<span
							className="shrink-0 text-secondary/60"
							aria-live="polite">
							{copied ? 'Copied' : 'Copy'}
						</span>
					</button>

					<div className="flex items-center gap-2">
						<span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />

						<span className="font-mono text-[11px] text-secondary">
							Available for freelance Q2/Q3
						</span>
					</div>

					<p className="font-mono text-xs text-secondary/40">
						IST (UTC +5:30) • Operational
					</p>
				</div>
			</div>

			{/* Divider */}
			<hr className="mt-12 mb-6 h-px w-full border-0 bg-secondary/10" />

			{/* Bottom Bar */}
			<div className="flex flex-col-reverse items-start gap-3 font-mono text-[11px] text-secondary/40 sm:flex-row sm:items-center sm:justify-between">
				<p>
					© {new Date().getFullYear()} Anoop George. All rights
					reserved. Designed & engineered with precision.
				</p>

				<Link
					href="/#hero"
					className="transition-colors hover:text-secondary">
					Back to top ↑
				</Link>
			</div>
		</footer>
	);
};
