import '@testing-library/jest-dom';

global.ResizeObserver = class ResizeObserver {
	observe() {}
	unobserve() {}
	disconnect() {}
};

jest.mock('react-typist-component', () => {
	return function TypistMock({ children }) {
		return children;
	};
}, { virtual: true });

