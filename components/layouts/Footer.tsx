import Image from 'next/image';
import Link from 'next/link';

export const Footer = () => {
	return (
		<div className="flex flex-col md:flex-row bg-accent-foreground w-full pt-5 p-4 rounded-md pl-6 pr-6 pb-30">
			<div className="flex flex-col gap-4 justify-center items-start">
				{/* Logo */}
				<Link href="/" className="flex shrink-0 items-center gap-1">
					<Image
						src="/logo.png"
						alt="Anoop George logo"
						width={20}
						height={20}
					/>
					<h1 className="font-lora text-sm md:text-xl font-black uppercase tracking-widest text-secondary">
						Anoop George
					</h1>
				</Link>
				<p className="font-mono text-[10px] text-secondary w-full md:w-[60%]">
					Crafting resilient web apps, local-first tools, and 3D
					experiences with high architectural rigor.
				</p>
				<div className="inline-flex w-full md:w-107 justify-center md:justify-start items-center gap-2 px-4 py-2 rounded-full border border-neutral-200/80 bg-background backdrop-blur-md shadow-sm">
					<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
					<span className="font-mono tracking-widest text-[7px] md:text-[8px] text-black uppercase">
						Available for freelance & contracts • Q1 / Q2 2026
					</span>
				</div>
			</div>
			{/*items*/}
			<div className="flex flex-row justify-between items-center gap-30 md:justify-center">
				{/*directory*/}
				<div className="flex flex-col gap-2 justify-center items-start text-secondary mt-4 md:mt-0">
					<p className="text-sm font-lora tracking-widest font-bold">
						Directories
					</p>
					<Link
						href="/#home"
						className="font-mono text-[10px] tracking-widest cursor-pointer uppercase">
						Home
					</Link>
					<Link
						href="/works"
						className="font-mono text-[10px] tracking-widest cursor-pointer uppercase">
						Works
					</Link>
					<Link
						href="/about"
						className="font-mono text-[10px] tracking-widest cursor-pointer uppercase">
						About
					</Link>
					<Link
						href="/#services"
						className="font-mono text-[10px] tracking-widest cursor-pointer uppercase">
						Services
					</Link>
					<Link
						href="/#stacks"
						className="font-mono text-[10px] tracking-widest cursor-pointer uppercase">
						Stack
					</Link>
					<Link
						href="/#blogs"
						className="font-mono text-[10px] tracking-widest cursor-pointer uppercase">
						Blogs
					</Link>
				</div>
				{/*directory*/}
				<div className="flex flex-col gap-2 justify-center items-start text-secondary mt-4 md:mt-0">
					<p className="text-sm font-lora tracking-widest font-bold">
						Connect & Code
					</p>
					<Link
						href="/#home"
						className="font-mono text-[10px] tracking-widest cursor-pointer uppercase">
						GitHub ↗
					</Link>
					<Link
						href="/works"
						className="font-mono text-[10px] tracking-widest cursor-pointer uppercase">
						Youtube ↗
					</Link>
					<Link
						href="/about"
						className="font-mono text-[10px] tracking-widest cursor-pointer uppercase">
						Linkedin ↗
					</Link>
					<Link
						href="/#stacks"
						className="font-mono text-[10px] tracking-widest cursor-pointer uppercase">
						Threads ↗
					</Link>
					<Link
						href="/#blogs"
						className="font-mono text-[10px] tracking-widest cursor-pointer uppercase">
						Discord ↗
					</Link>
					<Link
						href="/#services"
						className="font-mono text-[10px] tracking-widest cursor-pointer uppercase">
						X / Twitter ↗
					</Link>
				</div>
			</div>
		</div>
	);
};
