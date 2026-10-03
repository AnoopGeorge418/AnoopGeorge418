import type { ReactNode } from 'react';

import {
	BrainCircuit,
	Box,
	Gamepad2,
	Globe,
	Monitor,
	MoveUpRight,
	Play,
	Smartphone,
	Star,
	LockKeyhole,
} from 'lucide-react';

import { Card } from '@/components/ui/card';

import {
	buttonVariants,
} from '@/components/ui/button';

import { cn } from '@/lib/utils';

import type {
	WorkAccent,
	WorkCategory,
	WorkData,
	WorkProgressType,
} from '@/types/works';
import { FaGithub } from 'react-icons/fa6';

/* ------------------------------------------------------------------ */
/* Accent styles                                                       */
/* ------------------------------------------------------------------ */

const accentStyles: Record<
	WorkAccent,
	{
		wash: string;
		icon: string;
		badge: string;
	}
> = {
	emerald: {
		wash: 'to-emerald-50',
		icon: 'bg-emerald-100 text-emerald-700',
		badge:
			'border-emerald-200 bg-emerald-50 text-emerald-700',
	},

	amber: {
		wash: 'to-amber-50',
		icon: 'bg-amber-100 text-amber-700',
		badge:
			'border-amber-200 bg-amber-50 text-amber-700',
	},

	sky: {
		wash: 'to-sky-50',
		icon: 'bg-sky-100 text-sky-700',
		badge:
			'border-sky-200 bg-sky-50 text-sky-700',
	},

	violet: {
		wash: 'to-violet-50',
		icon: 'bg-violet-100 text-violet-700',
		badge:
			'border-violet-200 bg-violet-50 text-violet-700',
	},

	rose: {
		wash: 'to-rose-50',
		icon: 'bg-rose-100 text-rose-700',
		badge:
			'border-rose-200 bg-rose-50 text-rose-700',
	},
};

/* ------------------------------------------------------------------ */
/* Status styles                                                       */
/* ------------------------------------------------------------------ */

const statusStyles: Record<
	WorkProgressType,
	{
		pill: string;
		dot: string;
	}
> = {
	'In Progress': {
		pill:
			'border-amber-200 bg-amber-50 text-amber-700',
		dot: 'bg-amber-500',
	},

	'Portfolio Project': {
		pill:
			'border-emerald-200 bg-emerald-50 text-emerald-700',
		dot: 'bg-emerald-500',
	},

	'Client Project': {
		pill:
			'border-sky-200 bg-sky-50 text-sky-700',
		dot: 'bg-sky-500',
	},
};

/* ------------------------------------------------------------------ */
/* Category icons                                                      */
/* ------------------------------------------------------------------ */

const categoryIcon: Record<
	WorkCategory,
	typeof Globe
> = {
	web: Globe,

	desktop: Monitor,

	mobile: Smartphone,

	'ai-data': BrainCircuit,

	game: Gamepad2,

	blender: Box,
};

/* ------------------------------------------------------------------ */
/* Shared styles                                                       */
/* ------------------------------------------------------------------ */

const tileLabel =
	'font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground';

const tileButton = cn(
	buttonVariants({
		variant: 'outline',
	}),
	'h-9 w-full font-mono text-[10px] uppercase tracking-widest',
);

const disabledButton = cn(
	tileButton,
	'cursor-not-allowed opacity-50 hover:bg-background',
);

/* ------------------------------------------------------------------ */
/* Buttons                                                             */
/* ------------------------------------------------------------------ */

const ExternalButton = ({
	href,
	children,
}: {
	href: string;
	children: ReactNode;
}) => (
	<a
		href={href}
		target="_blank"
		rel="noopener noreferrer"
		className={tileButton}>
		{children}

		<MoveUpRight className="size-3" />
	</a>
);

const SoonButton = ({
	children,
}: {
	children: ReactNode;
}) => (
	<span
		aria-disabled="true"
		className={disabledButton}>
		{children}
	</span>
);

