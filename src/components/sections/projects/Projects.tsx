import React, { useState, useEffect } from 'react';
import { Section } from '@/components/layout/Section';
import { ProjectCard } from './ProjectCard';
import {
	fetchRepo,
	fetchUserRepos,
	type GitHubRepo,
} from './github';

export interface ProjectsProps {
	heading?: string;
	username?: string;
	length?: number;
	specfic?: readonly string[];
}

const DEFAULT_SPECIFIC_REPOS: readonly string[] = [
	'TicketOps',
	'Healthy-HearTechs',
	'MapMyPath',
	'Data-Structures-and-Algorithms',
];

export const Projects: React.FC<ProjectsProps> = ({
	heading = 'Pinned Repository',
	username = 'AnmolVerma404',
	length = 0,
	specfic = DEFAULT_SPECIFIC_REPOS,
}) => {
	const [repos, setRepos] = useState<GitHubRepo[]>([]);

	useEffect(() => {
		const controller = new AbortController();

		async function loadRepos() {
			try {
				const specificPromises = (specfic || []).map(name =>
					fetchRepo(username, name, controller.signal)
				);

				const userReposPromise =
					length > 0
						? fetchUserRepos(username, length, controller.signal)
						: Promise.resolve([] as GitHubRepo[]);

				const [userResults, specificResults] = await Promise.all([
					userReposPromise.catch(() => [] as GitHubRepo[]),
					Promise.allSettled(specificPromises),
				]);

				const fulfilledSpecific = specificResults
					.filter(
						(r): r is PromiseFulfilledResult<GitHubRepo> =>
							r.status === 'fulfilled'
					)
					.map(r => r.value);

				setRepos([...userResults, ...fulfilledSpecific]);
			} catch {
				setRepos([]);
			}
		}

		loadRepos();

		return () => controller.abort();
	}, [username, length, specfic]);

	if (repos.length === 0) {
		return null;
	}

	return (
		<Section id="projects" className="bg-[#f8f9fa]">
			<h2 className="text-display-4 mb-12 text-center text-[#212529]">
				{heading}
			</h2>
			<div className="grid grid-cols-1 gap-8 md:grid-cols-2">
				{repos.map(repo => (
					<ProjectCard key={repo.name} repo={repo} />
				))}
			</div>
		</Section>
	);
};

export default Projects;

