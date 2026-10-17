import React from 'react';
import ExperienceCard, { type ExperienceItem } from './ExperienceCard';
import { Jumbotron } from './migration';
import { Container, Row } from 'react-bootstrap';
import rtCampLogo from '../../assets/img/rtCamp.png';

const HEADING = 'Experiences';

const EXPERIENCES: readonly ExperienceItem[] = [
	{
		role: 'Software Engineer',
		companylogo: rtCampLogo,
		date: 'Oct 2023 – Present',
		siteUrl: 'https://rtcamp.com/',
	},
];

export interface ExperienceProps {}

const Experience: React.FC<ExperienceProps> = () => {
	return (
		<section className="section experience" id="experiences">
			<Container>
				<Jumbotron className="bg-white">
					<h2 className="display-4 mb-5 text-center experience__heading">
						{HEADING}
					</h2>
					<Row className="experience__row">
						{EXPERIENCES.map((data, index) => {
							return <ExperienceCard key={index} data={data} />;
						})}
					</Row>
				</Jumbotron>
			</Container>
		</section>
	);
};

export default Experience;
