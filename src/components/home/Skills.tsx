import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import SkillsTab from './SkillsTab';
import Row from 'react-bootstrap/Row';
import { Jumbotron } from './migration';
import { Container } from 'react-bootstrap';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { type Skill } from '../../editable-stuff/config';

export interface SkillsProps {
	heading: string;
	hardSkills: Skill[];
	showHardSkills: boolean;
}

const Skills = React.forwardRef<HTMLDivElement, SkillsProps>(
	({ heading, hardSkills, showHardSkills }, ref) => {
		const skillsTabRef = React.useRef<HTMLDivElement | null>(null);
		const [isScrolled, setIsScrolled] = React.useState(false);

		useScrollPosition(
			({ currPos }) => {
				if (!isScrolled && currPos.y - 400 < 0) setIsScrolled(true);
			},
			[],
			skillsTabRef
		);
		return (
			<Jumbotron ref={skillsTabRef} fluid className="bg-white m-0" id="skills">
				<Container className="p-5 ">
					<h2 className="display-4 pb-5 text-center">
						{heading}
					</h2>
					<Tabs
						className="skills-tabs"
						defaultActiveKey="hard-skills"
						id="skills-tabs"
						fill
					>
						{showHardSkills && (
							<Tab
								tabClassName="skills-tab lead"
								eventKey="hard-skills"
								title="Technical Skills"
							>
								<Row className="pt-3 px-1">
									<SkillsTab skills={hardSkills} isScrolled={isScrolled} />
								</Row>
							</Tab>
						)}
					</Tabs>
				</Container>
			</Jumbotron>
		);
	}
);

export default Skills;

