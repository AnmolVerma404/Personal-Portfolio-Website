import { render, screen, cleanup } from '@testing-library/react';
import App from './App';
import Project from './components/home/Project';
import ResumeButton from './components/resume/ResumeButton';
import ResumeNavLink from './components/resume/ResumeNavLink';

test('renders portfolio app without crashing', () => {
	window.history.pushState({}, '', '/Personal-Portfolio-Website/');
	render(<App />);
	// Confirm privacy: no resume links are rendered
	expect(screen.queryByText(/resume/i)).toBeNull();
});

test('ResumeButton and ResumeNavLink render nothing when href is unset', () => {
	const { container: btnContainer } = render(<ResumeButton />);
	expect(btnContainer.firstChild).toBeNull();

	const { container: navContainer } = render(<ResumeNavLink />);
	expect(navContainer.firstChild).toBeNull();
});

test('ResumeButton renders link when href is explicitly provided', () => {
	const { getByText } = render(<ResumeButton href="https://example.com/resume.pdf" />);
	const link = getByText('Resume');
	expect(link).toBeTruthy();
	expect(link.getAttribute('href')).toBe('https://example.com/resume.pdf');
	cleanup();
});

test('ResumeNavLink renders link when href is explicitly provided', () => {
	const { getByText } = render(<ResumeNavLink href="https://example.com/resume.pdf" />);
	const link = getByText('Resume');
	expect(link).toBeTruthy();
	cleanup();
});

test('hides Project section when projects are empty or rate-limited', () => {
	const { container } = render(
		<Project heading="Pinned Repository" username="test" length={0} specfic={[]} />
	);
	expect(container.firstChild).toBeNull();
});
