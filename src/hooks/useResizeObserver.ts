import React from 'react';

const useResizeObserver = (ref: React.RefObject<HTMLElement | null>) => {
	const [dimensions, setDimensions] = React.useState<DOMRectReadOnly | null>(null);
	React.useEffect(() => {
		const observeTarget = ref.current;
		if (!observeTarget) return;

		const resizeObserver = new ResizeObserver(entries => {
			entries.forEach(entry => {
				setDimensions(entry.contentRect);
			});
		});
		resizeObserver.observe(observeTarget);
		return () => {
			resizeObserver.unobserve(observeTarget);
		};
	}, [ref]);
	return dimensions;
};

export default useResizeObserver;

