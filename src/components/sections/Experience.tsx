import React from 'react';
import { Section } from '@/components/layout/Section';
import rtCampLogo from '@/assets/img/rtCamp.png';

export const Experience: React.FC = () => {
	return (
		<Section id="experiences" className="bg-white">
			<h2 className="text-display-4 mb-12 text-center text-[#212529]">
				Experiences
			</h2>
			<div className="flex justify-center">
				<div className="flex flex-col items-center text-center">
					<a
						href="https://rtcamp.com/"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-block transition-transform hover:scale-[1.02]"
					>
						<img
							className="mb-6 rounded-[20px] bg-white w-[250px] min-[420px]:w-[400px] min-[550px]:w-[500px] [box-shadow:rgba(0,0,0,0.4)_0px_2px_4px,rgba(0,0,0,0.3)_0px_7px_13px_-3px,rgba(0,0,0,0.2)_0px_-3px_0px_inset]"
							src={rtCampLogo}
							alt="rtCamp Company Logo"
						/>
					</a>
					<p className="text-lead text-[#212529]">
						Software Engineer
						<br />
						Oct 2023 – Present
					</p>
				</div>
			</div>
		</Section>
	);
};

export default Experience;
