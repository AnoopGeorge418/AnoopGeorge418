import { ReactNode } from 'react';
import {
	ArrowUpRight,
	CircleDot,
	GitFork,
	Globe,
	Lock,
	Star,
	TriangleAlert,
} from 'lucide-react';

import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { RepoStatus, WorkProject, WorksStats } from '@/types/worksTypes';

const labelClass = 'font-mono text-[10px] tracking-widest uppercase';
const bodyClass =
	'font-mono text-[11px] leading-relaxed tracking-wide text-neutral-600 sm:text-xs dark:text-neutral-400';
const MAX_TOPICS = 8;

const statusStyles: Record<RepoStatus, { pill: string; dot: string }> = {
	ACTIVE: {
		pill: 'border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-400',
		dot: 'bg-emerald-500',
	},
	PAUSED: {
		pill: 'border-sky-200 bg-sky-50 text-sky-700 dark:border-sky-900 dark:bg-sky-950/40 dark:text-sky-400',
		dot: 'bg-sky-500',
	},
	ARCHIVED: {
		pill: 'border-neutral-200 bg-neutral-50 text-neutral-600 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-400',
		dot: 'bg-neutral-400',
	},
};

const restrictedCard =
	'border-dashed border-amber-300 bg-amber-50/40 dark:border-amber-900/70 dark:bg-amber-950/10';

/* ---------- small building blocks ---------- */

const Pill = ({
	children,
	className,
}: {
	children: ReactNode;
	className?: string;
}) => (
	<span
		className={cn(
			labelClass,
			'inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1',
			className,
		)}>
		{children}
	</span>
);

const Chip = ({
	children,
	className,
}: {
	children: ReactNode;
	className?: string;
}) => (
	<span
		className={cn(
			'rounded-sm border px-1.5 py-0.5 font-mono text-[10px] tracking-wider uppercase',
			className,
		)}>
		{children}
	</span>
);

const ActionLink = ({
	href,
	label,
	disabledLabel,
	icon,
}: {
	href?: string | null;
	label: string;
	disabledLabel: string;
	icon?: ReactNode;
}) => {
	const base = cn(
		buttonVariants({ variant: 'outline' }),
		labelClass,
		'h-9 w-full gap-1.5 rounded-md',
	);

	if (!href) {
		return (
			<span
				aria-disabled="true"
				className={cn(
					base,
					'cursor-not-allowed opacity-60 hover:bg-background',
				)}>
				{icon}
				{disabledLabel}
			</span>
		);
	}

	return (
		<a
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			className={cn(base, 'cursor-pointer')}>
			{label}
			<ArrowUpRight className="size-3" />
		</a>
	);
};

const Tile = ({
	label,
	aside,
	children,
	action,
	className,
}: {
	label: string;
	aside?: ReactNode;
	children: ReactNode;
	action?: ReactNode;
	className?: string;
}) => (
	<div
		className={cn(
			'flex min-w-0 flex-col justify-between gap-4 rounded-xl border bg-card p-4 shadow-xs',
			className,
		)}>
		<div className="flex flex-col gap-3">
			<div className="flex items-center justify-between gap-2">
				<span className={cn(labelClass, 'text-neutral-500')}>
					{label}
				</span>
				{aside}
			</div>
			{children}
		</div>
		{action}
	</div>
);

const Stat = ({ value, label }: { value: number; label: string }) => (
	<div className="flex flex-col gap-1 rounded-xl border bg-card px-4 py-3 sm:py-4">
		<span className="font-lora text-2xl sm:text-3xl">{value}</span>
		<span className={cn(labelClass, 'text-neutral-500')}>{label}</span>
	</div>
);

/* ---------- featured preview (top / left card) ---------- */

