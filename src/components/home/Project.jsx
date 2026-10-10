import React, { useState, useEffect, useCallback } from 'react';
import Container from 'react-bootstrap/Container';
import { Jumbotron } from './migration';
import Row from 'react-bootstrap/Row';
import ProjectCard from './ProjectCard';
import axios from 'axios';

const API = 'https://api.github.com';

const Project = ({ heading, username, length, specfic }) => {
	const allReposAPI = `${API}/users/${username}/repos?sort=updated&direction=desc`;
	const specficReposAPI = `${API}/repos/${username}`;

	const [projectsArray, setProjectsArray] = useState([]);

	const fetchRepos = useCallback(async () => {
		let repoList = [];
		try {
			// getting all repos if length is specified
			if (length > 0) {
				const response = await axios.get(allReposAPI);
				repoList = [...response.data.slice(0, length)];
			}
			// adding specified repos
			if (specfic && specfic.length) {
				for (let repoName of specfic) {
					try {
						const response = await axios.get(`${specficReposAPI}/${repoName}`);
						repoList.push(response.data);
					} catch (error) {
						console.error(error.message);
					}
				}
			}
			setProjectsArray(repoList);
		} catch (error) {
			console.error(error.message);
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
