"use client"

import { useEffect, useState } from 'react';

import { NavBar } from '@/components/layouts/NavBar';
import { Button } from '@/components/ui/button';

import { MoveUpRight, MoveDown, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { MyStacks } from '@/components/Stacks';

const Home = () => {

    const [hideNavbar, setHideNavbar] = useState(false)

    useEffect(() => {
        let lastY = window.scrollY;
        const onScroll = () => {
            const y = window.scrollY;
            if (y > lastY && y > 80) {
                setHideNavbar(true) // scrolling down
            } else if (y < lastY) {
                setHideNavbar(false) // scrolling up
            }
            lastY = y;
        }

        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);
    
	return (
		<div className="flex flex-col min-h-screen gap-4 bg-background text-foreground items-center">
            <div className={`fixed top-0 inset-x-0 z-50 flex justify-center transition-transform duration-300 ${hideNavbar ? '-translate-y-full' : 'translate-y-0'}`}>
				<NavBar />
			</div>

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
						<Button className="flex justify-center items-center w-80 md:w-56 cursor-pointer h-15 md:h-12 gap-2 border border-gray-300 bg-white/80 hover:bg-neutral-100 text-neutral-600 rounded-full md:rounded-md">
							<span className="font-mono tracking-widest uppercase text-[8px] md:text-sm">
								Explore My Works
							</span>
							<MoveDown className="w-2 h-2" />
						</Button>
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

            {/*Works*/}
            <div className="flex flex-col w-full pl-6 pr-6 md:pl-10 md:pr-10 shadow pt-4 pb-4">
                {/*header*/}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                    <div className='flex flex-col space-y-4'>
                        <h1 className='font-lora text-3xl md:text-5xl tracking-widest'>Works</h1>
                        <p className="font-mono tracking-wider max-w-md md:max-w-190 text-[10px] md:text-md  text-neutral-600 leading-relaxed">A collection of projects I've built and shipped — from full-stack apps to experiments.
                            Each one reflects what I was learning at the time.
                        </p>
                    </div>
                    <Button className="w-full md:w-60 h-12 text-[8px] md:text-md font-mono tracking-widest uppercase shrink-0">
                        View All Works
                        <ArrowRight />
                    </Button>
                </div>

                {/*divider*/}
                <hr className="text-gray-800 h-2 rounded-full mt-2 w-full" />
                
                {/*bento cards*/}
                <div></div>
            </div>

            {/*Stacks*/}
            <section id='stacks' className="flex flex-col w-full pl-6 pr-6 md:pl-10 md:pr-10 my-20 shadow pt-4 pb-4">
                {/*header*/}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                    <div className='flex flex-col space-y-4'>
                        <h1 className='font-lora text-3xl md:text-5xl tracking-widest'>Stack & Tooling</h1>
                        <p className="font-mono tracking-wider max-w-md md:max-w-190 text-[10px] md:text-md  text-neutral-600 leading-relaxed">
                            The languages, frameworks, and engineering tools I rely on to architect,
                            build, and ship full-stack applications with high reliability.
                        </p>
                    </div>
                    <Button className="w-full md:w-60 h-12 text-[8px] md:text-md font-mono tracking-widest uppercase shrink-0">
                        <Link href="/about">Learn More About Me</Link>
                        <ArrowRight />
                    </Button>
                </div>
                
                {/*divider*/}
                <hr className="text-gray-800 h-2 rounded-full mt-2 w-full" />

                {/*content*/}
                <MyStacks />
            </section>
		</div>
	);
};

export default Home;
