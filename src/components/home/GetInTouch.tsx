import React from 'react';

const HEADING = 'Get In Touch';
const MESSAGE =
	'Thank you for visiting 🙌 If you have any questions or inquiries, feel free to reach out via';
const LINK = {
	to: 'https://www.linkedin.com/in/anmolverma404/',
	label: 'LinkedIn',
};

export interface GetInTouchProps {}

const GetInTouch: React.FC<GetInTouchProps> = () => {
	return (
		<>
			<h2 className="display-4 pb-3 text-center">{HEADING}</h2>
			<p className="lead text-center pb-3">
				{MESSAGE}{' '}
				<a className="text-decoration-none" href={LINK.to} target="_blank" rel="noopener noreferrer">
					{LINK.label}
				</a>
			</p>
		</>
	);
};

export default GetInTouch;
