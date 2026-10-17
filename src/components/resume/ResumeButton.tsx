import React from 'react';
import { RESUME_URL } from '@/components/resume/resume';
import { Button } from '@/components/ui/button';

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
		<div className="mt-4 flex justify-center">
			<Button
				variant="outline"
				size="lg"
				nativeButton={false}
				className={className}
				render={props => (
					<a
						{...props}
						href={href}
						target="_blank"
						rel="noreferrer noopener"
						role="button"
						aria-label="Resume/CV"
					>
						Resume
					</a>
				)}
			/>
		</div>
	);
};

export default ResumeButton;
