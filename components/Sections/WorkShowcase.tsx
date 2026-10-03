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
} from 'lucide-react';

import { Card } from '@/components/ui/card';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import type { Work, WorkAccent, WorkCategory, WorkStatus } from '@/lib/works';

/* ------------------------------------------------------------------ */
/* Style maps (full class names so Tailwind can see them)              */
/* ------------------------------------------------------------------ */

const accentStyles: Record<
	WorkAccent,
	{ wash: string; icon: string; badge: string }
> = {
	emerald: {
		wash: 'to-emerald-50',
		icon: 'bg-emerald-100 text-emerald-700',
		badge: 'border-emerald-200 bg-emerald-50 text-emerald-700',
	},
	amber: {
		wash: 'to-amber-50',
		icon: 'bg-amber-100 text-amber-700',
		badge: 'border-amber-200 bg-amber-50 text-amber-700',
	},
	sky: {
		wash: 'to-sky-50',
		icon: 'bg-sky-100 text-sky-700',
		badge: 'border-sky-200 bg-sky-50 text-sky-700',
	},
	violet: {
		wash: 'to-violet-50',
		icon: 'bg-violet-100 text-violet-700',
		badge: 'border-violet-200 bg-violet-50 text-violet-700',
	},
	rose: {
		wash: 'to-rose-50',
		icon: 'bg-rose-100 text-rose-700',
		badge: 'border-rose-200 bg-rose-50 text-rose-700',
	},
};

const statusStyles: Record<
	WorkStatus,
	{ label: string; pill: string; dot: string }
> = {
	'in-progress': {
		label: 'In Progress',
		pill: 'border-amber-200 bg-amber-50 text-amber-700',
		dot: 'bg-amber-500',
	},
	shipped: {
		label: 'Shipped',
		pill: 'border-emerald-200 bg-emerald-50 text-emerald-700',
		dot: 'bg-emerald-500',
	},
	'pre-production': {
		label: 'Pre-production',
		pill: 'border-sky-200 bg-sky-50 text-sky-700',
		dot: 'bg-sky-500',
	},
};

const categoryIcon: Record<WorkCategory, typeof Globe> = {
	web: Globe,
	desktop: Monitor,
	mobile: Smartphone,
	'ai-data': BrainCircuit,
	game: Gamepad2,
	blender: Box,
};

const tileLabel =
	'font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground';

const tileButton = cn(
	buttonVariants({ variant: 'outline' }),
	'h-9 w-full font-mono text-[10px] uppercase tracking-widest',
);

const disabledButton = cn(
	tileButton,
	'cursor-not-allowed opacity-50 hover:bg-background',
);

/* ------------------------------------------------------------------ */
/* Small building blocks                                               */
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

const SoonButton = ({ children }: { children: ReactNode }) => (
	<span aria-disabled="true" className={disabledButton}>
		{children}
	</span>
);

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
			<span className={tileLabel}>{label}</span>
			{aside}
		</div>
		<div className="flex flex-col gap-1">{children}</div>
		<div className="mt-auto pt-3">{action}</div>
	</Card>
);

const TileTitle = ({ children }: { children: ReactNode }) => (
	<p className="font-mono text-xs font-bold tracking-wide">{children}</p>
);

const TileNote = ({ children }: { children: ReactNode }) => (
	<p className="font-mono text-[10px] leading-4 text-muted-foreground">
		{children}
	</p>
);

/* ------------------------------------------------------------------ */
/* Decorative browser-style preview                                    */
/* ------------------------------------------------------------------ */