const BrowserPreview = ({ project }: { project: WorkProject }) => {
	const restricted = project.isPrivate;
	const address = restricted
		? 'restricted'
		: (project.homepageHost ?? `github.com/${project.fullName}`);

	return (
		<div className="relative aspect-16/9 w-full overflow-hidden rounded-lg border bg-linear-to-br from-muted via-background to-emerald-50/70 sm:aspect-16/8 dark:to-emerald-950/30">
			<div className="flex items-center gap-1.5 border-b bg-background/80 px-3 py-2">
				<span className="size-2 shrink-0 rounded-full bg-red-400" />
				<span className="size-2 shrink-0 rounded-full bg-amber-400" />
				<span className="size-2 shrink-0 rounded-full bg-emerald-500" />
				<span className="mx-auto flex min-w-0 max-w-[70%] items-center gap-1 rounded border bg-background px-3 py-0.5 font-mono text-[9px] text-neutral-500">
					{restricted && <Lock className="size-2.5 shrink-0" />}
					<span className="truncate">{address}</span>
				</span>
			</div>

			<div
				className={cn(
					'flex flex-col gap-3 p-4 sm:p-5',
					restricted && 'opacity-40',
				)}>
				<div className="flex items-center gap-2">
					<span className="size-6 rounded-md bg-emerald-100 dark:bg-emerald-900/50" />
					<div className="flex flex-col gap-1">
						<span className="h-1.5 w-24 rounded bg-neutral-200 dark:bg-neutral-700" />
						<span className="h-1 w-14 rounded bg-neutral-100 dark:bg-neutral-800" />
					</div>
				</div>
				<div className="grid grid-cols-3 gap-2">
					{['bg-emerald-200', 'bg-amber-200', 'bg-sky-200'].map(
						(color) => (
							<div
								key={color}
								className="flex flex-col gap-2 rounded-md border bg-background p-2">
								<span
									className={cn('h-1.5 w-8 rounded', color)}
								/>
								<span className="h-3 w-full rounded bg-neutral-100 dark:bg-neutral-800" />
							</div>
						),
					)}
				</div>
			</div>

			{restricted && (
				<div className="absolute inset-x-0 bottom-0 top-8 flex items-center justify-center">
					<span
						className={cn(
							labelClass,
							'inline-flex items-center gap-1.5 rounded-full border border-amber-300 bg-amber-50 px-3 py-1.5 text-amber-700 dark:border-amber-800 dark:bg-amber-950 dark:text-amber-400',
						)}>
						<Lock className="size-3" />
						Restricted
					</span>
				</div>
			)}
		</div>
	);
};

/* ---------- one repository ---------- */

