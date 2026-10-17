/* eslint-disable react-hooks/exhaustive-deps */
import { useRef, type DependencyList, type RefObject } from 'react';
import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect';

const isBrowser = typeof window !== 'undefined';

interface Position {
	x: number;
	y: number;
}

interface ScrollParams {
	element?: RefObject<HTMLElement | null> | false;
	useWindow?: boolean;
}

function getScrollPosition({ element, useWindow }: ScrollParams): Position {
	if (!isBrowser) return { x: 0, y: 0 };

	const target = element && 'current' in element && element.current ? element.current : document.body;
	const position = target.getBoundingClientRect();

	return useWindow
		? { x: window.scrollX, y: window.scrollY }
		: { x: position.left, y: position.top };
}

export function useScrollPosition(
	effect: (params: { prevPos: Position; currPos: Position }) => void,
	deps: DependencyList = [],
	element?: RefObject<HTMLElement | null> | false,
	useWindow: boolean = false,
	wait?: number | null
) {
	const position = useRef<Position>(getScrollPosition({ useWindow }));

	let throttleTimeout: ReturnType<typeof setTimeout> | null = null;

	const callBack = () => {
		const currPos = getScrollPosition({ element, useWindow });
		effect({ prevPos: position.current, currPos });
		position.current = currPos;
		throttleTimeout = null;
	};

	useIsomorphicLayoutEffect(() => {
		if (!isBrowser) {
			return;
		}

		const handleScroll = () => {
			if (wait) {
				if (throttleTimeout === null) {
					throttleTimeout = setTimeout(callBack, wait);
				}
			} else {
				callBack();
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
			if (throttleTimeout) clearTimeout(throttleTimeout);
		};
	}, deps);
}

