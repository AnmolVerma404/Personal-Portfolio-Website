import React from 'react';
import Container from 'react-bootstrap/Container';
import Typist from 'react-typist-component';
import { Jumbotron } from './migration';

export interface SocialIcon {
	image: string;
	url: string;
}

const GRADIENT_COLORS = '#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1';
const FIRST_NAME = 'Anmol';
const MIDDLE_NAME = '';
const LAST_NAME = 'Verma';
const TITLE = `${FIRST_NAME} ${MIDDLE_NAME ? MIDDLE_NAME + ' ' : ''}${LAST_NAME}`;
const MESSAGE = ' I Code :) Quotes not found 404 ;) ';

const SOCIAL_ICONS: readonly SocialIcon[] = [
	{
		image: 'fa-github',
		url: 'https://github.com/AnmolVerma404',
	},
	{
		image: 'fa-linkedin',
		url: 'https://www.linkedin.com/in/anmolverma404/',
	},
	{
		image: 'fa-twitter',
		url: 'https://twitter.com/anmolverma404',
	},
];

export interface MainBodyProps {}

const MainBody = React.forwardRef<HTMLHeadingElement, MainBodyProps>((props, ref) => {
	return (
		<Jumbotron
			fluid
			id="home"
			style={{
				background: `linear-gradient(136deg,${GRADIENT_COLORS})`,
				backgroundSize: '1200% 1200%',
			}}
			className="title bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"
		>
			<div id="stars"></div>
			<Container className="text-center">
				<h1 ref={ref} className="display-1">
					{TITLE}
				</h1>
				<Typist>
					<div className="lead typist">{MESSAGE}</div>
				</Typist>
				<div className="p-5">
					{SOCIAL_ICONS.map((icon, index) => (
						<a
							key={`social-icon-${index}`}
							target="_blank"
							rel="noopener noreferrer"
							href={icon.url}
							aria-label={`My ${icon.image.split('-')[1]}`}
						>
							<i className={`fab ${icon.image} fa-3x socialicons`} />
						</a>
					))}
				</div>
				<a
					className="btn btn-outline-light btn-lg "
					href="#aboutme"
					role="button"
					aria-label="Learn more about me"
				>
					More about me
				</a>
			</Container>
		</Jumbotron>
	);
});

export default MainBody;
