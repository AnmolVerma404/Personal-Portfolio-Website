import React from 'react';
import { Section } from '@/components/layout/Section';
import anmolvermaImg from '@/assets/img/anmolverma.jpeg';
import { ResumeButton } from '@/components/resume/ResumeButton';

export interface AboutProps {}

export const About: React.FC<AboutProps> = () => {
	return (
		<Section id="aboutme" className="bg-[#e9ecef]">
			<div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
				<div className="hidden justify-center lg:col-span-5 lg:flex">
					<img
						className="rounded-full border border-secondary object-cover shadow-sm"
						src={anmolvermaImg}
						alt="profilepicture"
						width={375}
						height={375}
					/>
				</div>
				<div className="lg:col-span-7 text-center">
					<h2 className="text-display-4 mb-8">About Me</h2>
					<p className="text-lead text-[#212529] mb-6">
						Hey there! I'm Anmol Verma, a graduate from Vellore Institute of Technology Bhopal,
						where I spent 2020-2024 learning the art of turning coffee into code. I majored in
						Computer Engineering, which is a fancy way of saying I spend a lot of time
						convincing computers to do what I want (and occasionally begging them to
						cooperate). Currently, I'm rocking the software engineering scene at rtCamp.
						When I'm not buried under lines of code, you can find me tinkering with projects,
						dreaming up the next big thing, or plotting ways to convince my computer to clean
						up its own bugs.
					</p>
					<ResumeButton />
				</div>
			</div>
		</Section>
	);
};

export default About;
