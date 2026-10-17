import React from 'react';
import { RESUME_URL } from '@/components/resume/resume';

export interface ResumeNavLinkProps {
	href?: string;
	className?: string;
	onClick?: () => void;
}

export const ResumeNavLink: React.FC<ResumeNavLinkProps> = ({
	href = RESUME_URL,
	className,
	onClick,
}) => {
	if (!href) return null;

	return (
		<a
			className={`text-lead font-light text-[#212529] hover:text-[#0d6efd] transition-colors ${className ?? ''}`}
			href={href}
			target="_blank"
			rel="noreferrer noopener"
			onClick={onClick}
		>
			Resume
		</a>
	);
};

export default ResumeNavLink;