const Preview = ({ work }: { work: Work }) => {
	const accent = accentStyles[work.accent];
	const Icon = categoryIcon[work.categories[0]];

	return (
		<div
			aria-hidden="true"
			className={cn(
				'rounded-xl border bg-linear-to-br from-muted p-3 md:p-4',
				accent.wash,
			)}>
			<div className="overflow-hidden rounded-lg border bg-background/80">
				{/* window chrome */}
				<div className="flex items-center gap-3 border-b bg-muted/60 px-3 py-2">
					<span className="flex gap-1.5">
						<span className="size-2 rounded-full bg-red-400" />
						<span className="size-2 rounded-full bg-amber-400" />
						<span className="size-2 rounded-full bg-emerald-400" />
					</span>
					<span className="mx-auto max-w-[70%] truncate rounded border bg-background px-3 py-0.5 font-mono text-[10px] text-muted-foreground">
						{work.previewLabel}
					</span>
					<span className="w-9 shrink-0" />
				</div>

				{/* skeleton page */}
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
						{['bg-emerald-200', 'bg-amber-200', 'bg-sky-200'].map(
							(bar) => (
								<div
									key={bar}
									className="flex flex-col gap-3 rounded-md border bg-background p-2.5 md:p-3">
									<span
										className={cn(
											'h-1.5 w-6 rounded-full',
											bar,
										)}
									/>
									<span className="h-2.5 w-3/4 rounded bg-muted-foreground/15" />
								</div>
							),
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

/* ------------------------------------------------------------------ */
/* Main export                                                         */
/* ------------------------------------------------------------------ */

export const WorkShowcase = ({
	work,
	index,
}: {
	work: Work;
	index: number;
}) => {
	const accent = accentStyles[work.accent];
	const status = statusStyles[work.status];
	const { live, repo, video, writeup } = work.links;
	const primaryHref = live?.url ?? repo?.url;

	return (
		<article
			id={work.slug}
			className="flex scroll-mt-28 flex-col gap-5 py-8 first:pt-0 last:pb-0">
			{/* header row */}
			<div className="flex flex-wrap items-center justify-between gap-3">
				<div className="flex flex-wrap items-center gap-3">
					<span className="font-mono text-[10px] tracking-widest text-muted-foreground">
						{String(index + 1).padStart(2, '0')}
					</span>
					<h2 className="font-lora text-2xl tracking-wide md:text-3xl">
						{work.title}
					</h2>
					<span
						className={cn(
							'inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-widest',
							accent.badge,
						)}>
						<Star className="size-3" />
						{work.eyebrow}
					</span>
				</div>

				<span
					className={cn(
						'inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-widest',
						status.pill,
					)}>
					<span className={cn('size-1.5 rounded-full', status.dot)} />
					{status.label}
				</span>
			</div>

			{/* bento grid */}
			<div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
				{/* main card */}
				<Card className="gap-5 p-4 md:p-6 lg:col-span-7">
					<Preview work={work} />

					<div className="flex flex-col gap-3">
						<h3 className="font-lora text-xl tracking-wide md:text-2xl">
							{work.headline}
						</h3>
						<p className="font-mono text-xs leading-6 text-muted-foreground md:text-sm md:leading-7">
							{work.description}
						</p>
					</div>

					<ul className="flex flex-wrap gap-2">
						{work.tags.map((tag) => (
							<li
								key={tag}
								className="rounded-md border bg-muted px-2.5 py-1 font-mono text-[10px] text-foreground/80">
								{tag}
							</li>
						))}
					</ul>

					<div className="mt-auto pt-2">
						{primaryHref ? (
							<a
								href={primaryHref}
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
								aria-disabled="true"
								className={cn(
									buttonVariants(),
									'h-10 cursor-not-allowed gap-2 px-5 font-mono text-[10px] uppercase tracking-widest opacity-50',
								)}>
								Details coming soon
							</span>
						)}
					</div>
				</Card>

				{/* resource tiles */}
				<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-5">
					{/* deployment */}
					<Tile
						label="Deployment"
						aside={
							live?.badge ? (
								<span className="rounded border border-amber-200 bg-amber-50 px-1.5 py-0.5 font-mono text-[9px] font-bold uppercase tracking-widest text-amber-700">
									{live.badge}
								</span>
							) : null
						}
						action={
							live ? (
								<ExternalButton href={live.url}>
									Visit live site
								</ExternalButton>
							) : (
								<SoonButton>Coming soon</SoonButton>
							)
						}>
						<TileTitle>
							{live?.title ?? 'Live preview soon'}
						</TileTitle>
						<TileNote>{live?.note ?? 'Not deployed yet.'}</TileNote>
					</Tile>

					{/* repository */}
					<Tile
						label="Repository"
						aside={
							repo?.visibility ? (
								<span className="font-mono text-[10px] text-muted-foreground">
									{repo.visibility}
								</span>
							) : null
						}
						action={
							repo ? (
								<ExternalButton href={repo.url}>
									View on GitHub
								</ExternalButton>
							) : (
								<SoonButton>Coming soon</SoonButton>
							)
						}>
						<TileTitle>
							{repo?.name ?? 'Source not public yet'}
						</TileTitle>
						<TileNote>
							{repo?.note ?? 'No public repository for this one.'}
						</TileNote>
					</Tile>

					{/* walkthrough */}
					<Tile
						label="Walkthrough"
						aside={
							<span className="font-mono text-[10px] font-bold uppercase tracking-widest text-red-600">
								YouTube
							</span>
						}
						action={
							video ? (
								<ExternalButton href={video.url}>
									Watch walkthrough
								</ExternalButton>
							) : (
								<SoonButton>Coming soon</SoonButton>
							)
						}>
						<div
							aria-hidden="true"
							className={cn(
								'relative flex aspect-video items-center justify-center rounded-md bg-neutral-900',
								!video && 'opacity-60',
							)}>
							<span className="flex size-8 items-center justify-center rounded-full bg-white">
								<Play className="ml-0.5 size-3.5 fill-neutral-900 text-neutral-900" />
							</span>
							{video?.duration ? (
								<span className="absolute right-1.5 bottom-1.5 rounded bg-black/80 px-1.5 py-0.5 font-mono text-[9px] text-white">
									{video.duration}
								</span>
							) : null}
						</div>
						<TileTitle>
							{video?.title ?? 'Walkthrough soon'}
						</TileTitle>
						<TileNote>
							{video?.note ?? 'No walkthrough recorded yet.'}
						</TileNote>
					</Tile>

					{/* write-up */}
					<Tile
						label="Write-up"
						aside={
							writeup?.readTime ? (
								<span className="font-mono text-[10px] text-muted-foreground">
									{writeup.readTime}
								</span>
							) : null
						}
						action={
							writeup ? (
								<ExternalButton href={writeup.url}>
									Read blog
								</ExternalButton>
							) : (
								<SoonButton>Coming soon</SoonButton>
							)
						}>
						<TileTitle>
							{writeup?.title ?? 'Write-up soon'}
						</TileTitle>
						<TileNote>
							{writeup ? (
								<span className="italic">
									&ldquo;{writeup.excerpt}&rdquo;
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
