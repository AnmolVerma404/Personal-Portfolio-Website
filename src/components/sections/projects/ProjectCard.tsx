import React, { useState, useEffect } from 'react';
import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
	CardFooter,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {
	fetchLanguages,
	formatUpdatedAt,
	type GitHubRepo,
	type Languages,
} from './github';

export interface ProjectCardProps {
	repo: GitHubRepo;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ repo }) => {
	const {
		name,
		description,
		html_url,
		stargazers_count,
		languages_url,
		pushed_at,
	} = repo;

	const [languages, setLanguages] = useState<Languages | null>(null);
	const [isLoadingLang, setIsLoadingLang] = useState(true);

	useEffect(() => {
		const controller = new AbortController();
		if (!languages_url) {
			setIsLoadingLang(false);
			return;
		}

		fetchLanguages(languages_url, controller.signal)
			.then(data => {
				setLanguages(data);
				setIsLoadingLang(false);
			})
			.catch(() => {
				setIsLoadingLang(false);
			});

		return () => controller.abort();
	}, [languages_url]);

	const totalBytes = languages
		? Object.values(languages).reduce((acc, count) => acc + count, 0)
		: 0;

	const languageEntries = languages ? Object.entries(languages) : [];

	return (
		<Card className="flex flex-col justify-between rounded-xl bg-white p-4 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
			<div>
				<CardHeader className="p-0 pb-3">
					<CardTitle className="text-xl font-semibold text-[#212529]">
						{name}
					</CardTitle>
					<CardDescription className="text-sm text-[#6c757d] min-h-[2.5rem]">
						{description
							? description.length > 50
								? `${description.slice(0, 50)}...`
								: description
							: 'No description provided.'}
					</CardDescription>
				</CardHeader>

				<CardContent className="p-0">
					<div className="flex flex-wrap gap-2 pb-4">
						<Button
							variant="outline"
							size="sm"
							nativeButton={false}
							render={props => (
								<a
									{...props}
									href={`${html_url}/archive/master.zip`}
									className="gap-1.5"
								>
									<FontAwesomeIcon icon={faGithub} className="size-3.5" />
									Clone Project
								</a>
							)}
						/>
						<Button
							variant="outline"
							size="sm"
							nativeButton={false}
							render={props => (
								<a
									{...props}
									href={html_url}
									target="_blank"
									rel="noopener noreferrer"
									className="gap-1.5"
								>
									<FontAwesomeIcon icon={faGithub} className="size-3.5" />
									Repo
								</a>
							)}
						/>
					</div>

					<Separator className="my-2" />

					<div className="py-2 text-sm text-[#6c757d]">
						<span className="font-medium text-[#212529]">Languages: </span>
						{isLoadingLang ? (
							<div className="mt-1 flex gap-2">
								<Skeleton className="h-5 w-16" />
								<Skeleton className="h-5 w-20" />
							</div>
						) : languageEntries.length > 0 ? (
							<div className="mt-1 flex flex-wrap gap-1.5">
								{languageEntries.map(([lang, count]) => {
									const percentage =
										totalBytes > 0
											? Math.trunc((count / totalBytes) * 1000) / 10
											: 0;
									return (
										<a
											key={lang}
											href={`${html_url}/search?l=${lang}`}
											target="_blank"
											rel="noopener noreferrer"
											className="inline-block"
										>
											<Badge
												variant="secondary"
												className="font-normal text-xs text-[#212529] bg-[#e9ecef] hover:bg-[#dee2e6]"
											>
												{lang}: {percentage}%
											</Badge>
										</a>
									);
								})}
							</div>
						) : (
							<span className="text-xs italic">code yet to be deployed.</span>
						)}
					</div>
				</CardContent>
			</div>

			<CardFooter className="flex items-center justify-between border-t border-[#dee2e6] p-0 pt-3 text-xs text-[#6c757d]">
				<a
					href={`${html_url}/stargazers`}
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center gap-1.5 text-[#212529] hover:underline"
				>
					<FontAwesomeIcon icon={faGithub} className="size-3.5" />
					<span>Stars</span>
					<Badge variant="default" className="h-5 px-1.5 text-[10px] bg-[#212529] text-white">
						{stargazers_count}
					</Badge>
				</a>
				<span>Updated {formatUpdatedAt(pushed_at)}</span>
			</CardFooter>
		</Card>
	);
};

export default ProjectCard;
