import '@testing-library/jest-dom';
import { TextEncoder, TextDecoder } from 'util';

globalThis.TextEncoder = TextEncoder;
globalThis.TextDecoder = TextDecoder as typeof globalThis.TextDecoder;

globalThis.ResizeObserver = class ResizeObserver {
	observe() {}
	unobserve() {}
	disconnect() {}
};

globalThis.IntersectionObserver = class IntersectionObserver {
	readonly root: Element | Document | null = null;
	readonly rootMargin: string = '';
	readonly scrollMargin: string = '';
	readonly thresholds: ReadonlyArray<number> = [];
	observe() {}
	unobserve() {}
	disconnect() {}
	takeRecords() {
		return [];
	}
} as unknown as typeof globalThis.IntersectionObserver;

vi.mock('react-typist-component', () => ({
	default: function TypistMock({ children }: { children?: React.ReactNode }) {
		return children;
	},
}));

