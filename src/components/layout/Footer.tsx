import React from 'react';
import { Badge } from '@/components/ui/badge';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faHeart } from '@fortawesome/free-solid-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';

export const Footer: React.FC = () => {
	return (
		<footer className="mt-auto bg-[#f5f5f5] py-12 text-center text-[#212529]">
			<div className="container mx-auto max-w-4xl px-4">
				<div className="mb-10">
					<h2 className="text-display-4 mb-4">Get In Touch</h2>
					<p className="text-lead text-[#212529] font-light">
						Thank you for visiting 🙌 If you have any questions or inquiries, feel free to reach out via{' '}
						<a
							href="https://www.linkedin.com/in/anmolverma404/"
							target="_blank"
							rel="noopener noreferrer"
							className="text-[#0d6efd] hover:underline"
						>
							LinkedIn
						</a>
					</p>
				</div>
				<div className="flex flex-wrap items-center justify-center gap-1.5 text-sm text-[#212529]">
					<FontAwesomeIcon icon={faCode} className="mx-1" />
					<span>with</span>
					<FontAwesomeIcon icon={faHeart} className="mx-1 text-red-500" />
					<span>by</span>
					<a
						href="https://github.com/AnmolVerma404"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="My GitHub"
						className="inline-block"
					>
						<Badge variant="default" className="bg-[#212529] text-white hover:bg-black px-2 py-0.5">
							Anmol Verma
						</Badge>
					</a>
					<span>using</span>
					<FontAwesomeIcon icon={faReact} className="mx-1 text-[#00d8ff]" />
				</div>
			</div>
		</footer>
	);
};

export default Footer;
