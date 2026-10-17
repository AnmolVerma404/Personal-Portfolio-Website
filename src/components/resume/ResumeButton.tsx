import React from 'react';
import { RESUME_URL } from './resume';

export interface ResumeButtonProps {
	href?: string;
	className?: string;
}

export const ResumeButton: React.FC<ResumeButtonProps> = ({
	href = RESUME_URL,
	className,
}) => {
	if (!href) return null;

	return (
		<p className="lead text-center">
			<a
				className={`btn btn-outline-dark btn-lg ${className ?? ''}`}
				href={href}
				target="_blank"
				rel="noreferrer noopener"
				role="button"
				aria-label="Resume/CV"
			>
				Resume
			</a>
		</p>
	);
};

export default ResumeButton;