const ProjectRow = ({ project }: { project: WorkProject }) => {
	const status = statusStyles[project.status];
	const restricted = project.isPrivate;
	const shownTopics = project.topics.slice(0, MAX_TOPICS);
	const hiddenTopics = project.topics.length - shownTopics.length;

	return (
		<article className="flex flex-col gap-4 md:gap-6">
			{/* heading row */}
			<div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
				<div className="flex min-w-0 items-center gap-3">
					<span className="font-mono text-[10px] text-neutral-400">
						{project.index}
					</span>
					<span className="h-4 w-px shrink-0 bg-border" />
					<h2 className="min-w-0 wrap-break-word font-lora text-xl tracking-wide sm:text-2xl md:text-3xl">
						{project.title}
					</h2>
				</div>

				<div className="flex flex-wrap items-center gap-2">
					{project.isFork && (
						<Pill className="border-neutral-200 bg-neutral-50 text-neutral-600 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-400">
							<GitFork className="size-3" />
							Fork
						</Pill>
					)}
					{restricted ? (
						<Pill className="border-amber-200 bg-amber-50 text-amber-700 dark:border-amber-900 dark:bg-amber-950/40 dark:text-amber-400">
							<Lock className="size-3" />
							Private
						</Pill>
					) : (
						<Pill className="border-neutral-200 bg-background text-neutral-600 dark:border-neutral-800 dark:text-neutral-400">
							<Globe className="size-3" />
							Public
						</Pill>
					)}
					<Pill className={status.pill}>
						<span
							className={cn('size-1.5 rounded-full', status.dot)}
						/>
						{project.status}
					</Pill>
				</div>
			</div>

			{/* bento grid */}
			<div className="grid grid-cols-1 gap-3 sm:gap-4 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
				{/* featured card */}
				<div
					className={cn(
						'flex min-w-0 flex-col gap-4 rounded-2xl border bg-card p-4 shadow-xs sm:p-5 md:gap-5',
						restricted && restrictedCard,
					)}>
					<BrowserPreview project={project} />

					<div className="flex flex-1 flex-col gap-3">
						<h3 className="break-all font-mono text-sm font-semibold tracking-wide sm:text-base">
							{project.fullName}
						</h3>
						<p className={bodyClass}>
							{project.description ??
								'No description has been added to this repository on GitHub yet.'}
						</p>

						{(project.language || shownTopics.length > 0) && (
							<div className="flex flex-wrap gap-1.5">
								{project.language && (
									<Chip className="border-emerald-200 bg-emerald-50 text-emerald-800 dark:border-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-300">
										{project.language}
									</Chip>
								)}
								{shownTopics.map((topic) => (
									<Chip
										key={topic}
										className="bg-muted text-neutral-600 dark:text-neutral-300">
										{topic}
									</Chip>
								))}
								{hiddenTopics > 0 && (
									<Chip className="bg-muted text-neutral-500">
										+{hiddenTopics}
									</Chip>
								)}
							</div>
						)}
					</div>
				</div>

				{/* tiles */}
				<div className="grid grid-cols-2 gap-3 sm:gap-4">
					{/* repository: public link or restricted */}
					<Tile
						label="Repository"
						className={cn(
							'col-span-2 sm:col-span-1 sm:min-h-48',
							restricted && restrictedCard,
						)}
						aside={
							<span
								className={cn(
									'inline-flex items-center gap-1 font-mono text-[10px]',
									restricted
										? 'text-amber-600 dark:text-amber-400'
										: 'text-neutral-500',
								)}>
								{restricted && <Lock className="size-2.5" />}
								{restricted ? 'Private' : 'Public'}
							</span>
						}
						action={
							restricted ? (
								<ActionLink
									disabledLabel="Restricted"
									label=""
									icon={<Lock className="size-3" />}
								/>
							) : (
								<ActionLink
									href={project.url}
									label="View on GitHub"
									disabledLabel="Unavailable"
								/>
							)
						}>
						{restricted ? (
							<div className="flex items-start gap-3">
								<span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-400">
									<Lock className="size-4" />
								</span>
								<div className="flex flex-col gap-1">
									<h4 className="text-sm font-semibold">
										Restricted
									</h4>
									<p className={bodyClass}>
										No GitHub access. This repository is
										private, so its source code is not
										available.
									</p>
								</div>
							</div>
						) : (
							<div className="flex flex-col gap-1.5">
								<h4 className="text-sm font-semibold">
									Open source
								</h4>
								<p className={bodyClass}>
									Read the code, commit history and issues
									directly on GitHub.
								</p>
							</div>
						)}
					</Tile>

					{/* deployment: GitHub "Website" field */}
					<Tile
						label="Deployment"
						className="col-span-2 sm:col-span-1 sm:min-h-48"
						aside={
							project.homepage ? (
								<Chip className="border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-400">
									Live
								</Chip>
							) : null
						}
						action={
							<ActionLink
								href={project.homepage}
								label="Visit live site"
								disabledLabel="No live site"
							/>
						}>
						<div className="flex flex-col gap-1.5">
							<h4 className="break-all text-sm font-semibold">
								{project.homepageHost ?? 'Not deployed'}
							</h4>
							<p className={bodyClass}>
								{project.homepage
									? 'Live site linked from this repository.'
									: 'No live deployment is linked to this project yet.'}
							</p>
						</div>
					</Tile>

					{/* activity */}
					<Tile label="Activity" className="col-span-1">
						<dl className="flex flex-col gap-3">
							<div className="flex flex-col gap-0.5">
								<dt
									className={cn(
										labelClass,
										'text-[9px] text-neutral-400',
									)}>
									Last push
								</dt>
								<dd className="text-sm font-semibold">
									{project.pushedLabel}
								</dd>
							</div>
							<div className="flex flex-col gap-0.5">
								<dt
									className={cn(
										labelClass,
										'text-[9px] text-neutral-400',
									)}>
									Created
								</dt>
								<dd className="text-sm font-semibold">
									{project.createdLabel}
								</dd>
							</div>
						</dl>
					</Tile>

					{/* popularity */}
					<Tile label="Community" className="col-span-1">
						<div className="grid grid-cols-3 gap-1 text-center">
							{[
								{
									icon: Star,
									value: project.stars,
									label: 'Stars',
								},
								{
									icon: GitFork,
									value: project.forks,
									label: 'Forks',
								},
								{
									icon: CircleDot,
									value: project.openIssues,
									label: 'Issues',
								},
							].map(({ icon: Icon, value, label }) => (
								<div
									key={label}
									className="flex flex-col items-center gap-1">
									<Icon className="size-3.5 text-neutral-400" />
									<span className="text-base font-semibold leading-none">
										{value}
									</span>
									<span
										className={cn(
											labelClass,
											'text-[8px] tracking-wider text-neutral-400',
										)}>
										{label}
									</span>
								</div>
							))}
						</div>
					</Tile>
				</div>
			</div>
		</article>
	);
};

