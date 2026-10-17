import '@testing-library/jest-dom';
import { TextEncoder, TextDecoder } from 'util';

globalThis.TextEncoder = TextEncoder;
globalThis.TextDecoder = TextDecoder as typeof globalThis.TextDecoder;

globalThis.ResizeObserver = class ResizeObserver {
	observe() {}
	unobserve() {}
	disconnect() {}
};

vi.mock('react-typist-component', () => ({
	default: function TypistMock({ children }: { children?: React.ReactNode }) {
		return children;
	},
}));

