import React from 'react';
import Typist from 'react-typist-component';
import { Button } from '@/components/ui/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faGithub,
	faLinkedin,
	faTwitter,
	type IconDefinition,
} from '@fortawesome/free-brands-svg-icons';

export interface SocialIconItem {
	icon: IconDefinition;
	url: string;
	label: string;
}

const SOCIAL_ICONS: readonly SocialIconItem[] = [
	{
		icon: faGithub,
		url: 'https://github.com/AnmolVerma404',
		label: 'GitHub',
	},
	{
		icon: faLinkedin,
		url: 'https://www.linkedin.com/in/anmolverma404/',
		label: 'LinkedIn',
	},
	{
		icon: faTwitter,
		url: 'https://twitter.com/anmolverma404',
		label: 'Twitter',
	},
];

export interface HeroProps {
	headingRef?: React.Ref<HTMLHeadingElement>;
}

export const Hero: React.FC<HeroProps> = ({ headingRef }) => {
	return (
		<section
			id="home"
			style={{
				background:
					'linear-gradient(136deg, #4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1)',
				backgroundSize: '1200% 1200%',
			}}
			className="relative flex min-h-screen items-center justify-center bg-transparent animate-[BackgroundAnimation_70s_ease_infinite] text-white"
		>
			<div id="stars"></div>
			<div className="container relative z-10 mx-auto px-4 text-center">
				<h1
					ref={headingRef}
					className="text-display-1 font-light tracking-tight text-white mb-2"
				>
					Anmol Verma
				</h1>
				<Typist>
					<div className="text-lead font-light text-white/95 min-h-[6rem] sm:min-h-[4rem] md:min-h-[2.5rem]">
						{' '}I Code :) Quotes not found 404 ;) {' '}
					</div>
				</Typist>
				<div className="flex items-center justify-center gap-6 py-8">
					{SOCIAL_ICONS.map((item, index) => (
						<a
							key={`social-${index}`}
							href={item.url}
							target="_blank"
							rel="noopener noreferrer"
							aria-label={`My ${item.label}`}
							className="text-white hover:text-black transition-colors duration-500"
						>
							<FontAwesomeIcon icon={item.icon} className="text-4xl" />
						</a>
					))}
				</div>
				<div className="mt-2">
					<Button
						variant="outline-light"
						size="lg"
						nativeButton={false}
						render={props => (
							<a
								{...props}
								href="#aboutme"
								aria-label="Learn more about me"
							>
								More about me
							</a>
						)}
					/>
				</div>
			</div>
		</section>
	);
};

export default Hero;
