import { render, screen } from '@testing-library/react';
import App from './App';
import Project from './components/home/Project';

test('renders portfolio app without crashing', () => {
	window.history.pushState({}, '', '/Personal-Portfolio-Website/');
	render(<App />);
});

test('hides Project section when projects are empty or rate-limited', () => {
	const { container } = render(
		<Project heading="Pinned Repository" username="test" length={0} specfic={[]} />
	);
	expect(container.firstChild).toBeNull();
});
