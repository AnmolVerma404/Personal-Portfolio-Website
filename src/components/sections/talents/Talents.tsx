import React, { useState, useEffect, useRef, Suspense, lazy } from 'react';
import { Section } from '@/components/layout/Section';
import { Skeleton } from '@/components/ui/skeleton';

const LazyTalentsContent = lazy(() => import('./TalentsContent'));

export interface TalentsProps {
	/**
	 * When true, renders the content immediately without waiting for scroll intersection.
	 * Useful for direct tests or deep-linking.
	 */
	eager?: boolean;
}

const TalentsSkeleton: React.FC = () => (
	<div className="flex flex-col gap-6" aria-busy="true" aria-label="Loading Personal Talents">
		<div className="flex flex-col justify-between gap-3 md:flex-row">
			<Skeleton className="h-10 w-full rounded-lg md:w-96" />
			<Skeleton className="h-9 w-full rounded-lg md:w-64" />
		</div>
		<div className="grid grid-cols-1 gap-6 md:grid-cols-12">
			<Skeleton className="h-64 rounded-xl md:col-span-4 md:h-[560px] lg:col-span-3" />
			<div className="flex flex-col gap-5 md:col-span-8 lg:col-span-9">
				<Skeleton className="h-18 w-full rounded-xl" />
				<div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
					<Skeleton className="h-[300px] rounded-xl" />
					<Skeleton className="h-[300px] rounded-xl" />
					<Skeleton className="h-[300px] rounded-xl" />
				</div>
			</div>
		</div>
	</div>
);

export const Talents: React.FC<TalentsProps> = ({ eager = false }) => {
	const [shouldRender, setShouldRender] = useState<boolean>(() => {
		if (eager) return true;
		if (typeof window !== 'undefined' && window.location.hash === '#talents') {
			return true;
		}
		return false;
	});
	const containerRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		if (shouldRender) return;

		const handleHashChange = () => {
			if (window.location.hash === '#talents') {
				setShouldRender(true);
			}
		};

		window.addEventListener('hashchange', handleHashChange);

		const target = containerRef.current;
		if (!target || typeof IntersectionObserver === 'undefined') {
			setShouldRender(true);
			return () => window.removeEventListener('hashchange', handleHashChange);
		}

		const observer = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						setShouldRender(true);
						observer.disconnect();
					}
				});
			},
			{ rootMargin: '300px 0px', threshold: 0.01 }
		);

		observer.observe(target);

		return () => {
			observer.disconnect();
			window.removeEventListener('hashchange', handleHashChange);
		};
	}, [shouldRender]);

	return (
		<Section id="talents" className="bg-[#f8f9fa]">
			<div ref={containerRef}>
				<h2 className="text-display-4 mb-10 text-center text-[#212529]">
					Personal Talents
				</h2>
				{shouldRender ? (
					<Suspense fallback={<TalentsSkeleton />}>
						<LazyTalentsContent />
					</Suspense>
				) : (
					<TalentsSkeleton />
				)}
			</div>
		</Section>
	);
};

export default Talents;

