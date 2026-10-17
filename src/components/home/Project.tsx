import React, { useState, useEffect, useCallback } from 'react';
import Container from 'react-bootstrap/Container';
import { Jumbotron } from './migration';
import Row from 'react-bootstrap/Row';
import ProjectCard, { type RepositoryData } from './ProjectCard';
import axios from 'axios';

const API = 'https://api.github.com';

const HEADING = 'Pinned Repository';
const GITHUB_USERNAME = 'AnmolVerma404';
const REPOS_LENGTH = 0;
const SPECIFIC_REPOS: readonly string[] = [
	'TicketOps',
	'Healthy-HearTechs',
	'MapMyPath',
	'Data-Structures-and-Algorithms',
];

export interface ProjectProps {
	heading?: string;
	username?: string;
	length?: number;
	specfic?: readonly string[];
}

const Project: React.FC<ProjectProps> = ({
	heading = HEADING,
	username = GITHUB_USERNAME,
	length = REPOS_LENGTH,
	specfic = SPECIFIC_REPOS,
}) => {
	const allReposAPI = `${API}/users/${username}/repos?sort=updated&direction=desc`;
	const specficReposAPI = `${API}/repos/${username}`;

	const [projectsArray, setProjectsArray] = useState<RepositoryData[]>([]);

	const fetchRepos = useCallback(async () => {
		let repoList: RepositoryData[] = [];
		try {
			if (length > 0) {
				const response = await axios.get(allReposAPI);
				repoList = [...response.data.slice(0, length)];
			}
			if (specfic && specfic.length) {
				for (const repoName of specfic) {
					try {
						const response = await axios.get(`${specficReposAPI}/${repoName}`);
						repoList.push(response.data);
					} catch (error: any) {
						console.error(error?.message);
					}
				}
			}
			setProjectsArray(repoList);
		} catch (error: any) {
			console.error(error?.message);
		}
	}, [allReposAPI, length, specfic, specficReposAPI]);

	useEffect(() => {
		fetchRepos();
	}, [fetchRepos]);

	if (!projectsArray.length) {
		return null;
	}

	return (
		<Jumbotron fluid id="projects" className="bg-light m-0">
			<Container className="">
				<h2 className="display-4 pb-5 text-center">{heading}</h2>
				<Row>
					{projectsArray.map((project, index) => (
						<ProjectCard
							key={`project-card-${index}`}
							id={`project-card-${index}`}
							value={project}
						/>
					))}
				</Row>
			</Container>
		</Jumbotron>
	);
};

export default Project;
