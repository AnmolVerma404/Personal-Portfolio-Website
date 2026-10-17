import React from 'react';
import { cn } from '@/lib/utils';

export interface SectionProps {
	id?: string;
	className?: string;
	children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ id, className, children }) => {
	return (
		<section id={id} className={cn('py-12 md:py-16', className)}>
			<div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
				{children}
			</div>
		</section>
	);
};

export default Section;

