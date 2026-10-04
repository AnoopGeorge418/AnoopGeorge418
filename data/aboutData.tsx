import { Layers, Zap, Brain } from 'lucide-react';

import {
	AboutApproachType,
	AboutHeroCardType,
	AboutWorkExperienceType,
} from '@/types/aboutTypes';

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

export const AboutWorkExperienceData: AboutWorkExperienceType = [
	{
		title: 'Independent Developer & Builder',
		company: 'Freelance / Independent',
		desc: 'Currently building my portfolio while learning by doing — developing projects across frontend, backend, AI, and developer tooling rather than limiting myself to a single technology or category. My goal is to become the kind of developer who can take an idea, figure out what it needs, learn whatever is necessary, and build it. This phase marks the beginning of my transition from learning primarily for myself to building projects for real users and working with clients as a freelancer.',
		duration: '2026 – Present',
		tags: [
			'Freelancing',
			'Full Stack',
			'Backend',
			'AI',
			'Web Development',
			'Open Source',
			'Product Development',
		],
	},

	{
		title: 'Open Source Developer — FastStrapy',
		company: 'Independent / Open Source',
		desc: 'Built FastStrapy after repeatedly recreating the same FastAPI project structure, configuration, and boilerplate whenever starting a new project. Instead of repeating the process again, I built a CLI that automates it — reducing a setup process that took 30+ minutes to under 2 minutes. Designed and published the project as an open-source developer tool using Python, Typer, Pydantic, Jinja2, and Alembic, with an architecture designed to remain customizable and extensible.',
		duration: 'August 2026 – Present',
		tags: [
			'Python',
			'FastAPI',
			'Typer',
			'Pydantic',
			'Jinja2',
			'Alembic',
			'CLI',
			'Open Source',
			'Developer Tools',
			'Automation',
		],
	},

	{
		title: 'Software Developer — Independent',
		company: 'Independent',
		desc: "Started taking software development seriously and shifting from simply learning technologies to actually building with them. I began focusing more heavily on Python, backend development, FastAPI, APIs, AI integration, and modern web development. Developer videos, project devlogs, and seeing people build ambitious things pushed me toward a simple realization: coding becomes a lot more fun when you're actually creating something of your own.",
		duration: '2026 – Present',
		tags: [
			'Python',
			'FastAPI',
			'Backend',
			'APIs',
			'AI',
			'Web Development',
			'Self Learning',
		],
	},

	{
		title: 'Master of Computer Applications (MCA)',
		company: 'Manipal Academy of Higher Education (MAHE)',
		desc: 'Started my MCA as the next step in my education while also using the flexibility of an online program to explore software development independently. Rather than relying entirely on coursework, I began spending more time learning through documentation, tutorials, developer content, and hands-on experimentation. My interests gradually shifted toward backend development, AI, automation, and building software that solves actual problems.',
		duration: '2025 – 2027 · Present',
		tags: [
			'MCA',
			'Software Engineering',
			'Backend Development',
			'AI',
			'Python',
		],
	},

	{
		title: 'Exploration & Self-Learning',
		company: 'Independent',
		desc: "After completing my BCA, I spent time exploring different directions before deciding what I actually wanted to pursue. I completed a Data Science course, explored different career paths, applied for jobs, and spent time figuring out where my interests really were. It wasn't the most productive period of my journey, but it helped me realize that I enjoy learning by building things far more than simply following a predefined career path.",
		duration: '2023 – 2025',
		tags: [
			'Self Learning',
			'Data Science',
			'Career Exploration',
			'Programming',
		],
	},

	{
		title: 'Web Development Intern',
		company: 'Qtech Solutions',
		desc: 'Worked as a frontend-focused web development intern as part of a team developing a Church Management System. Contributed to the frontend using React, JavaScript, and CSS while working with REST APIs, Express/Next.js, and PostgreSQL on the backend and database side. This was my first experience working on a real-world application as part of a development team and taught me how to turn requirements into a working product — along with the occasional lesson in why teamwork can be surprisingly complicated. 😂',
		duration: '6 Months · 2023',
		tags: [
			'React',
			'JavaScript',
			'CSS',
			'Next.js',
			'Express.js',
			'PostgreSQL',
			'REST API',
			'Teamwork',
		],
	},

	{
		title: 'Bachelor of Computer Applications (BCA)',
		company: 'SDM Degree College, Ujire',
		desc: "Started my journey into computers and programming through a BCA. I was introduced to programming, web development, databases, and software projects, although college itself wasn't where I developed my strongest interest in building software. My first programming projects included small applications such as a Python calculator, along with web development projects using JavaScript and React.",
		duration: '2020 – 2023',
		tags: [
			'BCA',
			'Python',
			'JavaScript',
			'React',
			'Web Development',
			'Programming',
		],
	},

	{
		title: 'Pre-University Course — Commerce',
		company: 'Vani Pre University College',
		desc: "Pursued Commerce during my pre-university education. At this point, software development wasn't really part of the plan — that came later, when I ended up choosing computer applications for my degree.",
		duration: '2018 – 2020',
		tags: ['PUC', 'Commerce', 'Higher Secondary'],
	},

	{
		title: 'Secondary School Leaving Certificate (SSLC)',
		company: 'Mariyambika English Medium School',
		desc: 'Completed my secondary education at Mariyambika English Medium School. This marked the beginning of my academic journey before moving into higher secondary education.',
		duration: 'Until 2018',
		tags: ['SSLC', 'School', 'Secondary Education'],
	},
];
