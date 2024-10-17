import React from 'react';

import { Col } from 'react-bootstrap';

const ExperienceCard = ({ data }) => {
	return (
		<Col lg="6">
			<div className="pb-5 text-center">
				{data.siteUrl ? (
					<a href={data.siteUrl} target="_blank" rel="noreferrer">
						<img
							className="bg-white mb-3 experience__row__img"
							src={data.companylogo}
							alt=""
							width="500px"
							height="auto"
						/>
					</a>
				) : (
					<img
						className="bg-white mb-3 experience__row__img"
						src={data.companylogo}
						alt=""
						width="500px"
						height="auto"
					/>
				)}
				<p className="lead">
					{data.role}
					<br />
					{data.date}
				</p>
			</div>
		</Col>
	);
};

export default ExperienceCard;
