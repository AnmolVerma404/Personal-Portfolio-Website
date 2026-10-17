import React from 'react';
import { NavLink } from '../home/migration';
import { RESUME_URL } from './resume';

export interface ResumeNavLinkProps {
	href?: string;
	className?: string;
}

export const ResumeNavLink: React.FC<ResumeNavLinkProps> = ({
	href = RESUME_URL,
	className,
}) => {
	if (!href) return null;

	return (
		<NavLink
			className={`nav-item lead ${className ?? ''}`}
			href={href}
			target="_blank"
			rel="noreferrer noopener"
		>
			Resume
		</NavLink>
	);
};

export default ResumeNavLink;

