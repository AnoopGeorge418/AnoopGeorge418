import { ReactNode } from 'react';
import { Card, CardDescription, CardTitle } from '../ui/card';
import { PanelsTopLeft, LayoutDashboard, Layers, SunSnow } from 'lucide-react';

type serviceCard = {
	icon: ReactNode;
	title: string;
	desc: string;
	items: string[];
};

const ServiceCardData: serviceCard[] = [
	{
		icon: <PanelsTopLeft />,
		title: 'Web Development',
		desc: 'Custom, high-performance websites and landing pages built with modern frameworks. Fast, responsive, and engineered to convert.',
		items: [
			'Responsive & mobile-first',
			'High Lighthouse scores',
			'Fluid micro-interactions',
		],
	},
	{
		icon: <Layers />,
		title: 'Full-Stack Apps',
		desc: 'End-to-end web applications with robust backends, resilient databases, and secure authentication — engineered for production scale.',
		items: [
			'Type-safe API contracts',
			'Relational data models',
			'Role-based authorization',
		],
	},
	{
		icon: <LayoutDashboard />,
		title: 'Dashboards & Tools',
		desc: 'Admin panels, business intelligence dashboards, and internal software tailored to eliminate spreadsheet chaos and automate workflows.',
		items: [
			'Automated CSV/Excel ingest',
			'Live financial data grids',
			'Auditor compliance reports',
		],
	},
	{
		icon: <SunSnow />,
		title: 'AI Engineering',
		desc: 'Leveraging generative AI and LLM workflows to build rapid prototypes, intelligent RAG pipelines, and automated business agents.',
		items: [
			'Contextual RAG systems',
			'Webhook-triggered workflows',
			'Rapid MVP prototypes',
		],
	},
];

export const MyBlogs = () => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-accent w-full pt-5 p-4 rounded-md">
			{ServiceCardData.map((service) => (
				<Card key={service.title} className="p-4">
					<div className="bg-accent p-2 rounded-md w-12">
						{service.icon}
					</div>
					<CardTitle className="font-lora text-lg tracking-widest">
						{service.title}
					</CardTitle>
					<CardDescription className="w-auto md:w-100 tracking-widest font-mono text-neutral-400 leading-5 text-[10px] md:text-sm">
						{service.desc}
					</CardDescription>
					<ul className="list-none flex flex-col gap-3">
						{service.items.map((item) => (
							<li key={item} className="flex items-start gap-3">
								<span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-emerald-500 animate-pulse" />
								<span className="font-mono text-sm leading-5">
									{item}
								</span>
							</li>
						))}
					</ul>
				</Card>
			))}
		</div>
	);
};
