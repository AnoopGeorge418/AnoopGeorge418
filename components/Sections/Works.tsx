'use client';

import { useState } from 'react';

import { cn } from '@/lib/utils';
import { WORK_FILTERS, WORKS, type FilterId } from '@/lib/works';
import { WorkShowcase } from '@/components/Sections/WorkShowcase';

const countFor = (id: FilterId) =>
	id === 'all'
		? WORKS.length
		: WORKS.filter((work) => work.categories.includes(id)).length;

/**
 * Filterable list of projects.
 * Pass `limit` to cap how many are shown (used on the home page).
 */
export const MyWorks = ({ limit }: { limit?: number }) => {
	const [active, setActive] = useState<FilterId>('all');

	const matching =
		active === 'all'
			? WORKS
			: WORKS.filter((work) => work.categories.includes(active));

	const visible = limit ? matching.slice(0, limit) : matching;
	const activeLabel =
		WORK_FILTERS.find((filter) => filter.id === active)?.label ?? '';

	return (
		<div className="flex w-full flex-col gap-5">
			{/* filter chips */}
			<div
				role="group"
				aria-label="Filter works by category"
				className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1 [scrollbar-width:none] md:flex-wrap [&::-webkit-scrollbar]:hidden">
				{WORK_FILTERS.map((filter) => {
					const isActive = filter.id === active;
					const count = countFor(filter.id);

					return (
						<button
							key={filter.id}
							type="button"
							aria-pressed={isActive}
							onClick={() => setActive(filter.id)}
							className={cn(
								'inline-flex shrink-0 cursor-pointer items-center gap-2 rounded-full border px-4 py-2 font-mono text-[10px] uppercase tracking-widest transition-colors md:text-xs',
								'focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none',
								isActive
									? 'border-primary bg-primary text-primary-foreground'
									: 'bg-background text-muted-foreground hover:bg-muted hover:text-foreground',
								!isActive && count === 0 && 'opacity-60',
							)}>
							{filter.label}
							<span
								className={cn(
									'text-[9px]',
									isActive ? 'opacity-70' : 'opacity-50',
								)}>
								{count}
							</span>
						</button>
					);
				})}
			</div>

			<p
				aria-live="polite"
				className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
				Showing {visible.length} of {matching.length}{' '}
				{active === 'all' ? 'projects' : `${activeLabel} projects`}
			</p>

			{/* list */}
			{visible.length > 0 ? (
				<div className="w-full divide-y rounded-md bg-accent p-4 md:p-6">
					{visible.map((work, index) => (
						<WorkShowcase
							key={work.slug}
							work={work}
							index={index}
						/>
					))}
				</div>
			) : (
				<div className="flex w-full flex-col items-center gap-3 rounded-md border border-dashed bg-accent px-6 py-16 text-center">
					<p className="font-lora text-xl tracking-wide md:text-2xl">
						Nothing here yet
					</p>
					<p className="max-w-md font-mono text-xs leading-6 text-muted-foreground">
						I haven&apos;t shipped a {activeLabel} project yet — but
						it&apos;s on the list. Check back soon.
					</p>
					<button
						type="button"
						onClick={() => setActive('all')}
						className="mt-2 cursor-pointer rounded-full border bg-background px-4 py-2 font-mono text-[10px] uppercase tracking-widest hover:bg-muted">
						Show all projects
					</button>
				</div>
			)}
		</div>
	);
};
