import { Layers, Zap, Brain } from 'lucide-react';

import { AboutApproachType, AboutHeroCardType } from '@/types/aboutTypes';

export const AboutHeroCardData: AboutHeroCardType = [
	{ title: 'Location', info: 'India · Global Remote' },
	{ title: 'Experience', info: '1+ Years Building' },
	{ title: 'Availability', info: 'Q2 / Q3 2026' },
	{ title: 'Collaboration', info: '100% Direct 1:1' },
];

export const AboutApproachData: AboutApproachType = [
	{
		icon: <Layers />,
		title: 'What I Do',
		desc: 'Full-stack architecture, rapid design-to-code prototyping, and production deployment from zero to scale. I handle everything from database schema design to responsive, accessible client interfaces.',
		tags: ['End-to-End', 'Saas', 'APIs'],
	},
	{
		icon: <Zap />,
		title: 'How I Work',
		desc: 'Direct 1:1 engagement with zero agency middle-men or bureaucratic lag. High velocity execution, clear asynchronous updates, and an unrelenting obsession with tactile 60fps micro-interactions.',
		tags: ['Solo Force', 'Sub-24h Feedback'],
	},
	{
		icon: <Brain />,
		title: 'Beyond Code',
		desc: 'Exploring generative AI inference workflows, real-time 3D shaders, lightweight game engines, and typography history. I stay continually curious to keep client products modern and differentiated.',
		tags: ['GenAI', 'WebGL', 'Systems'],
	},
];
