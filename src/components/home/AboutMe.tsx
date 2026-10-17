import React from 'react';
import { Jumbotron } from './migration';
import anmolvermaImg from '../../assets/img/anmolverma.jpeg';
import ResumeButton from '../resume/ResumeButton';

const HEADING = 'About Me';
const IMAGE_SIZE = 375;
const MESSAGE =
	"Hey there! I'm Anmol Verma, a graduate from Vellore Institute of Technology Bhopal, where I spent 2020-2024 learning the art of turning coffee into code. I majored in Computer Engineering, which is a fancy way of saying I spend a lot of time convincing computers to do what I want (and occasionally begging them to cooperate). Currently, I'm rocking the software engineering scene at rtCamp. When I'm not buried under lines of code, you can find me tinkering with projects, dreaming up the next big thing, or plotting ways to convince my computer to clean up its own bugs.";

export interface AboutMeProps {}

const AboutMe: React.FC<AboutMeProps> = () => {
	return (
		<Jumbotron id="aboutme" className="m-0 about-me">
			<div className="container row">
				<div className="col-5 d-none d-lg-block align-self-center">
					<img
						className="border border-secondary rounded-circle about-me__img"
						src={anmolvermaImg}
						alt="profilepicture"
						width={IMAGE_SIZE}
						height={IMAGE_SIZE}
					/>
				</div>
				<div className="col-lg-7">
					<h2 className="display-4 mb-5 text-center">{HEADING}</h2>
					<p className="lead text-center">{MESSAGE}</p>
					<ResumeButton />
				</div>
			</div>
		</Jumbotron>
	);
};

export default AboutMe;
