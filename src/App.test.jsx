import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio app without crashing', () => {
	window.history.pushState({}, '', '/Personal-Portfolio-Website/');
	render(<App />);
});
