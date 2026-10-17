import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

export interface SkillsBarProps {
	skill: string;
	value: number;
	isScrolled: boolean;
}

function SkillsBar({ skill, value, isScrolled }: SkillsBarProps) {
	return (
		<div style={{ width: '95%' }}>
			<p className="lead mb-1 mt-2">{skill}</p>
			<ProgressBar
				className={!isScrolled ? 'progress' : ' progress-bar-animation'}
				now={value}
			/>
		</div>
	);
}

export default SkillsBar;

