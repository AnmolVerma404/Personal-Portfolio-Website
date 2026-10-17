import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import SkillsTab, { type Skill } from './SkillsTab';
import Row from 'react-bootstrap/Row';
import { Jumbotron } from './migration';
import { Container } from 'react-bootstrap';
import { useScrollPosition } from '../../hooks/useScrollPosition';

const HEADING = 'Skills';
const HARD_SKILLS: readonly Skill[] = [
	{ name: 'C++', value: 90 },
	{ name: 'Data Structures', value: 85 },
	{ name: 'Python', value: 70 },
	{ name: 'TypeScript', value: 70 },
	{ name: 'React', value: 65 },
	{ name: 'HTML/CSS', value: 80 },
	{ name: 'PHP', value: 90 },
	{ name: 'DevOps', value: 50 },
];

export interface SkillsProps {}

const Skills = React.forwardRef<HTMLDivElement, SkillsProps>((props, ref) => {
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
					{HEADING}
				</h2>
				<Tabs
					className="skills-tabs"
					defaultActiveKey="hard-skills"
					id="skills-tabs"
					fill
				>
					<Tab
						tabClassName="skills-tab lead"
						eventKey="hard-skills"
						title="Technical Skills"
					>
						<Row className="pt-3 px-1">
							<SkillsTab skills={HARD_SKILLS} isScrolled={isScrolled} />
						</Row>
					</Tab>
				</Tabs>
			</Container>
		</Jumbotron>
	);
});

export default Skills;
