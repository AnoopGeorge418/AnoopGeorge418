import type { Metadata } from 'next';
import { Lora, Geist_Mono } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { DisableBrowserContext } from '@/context/disableBrowserContext';

// Primary font
const loraSerif = Lora({ variable: '--font-lora', subsets: ['latin'] });

// Secondary font
const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Anoop George - Portfolio',
	description:
		"I'am Anoop George! A solo freelance developer who loves to build apps, software and games. This is my portfolio website to showcase my works and timelines.",
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
	return (
		<html
			lang="en"
			className={cn(
				'h-full',
				'antialiased',
				loraSerif.variable,
				geistMono.variable,
            )}>
            <body className="min-h-full flex flex-col">
                <DisableBrowserContext />
                {children}
            </body>
		</html>
	);
}
