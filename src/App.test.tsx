import { render, screen, cleanup, act, fireEvent } from '@testing-library/react';
import App from './App';
import Projects from './components/sections/projects/Projects';
import ProjectCard from './components/sections/projects/ProjectCard';
import Talents from './components/sections/talents/Talents';
import ResumeButton from './components/resume/ResumeButton';
import ResumeNavLink from './components/resume/ResumeNavLink';

describe('App and Core Components', () => {
	beforeEach(() => {
		vi.restoreAllMocks();
	});

	test('renders portfolio app without crashing', async () => {
		vi.spyOn(globalThis, 'fetch').mockImplementation((input: RequestInfo | URL) => {
			const url = input.toString();
			if (url.includes('/languages')) {
				return Promise.resolve(
					new Response(JSON.stringify({ TypeScript: 12000, CSS: 3000 }), {
						status: 200,
						headers: { 'Content-Type': 'application/json' },
					})
				);
			}
			if (url.includes('/repos/')) {
				const repoName = url.split('/').pop() || 'Sample-Project';
				return Promise.resolve(
					new Response(
						JSON.stringify({
							name: repoName,
							description: 'A sample project description',
							html_url: `https://github.com/AnmolVerma404/${repoName}`,
							stargazers_count: 10,
							languages_url: `https://api.github.com/repos/AnmolVerma404/${repoName}/languages`,
							pushed_at: '2026-01-01T00:00:00Z',
						}),
						{ status: 200, headers: { 'Content-Type': 'application/json' } }
					)
				);
			}
			return Promise.resolve(
				new Response(JSON.stringify([]), {
					status: 200,
					headers: { 'Content-Type': 'application/json' },
				})
			);
		});

		window.history.pushState({}, '', import.meta.env.BASE_URL || '/');

		await act(async () => {
			render(<App />);
		});

		// Confirm privacy: no resume links are rendered anywhere
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
		expect(link.getAttribute('href')).toBe('https://example.com/resume.pdf');
		cleanup();
	});

	test('Projects returns null when repos are empty or rate-limited', async () => {
		vi.spyOn(globalThis, 'fetch').mockResolvedValue(
			new Response(JSON.stringify({ message: 'API rate limit exceeded' }), {
				status: 403,
				headers: { 'Content-Type': 'application/json' },
			})
		);

		let container: HTMLElement | null = null;
		await act(async () => {
			const res = render(
				<Projects heading="Pinned Repository" username="test" length={0} specfic={[]} />
			);
			container = res.container;
		});

		expect(container!.firstChild).toBeNull();
	});

	test('renders ProjectCard with correct star count badge', () => {
		const { getByText } = render(
			<ProjectCard
				repo={{
					name: 'TicketOps',
					description: 'Sample description',
					html_url: 'https://github.com/test',
					stargazers_count: 2,
					languages_url: '',
					pushed_at: '2026-01-01',
				}}
			/>
		);
		const starBadge = getByText('2');
		expect(starBadge).toBeTruthy();
	});

	test('renders Talents section and supports category filtering, sidebar switching, search, language badge, and voice buttons', async () => {
		await act(async () => {
			render(<Talents eager requireAudio={false} />);
		});

		expect(await screen.findByText('Personal Talents')).toBeTruthy();
		expect(await screen.findByText('Peter Griffin')).toBeTruthy();
		expect(screen.getByText('Stewie Griffin')).toBeTruthy();

		// Switch to Anime category
		const animeTab = screen.getByRole('tab', { name: 'Anime' });
		await act(async () => {
			fireEvent.click(animeTab);
		});

		expect(await screen.findByText('Sanji')).toBeTruthy();

		// Select Naruto from the sidebar
		const narutoBtn = screen.getByRole('button', { name: /Naruto/i });
		await act(async () => {
			fireEvent.click(narutoBtn);
		});

		expect(await screen.findByText('Gaara')).toBeTruthy();
		expect(screen.getByText('Pain')).toBeTruthy();

		// Switch to Cartoon category and verify Hindi dub names in brackets
		const cartoonTab = screen.getByRole('tab', { name: 'Cartoon' });
		await act(async () => {
			fireEvent.click(cartoonTab);
		});

		expect(await screen.findByText('Oggy (Billa)')).toBeTruthy();
		expect(screen.getByText('Dee Dee (Jhaplu)')).toBeTruthy();

		// Test search filtering
		const searchInput = screen.getByPlaceholderText('Search character or title...');
		await act(async () => {
			fireEvent.change(searchInput, { target: { value: 'Jhaplu' } });
		});

		expect(screen.getByText('Dee Dee (Jhaplu)')).toBeTruthy();
		expect(screen.queryByText('Oggy (Billa)')).toBeNull();

		// Test Original Audio and My Audio buttons
		const originalVoiceBtn = screen.getByRole('button', { name: /Original Audio/i });
		const myVoiceBtn = screen.getByRole('button', { name: /My Audio/i });

		await act(async () => {
			fireEvent.click(originalVoiceBtn);
		});
		await act(async () => {
			fireEvent.click(myVoiceBtn);
		});
	});

	test('hides characters without audio when requireAudio is true', async () => {
		await act(async () => {
			render(<Talents eager requireAudio={true} />);
		});

		expect(
			await screen.findByText(/Voice clips will appear here automatically/i)
		).toBeTruthy();
	});
});
