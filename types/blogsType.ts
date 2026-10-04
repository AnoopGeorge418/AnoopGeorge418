export type Blogstype = {
	tag: OfficialTags;
	infoTag?: string;
	title: string;
	desc: string;
	dateOfPublish: string;
	blogLength?: string;
	blogPageUrl: string;
};

export type OfficialTags = 'DEV LOG' | 'CASE STUDY' | 'REFLECTION';
