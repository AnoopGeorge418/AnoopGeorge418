import { getGithubRepositories } from '@/lib/github';
import Image from 'next/image';

export const WorksSection = async () => {
	const works = await getGithubRepositories();

	return (
		<section className="w-full rounded-md bg-accent p-4 pt-5">
			<div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
				{works.map((work) => (
					<article
						key={work.workName}
						className="overflow-hidden rounded-xl border bg-background">
						{/* Preview Image */}

						<div className="aspect-video w-full overflow-hidden bg-muted">
							{work.info.previewImage ? (
								<Image 
									src={work.info.previewImage}
                                    alt={work.info.title}
                                    width={100}
									height={100}
									className="h-full w-full object-cover"
                                />
							) : (
								<div className="flex h-full items-center justify-center">
									<span className="text-sm text-muted-foreground">
										No preview available
									</span>
								</div>
							)}
						</div>

						{/* Content */}

						<div className="p-5">
							{/* Tags */}

							<div className="mb-3 flex flex-wrap gap-2">
								<span className="rounded-full border px-3 py-1 text-xs">
									{work.progressTag}
								</span>

								{work.specificTag && (
									<span className="rounded-full border px-3 py-1 text-xs">
										{work.specificTag}
									</span>
								)}
							</div>

							{/* Title */}

							<h2 className="text-xl font-semibold">
								{work.info.title}
							</h2>

							{/* Description */}

							<p className="mt-2 line-clamp-3 text-sm text-muted-foreground">
								{work.info.desc}
							</p>

							{/* Stack */}

							<div className="mt-4 flex flex-wrap gap-2">
								{work.info.stack.map((technology) => (
									<span
										key={technology}
										className="rounded-md bg-muted px-2 py-1 text-xs">
										{technology}
									</span>
								))}
							</div>

							{/* Actions */}

							<div className="mt-6 flex gap-3">
								<a
									href={work.info.viewWorkUrl}
									target="_blank"
									rel="noopener noreferrer"
									className="rounded-lg bg-primary px-4 py-2 text-sm text-primary-foreground">
									View Work
								</a>

								<a
									href={work.repository.githubUrl}
									target="_blank"
									rel="noopener noreferrer"
									className="rounded-lg border px-4 py-2 text-sm">
									GitHub
								</a>
							</div>

							{/* Repository */}

							<div className="mt-5 border-t pt-4">
								<div className="flex items-center justify-between">
									<span className="text-xs text-muted-foreground">
										Repository
									</span>

									<span className="text-xs">
										{work.repository.visibility}
									</span>
								</div>

								{work.repository.currentVersion && (
									<p className="mt-1 text-xs text-muted-foreground">
										Version:{' '}
										{work.repository.currentVersion}
									</p>
								)}
							</div>

							{/* Deployment */}

							{work.deployment && (
								<div className="mt-4 border-t pt-4">
									<p className="text-xs text-muted-foreground">
										{work.deployment.tag}
									</p>

									<h3 className="mt-1 text-sm font-medium">
										{work.deployment.title}
									</h3>

									<a
										href={work.deployment.liveSiteUrl}
										target="_blank"
										rel="noopener noreferrer"
										className="mt-2 inline-block text-xs underline">
										Visit Live Site
									</a>
								</div>
							)}

							{/* YouTube */}

							{work.youtube && (
								<div className="mt-4 border-t pt-4">
									<h3 className="text-sm font-medium">
										{work.youtube.title}
									</h3>

									<p className="mt-1 text-xs text-muted-foreground">
										{work.youtube.desc}
									</p>
								</div>
							)}

							{/* Blog */}

							{work.blog && (
								<div className="mt-4 border-t pt-4">
									<div className="flex items-center justify-between">
										<h3 className="text-sm font-medium">
											{work.blog.title}
										</h3>

										<span className="text-xs text-muted-foreground">
											{work.blog.length}
										</span>
									</div>

									<p className="mt-1 text-xs text-muted-foreground">
										{work.blog.desc}
									</p>

									<a
										href={work.blog.blogUrl}
										target="_blank"
										rel="noopener noreferrer"
										className="mt-2 inline-block text-xs underline">
										Read Blog
									</a>
								</div>
							)}
						</div>
					</article>
				))}
			</div>
		</section>
	);
};
