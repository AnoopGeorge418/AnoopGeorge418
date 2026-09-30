import type { Metadata } from 'next';
import { Lora, Geist_Mono } from 'next/font/google';

import './globals.css';

import { cn } from '@/lib/utils';
import { DisableBrowserContext } from '@/context/disableBrowserContext';
import { NavBar } from '@/components/layouts/NavBar';

const loraSerif = Lora({ variable: '--font-lora', subsets: ['latin'] });

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Anoop George - Portfolio',
	description:
		"I'am Anoop George! A solo freelance developer who loves to build apps, software and games. This is my portfolio website to showcase my works and timelines.",
};

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html
			lang="en"
			className={cn(
				'h-full',
				'antialiased',
				loraSerif.variable,
				geistMono.variable,
			)}>
			<body className="min-h-full">
				<DisableBrowserContext />

				{/* Global navbar */}
				<NavBar />

				{/* Current page */}
				{children}
			</body>
		</html>
	);
}
