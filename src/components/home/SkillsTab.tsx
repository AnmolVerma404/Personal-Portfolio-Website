import React from 'react';
import Col from 'react-bootstrap/Col';
import SkillsBar from './SkillsBar';

export interface Skill {
	name: string;
	value: number;
}

interface SkillsSectionProps {
	skills: readonly Skill[];
	isScrolled: boolean;
}

function SkillsSection({ skills, isScrolled }: SkillsSectionProps) {
	return (
		<>
			{skills.map((skill, index) => (
				<SkillsBar
					key={`${skill.name}-${index}`}
					skill={skill.name}
					value={skill.value}
					isScrolled={isScrolled}
				/>
			))}
		</>
	);
}

export interface SkillsTabProps {
	skills: readonly Skill[];
	isScrolled: boolean;
}

function SkillsTab({ skills, isScrolled }: SkillsTabProps) {
	return (
		<>
			<Col xs={12} md={6}>
				<SkillsSection
					skills={skills.slice(0, Math.floor(skills.length / 2))}
					isScrolled={isScrolled}
				/>
			</Col>
			<Col xs={12} md={6}>
				<SkillsSection
					skills={skills.slice(Math.floor(skills.length / 2), skills.length)}
					isScrolled={isScrolled}
				/>
			</Col>
		</>
	);
}

export default SkillsTab;