/* ---------- section ---------- */

export const WorksComponent = ({
	projects,
	stats,
	error,
}: {
	projects: WorkProject[];
	stats: WorksStats;
	error: string | null;
}) => {
	return (
		<section className="flex w-full flex-col gap-10 px-4 pt-10 pb-28 sm:px-6 md:gap-14 md:px-10 md:pt-36 md:pb-20 xl:px-16">
			{/* header */}
			<header className="flex flex-col gap-6 border-b pb-10 md:gap-8 md:pb-14">
				<Pill className="w-fit bg-background text-neutral-600 dark:text-neutral-400">
					<span className="size-1.5 animate-pulse rounded-full bg-emerald-500" />
					Live from GitHub
				</Pill>

				<h1 className="max-w-5xl text-balance font-lora text-4xl leading-[1.1] tracking-wide sm:text-5xl md:text-6xl xl:text-7xl">
					Selected Works, Experiments &amp; Engineering Builds
				</h1>

				<p className="max-w-4xl font-mono text-xs leading-relaxed tracking-wide text-neutral-600 sm:text-sm dark:text-neutral-400">
					Every project on this page is pulled straight from my GitHub
					account in real time — web apps, mobile and desktop tools,
					AI experiments, games and learning projects. Public
					repositories link directly to their source code, so you can
					read, run and judge the work yourself. Private repositories
					are listed as well, but they are marked as restricted with
					no GitHub access. Descriptions, topics, stars and activity
					stay in sync automatically, making this page an honest
					snapshot of what I am building right now.
				</p>

				<div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:max-w-3xl">
					<Stat value={stats.total} label="Repositories" />
					<Stat value={stats.public} label="Public" />
					<Stat value={stats.private} label="Private" />
					<Stat value={stats.stars} label="Stars" />
				</div>
			</header>

			{/* notices */}
			{error && (
				<div className="flex items-start gap-3 rounded-2xl border border-dashed border-amber-300 bg-amber-50/40 p-4 sm:p-6 dark:border-amber-900/70 dark:bg-amber-950/10">
					<TriangleAlert className="mt-0.5 size-4 shrink-0 text-amber-600" />
					<div className="flex flex-col gap-1">
						<h2 className="text-sm font-semibold">
							{projects.length === 0
								? 'Could not load repositories from GitHub'
								: 'Showing partial results from GitHub'}
						</h2>
						<p className={bodyClass}>{error}</p>
					</div>
				</div>
			)}

			{/* repositories */}
			{projects.length === 0 && !error ? (
				<p className={bodyClass}>
					No repositories found on GitHub yet.
				</p>
			) : (
				<div className="flex flex-col gap-14 md:gap-20">
					{projects.map((project) => (
						<ProjectRow key={project.id} project={project} />
					))}
				</div>
			)}
		</section>
	);
};
