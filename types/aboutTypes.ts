import { ReactNode } from 'react';

export type AboutHeroCardType = { title: string; info: string }[];

export type AboutApproachType = {
	icon: ReactNode;
	title: string;
	desc: string;
	tags: string[];
}[];

export type AboutWorkExperienceType = {
	title: string;
	company: string;
	desc: string;
	duration: string;
	tags: string[];
}[];