/* ------------------------------------------------------------------ */
/* Tile                                                               */
/* ------------------------------------------------------------------ */

const Tile = ({
	label,
	aside,
	children,
	action,
}: {
	label: string;
	aside?: ReactNode;
	children: ReactNode;
	action: ReactNode;
}) => (
	<Card className="gap-3 p-4">
		<div className="flex items-center justify-between gap-2">
			<span className={tileLabel}>
				{label}
			</span>

			{aside}
		</div>

		<div className="flex flex-col gap-1">
			{children}
		</div>

		<div className="mt-auto pt-3">
			{action}
		</div>
	</Card>
);

const TileTitle = ({
	children,
}: {
	children: ReactNode;
}) => (
	<p className="font-mono text-xs font-bold tracking-wide">
		{children}
	</p>
);

const TileNote = ({
	children,
}: {
	children: ReactNode;
}) => (
	<p className="font-mono text-[10px] leading-4 text-muted-foreground">
		{children}
	</p>
);

/* ------------------------------------------------------------------ */
/* Preview                                                             */
/* ------------------------------------------------------------------ */

const Preview = ({
	work,
}: {
	work: WorkData;
}) => {
	const accent =
		accentStyles[work.accent];

	const Icon =
		categoryIcon[
			work.categories[0] ??
				'web'
		];

	return (
		<div
			aria-hidden="true"
			className={cn(
				'rounded-xl border bg-linear-to-br from-muted p-3 md:p-4',
				accent.wash,
			)}>
			<div className="overflow-hidden rounded-lg border bg-background/80">
				{/* Window chrome */}

				<div className="flex items-center gap-3 border-b bg-muted/60 px-3 py-2">
					<span className="flex gap-1.5">
						<span className="size-2 rounded-full bg-red-400" />

						<span className="size-2 rounded-full bg-amber-400" />

						<span className="size-2 rounded-full bg-emerald-400" />
					</span>

					<span className="mx-auto max-w-[70%] truncate rounded border bg-background px-3 py-0.5 font-mono text-[10px] text-muted-foreground">
						{work.info.title}
					</span>

					<span className="w-9 shrink-0" />
				</div>

				{/* Preview */}

				<div className="flex min-h-44 flex-col gap-6 p-5 md:min-h-56 md:p-8">
					<div className="flex items-center gap-3">
						<span
							className={cn(
								'flex size-9 items-center justify-center rounded-lg',
								accent.icon,
							)}>
							<Icon className="size-5" />
						</span>

						<div className="flex flex-col gap-1.5">
							<span className="h-2 w-28 rounded bg-muted-foreground/20 md:w-40" />

							<span className="h-1.5 w-16 rounded bg-muted-foreground/10 md:w-24" />
						</div>
					</div>

					<div className="grid grid-cols-3 gap-2 md:gap-3">
						<div className="flex flex-col gap-3 rounded-md border bg-background p-2.5 md:p-3">
							<span className="h-1.5 w-6 rounded-full bg-emerald-200" />

							<span className="h-2.5 w-3/4 rounded bg-muted-foreground/15" />
						</div>

						<div className="flex flex-col gap-3 rounded-md border bg-background p-2.5 md:p-3">
							<span className="h-1.5 w-6 rounded-full bg-amber-200" />

							<span className="h-2.5 w-3/4 rounded bg-muted-foreground/15" />
						</div>

						<div className="flex flex-col gap-3 rounded-md border bg-background p-2.5 md:p-3">
							<span className="h-1.5 w-6 rounded-full bg-sky-200" />

							<span className="h-2.5 w-3/4 rounded bg-muted-foreground/15" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

/* ------------------------------------------------------------------ */
/* Main component                                                      */
/* ------------------------------------------------------------------ */

export const WorkShowcase = ({
	work,
	index,
}: {
	work: WorkData;
	index: number;
}) => {
	const accent =
		accentStyles[work.accent];

	const status =
		statusStyles[work.progressTag];

	const {
		deployment,
		repository,
		youtube,
		blog,
	} = work;

	const primaryHref =
		deployment?.liveSiteUrl ??
		repository.githubUrl;

	return (
		<article
			id={work.workName}
			className="flex scroll-mt-28 flex-col gap-5 py-8 first:pt-0 last:pb-0">
			{/* ---------------------------------------------------------- */}
			{/* Header                                                       */}
			{/* ---------------------------------------------------------- */}

			<div className="flex flex-wrap items-center justify-between gap-3">
				<div className="flex flex-wrap items-center gap-3">
					<span className="font-mono text-[10px] tracking-widest text-muted-foreground">
						{String(
							index + 1,
						).padStart(
							2,
							'0',
						)}
					</span>

					<h2 className="font-lora text-2xl tracking-wide md:text-3xl">
						{work.info.title}
					</h2>

					{work.specificTag ? (
						<span
							className={cn(
								'inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-widest',
								accent.badge,
							)}>
							<Star className="size-3" />

							{
								work.specificTag
							}
						</span>
					) : null}
				</div>

				<span
					className={cn(
						'inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-widest',
						status.pill,
					)}>
					<span
						className={cn(
							'size-1.5 rounded-full',
							status.dot,
						)}
					/>

					{
						work.progressTag
					}
				</span>
			</div>

			{/* ---------------------------------------------------------- */}
			{/* Content                                                      */}
			{/* ---------------------------------------------------------- */}

			<div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
				{/* Main project card */}

				<Card className="gap-5 p-4 md:p-6 lg:col-span-7">
					<Preview work={work} />

					<div className="flex flex-col gap-3">
						<h3 className="font-lora text-xl tracking-wide md:text-2xl">
							{
								work.info
									.title
							}
						</h3>

						<p className="font-mono text-xs leading-6 text-muted-foreground md:text-sm md:leading-7">
							{
								work.info
									.desc
							}
						</p>
					</div>

					{/* Languages */}

					{work.info.stack
						.length > 0 ? (
						<ul className="flex flex-wrap gap-2">
							{work.info.stack.map(
								(
									stack,
								) => (
									<li
										key={
											stack
										}
										className="rounded-md border bg-muted px-2.5 py-1 font-mono text-[10px] text-foreground/80">
										{
											stack
										}
									</li>
								),
							)}
						</ul>
					) : null}

					{/* Primary button */}

					<div className="mt-auto pt-2">
						{primaryHref ? (
							<a
								href={
									primaryHref
								}
								target="_blank"
								rel="noopener noreferrer"
								className={cn(
									buttonVariants(),
									'h-10 gap-2 px-5 font-mono text-[10px] uppercase tracking-widest',
								)}>
								View in detail

								<MoveUpRight className="size-3.5" />
							</a>
						) : (
							<span
								className={cn(
									buttonVariants(),
									'pointer-events-none h-10 gap-2 px-5 font-mono text-[10px] uppercase tracking-widest opacity-60',
								)}>
								Private project

								<LockKeyhole className="size-3.5" />
							</span>
						)}
					</div>
				</Card>

				{/* ------------------------------------------------------ */}
				{/* Resource tiles                                           */}
				{/* ------------------------------------------------------ */}

				<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-5">
					{/* -------------------------------------------------- */}
					{/* Deployment                                          */}
					{/* -------------------------------------------------- */}

					<Tile
						label="Deployment"
						aside={
							deployment ? (
								<span className="rounded border border-amber-200 bg-amber-50 px-1.5 py-0.5 font-mono text-[9px] font-bold uppercase tracking-widest text-amber-700">
									{
										deployment.tag
									}
								</span>
							) : null
						}
						action={
							deployment ? (
								<ExternalButton
									href={
										deployment.liveSiteUrl
									}>
									Visit live site
								</ExternalButton>
							) : (
								<SoonButton>
									Coming soon
								</SoonButton>
							)
						}>
						<TileTitle>
							{deployment?.title ??
								'Live preview soon'}
						</TileTitle>

						<TileNote>
							{deployment?.desc ??
								'No public deployment is available for this project.'}
						</TileNote>
					</Tile>

					{/* -------------------------------------------------- */}
					{/* Repository                                          */}
					{/* -------------------------------------------------- */}

					<Tile
						label="Repository"
						aside={
							<span
								className={cn(
									'inline-flex items-center gap-1.5 font-mono text-[10px]',
									repository.visibility ===
										'Private'
										? 'text-amber-600'
										: 'text-muted-foreground',
								)}>
								{repository.visibility ===
								'Private' ? (
									<LockKeyhole className="size-3" />
								) : (
									<FaGithub className="size-3" />
								)}

								{
									repository.visibility
								}
							</span>
						}
						action={
							repository.visibility ===
								'Public' &&
							repository.githubUrl ? (
								<ExternalButton
									href={
										repository.githubUrl
									}>
									View on GitHub
								</ExternalButton>
							) : (
								<div className="flex min-h-9 items-center gap-2 rounded-md border border-dashed px-3">
									<LockKeyhole className="size-3 shrink-0 text-amber-600" />

									<span className="font-mono text-[9px] leading-4 text-muted-foreground">
										Source code is
										privately
										maintained
									</span>
								</div>
							)
						}>
						<TileTitle>
							{
								repository.repoName
							}
						</TileTitle>

						<TileNote>
							{repository.visibility ===
							'Private'
								? 'This project is maintained privately and its source code is not publicly available.'
								: repository.desc ||
									'No repository description.'}
						</TileNote>
					</Tile>

					{/* -------------------------------------------------- */}
					{/* Walkthrough                                         */}
					{/* -------------------------------------------------- */}

					<Tile
						label="Walkthrough"
						aside={
							<span className="font-mono text-[10px] font-bold uppercase tracking-widest text-red-600">
								YouTube
							</span>
						}
						action={
							youtube ? (
								<ExternalButton
									href={
										youtube.videoPreviewUrl
									}>
									Watch walkthrough
								</ExternalButton>
							) : (
								<SoonButton>
									Coming soon
								</SoonButton>
							)
						}>
						<div
							aria-hidden="true"
							className={cn(
								'relative flex aspect-video items-center justify-center rounded-md bg-neutral-900',
								!youtube &&
									'opacity-60',
							)}>
							<span className="flex size-8 items-center justify-center rounded-full bg-white">
								<Play className="ml-0.5 size-3.5 fill-neutral-900 text-neutral-900" />
							</span>

							{youtube?.duration ? (
								<span className="absolute right-1.5 bottom-1.5 rounded bg-black/80 px-1.5 py-0.5 font-mono text-[9px] text-white">
									{
										youtube.duration
									}
								</span>
							) : null}
						</div>

						<TileTitle>
							{youtube?.title ??
								'Walkthrough soon'}
						</TileTitle>

						<TileNote>
							{youtube?.desc ??
								'No walkthrough recorded yet.'}
						</TileNote>
					</Tile>

					{/* -------------------------------------------------- */}
					{/* Write-up                                            */}
					{/* -------------------------------------------------- */}

					<Tile
						label="Write-up"
						aside={
							blog?.length ? (
								<span className="font-mono text-[10px] text-muted-foreground">
									{
										blog.length
									}
								</span>
							) : null
						}
						action={
							blog ? (
								<ExternalButton
									href={
										blog.blogUrl
									}>
									Read blog
								</ExternalButton>
							) : (
								<SoonButton>
									Coming soon
								</SoonButton>
							)
						}>
						<TileTitle>
							{blog?.title ??
								'Write-up soon'}
						</TileTitle>

						<TileNote>
							{blog ? (
								<span className="italic">
									&ldquo;
									{
										blog.desc
									}
									&rdquo;
								</span>
							) : (
								'No write-up published yet.'
							)}
						</TileNote>
					</Tile>
				</div>
			</div>
		</article>
	);
};
