'use client';

import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Check, ChevronDown, Send, Loader2 } from 'lucide-react';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { Textarea } from '../ui/textarea';
import { SendEmail } from '@/api/email';

export const GetInTouch = () => {
	const [selectedRequestType, setSelectedRequestType] =
		useState<string>('Freelance Contract');
	const [selectedDisciplines, setSelectedDisciplines] = useState<string[]>(
		[],
	);
	const [selectedBudget, setSelectedBudget] = useState<string>('$5k - $10k');
	const [selectedTimeline, setSelectedTimeline] =
		useState<string>('1 - 2 Months');
	const [nameAndOrg, setNameAndOrg] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [projectBrief, setProjectBrief] = useState<string>('');

	const [loading, setLoading] = useState<boolean>(false);
	const [successMessage, setSuccessMessage] = useState<string>('');
	const [errorMessage, setErrorMessage] = useState<string>('');

	const toggleDiscipline = (discipline: string) => {
		if (selectedDisciplines.includes(discipline)) {
			setSelectedDisciplines(
				selectedDisciplines.filter((d) => d !== discipline),
			);
		} else {
			setSelectedDisciplines([...selectedDisciplines, discipline]);
		}
	};

	const handleSubmit = async () => {
		setErrorMessage('');
		setSuccessMessage('');

		if (!nameAndOrg.trim()) {
			setErrorMessage('Please enter your name & organization.');
			return;
		}

		if (!email.trim() || !email.includes('@')) {
			setErrorMessage('Please enter a valid email address.');
			return;
		}

		setLoading(true);

		try {
			const res = await SendEmail({
				requestType: selectedRequestType,
				nameAndOrg,
				email,
				disciplines: selectedDisciplines,
				budget: selectedBudget,
				timeline: selectedTimeline,
				projectBrief,
			});

			if (res.success) {
				setSuccessMessage(
					'Inquiry sent successfully! I will get back to you soon.',
				);
				setNameAndOrg('');
				setEmail('');
				setProjectBrief('');
				setSelectedDisciplines([]);
			} else {
				setErrorMessage(
					res.error || 'Failed to send email. Please try again.',
				);
			}
		} catch (err) {
			setErrorMessage('An unexpected error occurred.');
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="flex flex-col bg-accent w-full p-6 gap-4 max-h-[85vh] overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-neutral-300 [&::-webkit-scrollbar-thumb]:rounded-full">
			{/*header*/}
			<div className="flex flex-col gap-4 mt-10">
				<h1 className="font-lora tracking-widest text-xl md:text-3xl">
					Start a Project / Hire for Freelance.
				</h1>
				<p className="font-mono tracking-widest text-[10px]">
					Transforming ideas, architectural bottlenecks, and MVPs into
					resilient, production-ready software. Direct
					founder-to-developer collaboration with zero account
					management lag.
				</p>
			</div>
			<hr />
			{/*content*/}
			<div className="flex flex-col gap-2">
				{/*type*/}
				<div className="flex flex-col gap-6">
					<div className="flex flex-col">
						<p className="font-mono text-[8px] tracking-widest text-neutral-400 uppercase">
							Request Type
						</p>
						<div className="grid grid-cols-2 gap-2 md:gap-4 mt-2">
							{[
								'Freelance Contract',
								'Full Project / MVP',
								'Consulting & Audit',
							].map((type, index) => {
								const isSelected = selectedRequestType === type;
								const isLast = index === 2;
								return (
									<Button
										key={type}
										type="button"
										onClick={() =>
											setSelectedRequestType(type)
										}
										className={`font-mono text-[10px] cursor-pointer h-12 flex items-center justify-center gap-2 ${isLast ? 'col-span-2' : ''} ${isSelected ? 'border-2 border-primary' : ''}`}>
										{isSelected && (
											<Check className="w-3 h-3" />
										)}
										{type}
									</Button>
								);
							})}
						</div>
					</div>
					<div className="flex flex-col gap-4">
						<div className="flex flex-col gap-6 md:gap-6 mt-2">
							<div className="flex flex-col gap-2">
								<p className="font-mono text-[8px] tracking-widest text-neutral-400 uppercase">
									Your Name & Organization
								</p>
								<Input
									type="text"
									value={nameAndOrg}
									onChange={(e) =>
										setNameAndOrg(e.target.value)
									}
									placeholder="GreenHoodSpace"
									className="font-mono tracking-widest text-[8px] h-12"
								/>
							</div>
							<div className="flex flex-col gap-2">
								<p className="font-mono text-[8px] tracking-widest text-neutral-400 uppercase">
									Email Address
								</p>
								<Input
									type="email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									placeholder="dev@greenhoodspace.com"
									className="font-mono tracking-widest text-[8px] h-12"
								/>
							</div>
						</div>
					</div>
					<div className="flex flex-col">
						<div className="flex flex-row justify-between items-center">
							<p className="font-mono text-[8px] tracking-widest text-neutral-400 uppercase">
								Discipline & Scope
							</p>
							<p className="font-mono text-[8px] tracking-widest text-neutral-400 uppercase">
								(Multi-select)
							</p>
						</div>
						<div className="grid grid-cols-2 gap-2 md:gap-4 mt-2 wrap shrink">
							{[
								'Web Application',
								'Mobile App',
								'Desktop Native',
								'AI / LLM Integration',
								'Game Dev',
							].map((disc) => {
								const isSelected =
									selectedDisciplines.includes(disc);
								return (
									<Button
										key={disc}
										type="button"
										onClick={() => toggleDiscipline(disc)}
										className={`font-mono text-[10px] cursor-pointer h-12 flex items-center gap-2 ${isSelected ? 'border-2 border-primary' : ''}`}>
										{isSelected && (
											<Check className="w-3 h-3" />
										)}
										{disc}
									</Button>
								);
							})}
						</div>
						<div className="flex flex-col gap-4 mt-4">
							<div className="flex flex-col gap-6 md:gap-6 mt-2">
								<div className="flex flex-col gap-2">
									<p className="font-mono text-[8px] tracking-widest text-neutral-400 uppercase">
										Budget Allocation
									</p>
									<DropdownMenu>
										<DropdownMenuTrigger>
											<Button
												variant="outline"
												className="font-mono tracking-widest text-[10px] h-12 w-full justify-between cursor-pointer">
												{selectedBudget}
												<ChevronDown className="h-4 w-4 opacity-50" />
											</Button>
										</DropdownMenuTrigger>
										<DropdownMenuContent
											align="start"
											className="w-[var(--radix-dropdown-menu-trigger-width)] min-w-[200px]">
											{[
												'<$5k',
												'$5k - $10k',
												'$10k - $25k',
												'$25k+',
												'$50k+',
												'$1lakh+',
											].map((budget) => (
												<DropdownMenuItem
													key={budget}
													onClick={() =>
														setSelectedBudget(
															budget,
														)
													}
													className="font-mono text-[10px] cursor-pointer w-full py-3 my-0.5 border-b border-neutral-200/20 last:border-b-0">
													{budget}
												</DropdownMenuItem>
											))}
										</DropdownMenuContent>
									</DropdownMenu>
								</div>
								<div className="flex flex-col gap-2">
									<p className="font-mono text-[8px] tracking-widest text-neutral-400 uppercase">
										Target Timeline
									</p>
									<DropdownMenu>
										<DropdownMenuTrigger>
											<Button
												variant="outline"
												className="font-mono tracking-widest text-[10px] h-12 w-full justify-between cursor-pointer">
												{selectedTimeline}
												<ChevronDown className="h-4 w-4 opacity-50" />
											</Button>
										</DropdownMenuTrigger>
										<DropdownMenuContent
											align="start"
											className="w-[var(--radix-dropdown-menu-trigger-width)] min-w-[200px]">
											{[
												'< 1 Month',
												'1 - 2 Months',
												'3 - 6 Months',
												'Flexible',
											].map((timeline) => (
												<DropdownMenuItem
													key={timeline}
													onClick={() =>
														setSelectedTimeline(
															timeline,
														)
													}
													className="font-mono text-[10px] cursor-pointer w-full py-3 my-0.5 border-b border-neutral-200/20 last:border-b-0">
													{timeline}
												</DropdownMenuItem>
											))}
										</DropdownMenuContent>
									</DropdownMenu>
								</div>
							</div>
						</div>
						<div className="flex flex-col gap-2 mt-4">
							<p className="font-mono text-[8px] tracking-widest text-neutral-400 uppercase">
								Project Brief & Problem Statement
							</p>
							<Textarea
								value={projectBrief}
								onChange={(e) =>
									setProjectBrief(e.target.value)
								}
								placeholder="Describe the core technical goals, constraints, expected deliverables, or current blockers..."
								className="font-mono tracking-widest text-[10px] h-20 resize-none"
							/>
						</div>

						{errorMessage && (
							<p className="font-mono text-[10px] text-red-500 mt-2">
								{errorMessage}
							</p>
						)}

						{successMessage && (
							<p className="font-mono text-[10px] text-green-600 mt-2">
								{successMessage}
							</p>
						)}

						<div className="w-full mt-2 cursor-pointer">
							<Button
								onClick={handleSubmit}
								disabled={loading}
								className="flex flex-row gap-4 text-[10px] font-mono tracking-widest w-full h-12 uppercase cursor-pointer">
								{loading ? (
									<>
										Sending...
										<Loader2 className="animate-spin h-4 w-4" />
									</>
								) : (
									<>
										Submit
										<Send />
									</>
								)}
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
