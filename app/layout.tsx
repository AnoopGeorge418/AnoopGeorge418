import type { Metadata } from 'next';
import { Lora, Geist_Mono } from 'next/font/google';
import './globals.css';

const lora = Lora({ variable: '--font-lora', subsets: ['latin'] });

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
			className={`${lora.variable} ${geistMono.variable} h-full antialiased`}>
			<body className="min-h-full flex flex-col">{children}</body>
		</html>
	);
}
