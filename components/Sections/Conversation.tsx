import { ReactNode } from 'react';
import Link from 'next/link';
import { Button } from '../ui/button';

import { CopyIcon, Mail, MoveUpRight } from 'lucide-react';
import { Card } from '../ui/card';

import { BsInstagram } from 'react-icons/bs';
import { ImLinkedin } from 'react-icons/im';
import { RiTwitterXLine } from 'react-icons/ri';
import { PiThreadsLogoBold } from 'react-icons/pi';

export const ContactInfo = {
	email: 'anoopgeorge418@gmail.com',
	linkedin: 'https://www.linkedin.com/in/anoop-george418/',
	threads: 'https://www.threads.com/@____anoopgeorge418____?hl=en',
	insta: 'https://www.instagram.com/____anoopgeorge418____/',
	x: 'https://x.com/Anoopgeorg_',
};

export type SocialCardType = {
	icon: ReactNode;
	type: string;
	userTag: string;
	link: string;
	info: string;
}[];

const SocialCardData = [
	{
		icon: <Mail size={15} />,
		type: 'Email',
		userTag: 'anoopgeorge@gmail.com',
		link: ContactInfo.email,
		info: 'Send an Email',
	},
	{
		icon: <ImLinkedin size={15} />,
		type: 'Linkedin',
		userTag: 'anoopgeorge@linkedin',
		link: ContactInfo.linkedin,
		info: 'Connect with Me',
	},
	{
		icon: <PiThreadsLogoBold size={15} />,
		type: 'Threads',
		userTag: 'anoopgeorge@threads',
		link: ContactInfo.threads,
		info: 'Follow on Threads',
	},
	{
		icon: <BsInstagram size={15} />,
		type: 'Instagram',
		userTag: 'anoopgeorge@instagram',
		link: ContactInfo.insta,
		info: 'View Instagram',
	},
	{
		icon: <RiTwitterXLine size={15} />,
		type: 'X / Twitter',
		userTag: 'anoopgeorge@x',
		link: ContactInfo.x,
		info: 'Follow on X',
	},
];

export const ConversationSection = () => {
	return (
		<div className="flex flex-col bg-accent w-full pt-5 p-4 rounded-md pl-6 pr-6">
			{/*header*/}
			<div className="flex flex-col gap-6">
				{/*tag*/}
				<div className="inline-flex w-full md:w-107 justify-center md:justify-start items-center gap-2 px-4 py-2 rounded-full border border-neutral-200/80 bg-background backdrop-blur-md shadow-sm">
					<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
					<span className="font-mono tracking-widest text-[7px] md:text-[8px] text-black uppercase">
						Available for freelance & contracts • Q1 / Q2 2026
					</span>
				</div>

				{/*content*/}
				<div className="flex flex-row gap-2 justify-between items-center">
					{/*info*/}
					<div className="flex flex-col gap-4">
						<h1 className="font-lora text-2xl md:text-4xl">
							Direct Dispatch & Priority Inquiries
						</h1>
						<p className="font-mono tracking-widest text-[10px] w-auto md:w-180">
							Direct pipeline to inbox with zero agency middlemen
							or friction. Typically replying within 24 hours with
							project scoping and availability notes.
						</p>
					</div>
					{/*buttons*/}
					<div className="flex flex-col gap-4 md:w-150">
						<Link
							href={ContactInfo.email}
							className="flex flex-row gap-2">
							<Button className="flex w-full h-12 font-mono tracking-widest uppercase text-[8px] items-center justify-center cursor-pointer">
								Send an Email
								<Mail />
							</Button>
						</Link>
						<Link
							href={ContactInfo.email}
							className="flex flex-row gap-2">
							<Button className="flex w-full h-12 font-mono tracking-widest uppercase text-[8px] items-center justify-center cursor-pointer bg-white text-black hover:bg-amber-50">
								<CopyIcon />
								Copy Email Address
							</Button>
						</Link>
					</div>
				</div>

				{/*links*/}
				<div className="mt-5">
					{/*headers*/}
					<div className="flex flex-row justify-between items-center">
						<span className="font-mono text-[8px] md:text-[10px] text-neutral-500 tracking-widest uppercase">
							PRIMARY CHANNELS & SOCIAL HUBS
						</span>
						<span className="font-mono hidden md:flex text-[10px] text-neutral-500 tracking-widest">
							Fast response across all networks
						</span>
					</div>
					{/*cards*/}
					<div className="mt-2 grid grid-col-1 md:grid-cols-5 gap-4 cursor-pointer">
						{SocialCardData.map((data) => (
							<Link href={data.link} key={data.type}>
								<Card className="p-4 gap-2">
									<div className="flex flex-row justify-between">
										<div className="p-2 rounded-lg bg-accent w-[13%] items-center flex justify-center">
											{data.icon}
										</div>
										<div className="p-2 rounded-lg bg-accent w-[13%] items-center flex justify-center">
											<MoveUpRight />
										</div>
									</div>
									<div className="flex gap-1 flex-col mt-2">
										<div className="font-lora tracking-wider text-md font-bold">
											{data.type}
										</div>
										<div className="font-mono tracking-wider text-[10px]">
											{data.userTag}
										</div>
									</div>
									<div className="mt-2 flex justify-center items-center bg-accent h-10 rounded-md text-[10px] tracking-widest">
										{data.info}
									</div>
								</Card>
							</Link>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
