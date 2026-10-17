export interface GitHubRepo {
	name: string;
	description: string | null;
	html_url: string;
	stargazers_count: number;
	languages_url: string;
	pushed_at: string;
}

export type Languages = Record<string, number>;

const API_BASE = 'https://api.github.com';

export async function fetchRepo(
	username: string,
	repoName: string,
	signal?: AbortSignal
): Promise<GitHubRepo> {
	const res = await fetch(`${API_BASE}/repos/${username}/${repoName}`, { signal });
	if (!res.ok) {
		throw new Error(`Failed to fetch repo ${repoName}: ${res.statusText}`);
	}
	return res.json();
}

export async function fetchUserRepos(
	username: string,
	length: number,
	signal?: AbortSignal
): Promise<GitHubRepo[]> {
	if (length <= 0) return [];
	const res = await fetch(
		`${API_BASE}/users/${username}/repos?sort=updated&direction=desc&per_page=${length}`,
		{ signal }
	);
	if (!res.ok) {
		throw new Error(`Failed to fetch user repos: ${res.statusText}`);
	}
	const data: GitHubRepo[] = await res.json();
	return data.slice(0, length);
}

export async function fetchLanguages(
	languagesUrl: string,
	signal?: AbortSignal
): Promise<Languages> {
	const res = await fetch(languagesUrl, { signal });
	if (!res.ok) {
		throw new Error(`Failed to fetch languages: ${res.statusText}`);
	}
	return res.json();
}

export function formatUpdatedAt(pushedAt: string): string {
	if (!pushedAt) return '';
	const date = new Date(pushedAt);
	if (Number.isNaN(date.getTime())) return '';
	const now = new Date();
	const diff = now.getTime() - date.getTime();
	const hours = Math.trunc(diff / 1000 / 60 / 60);

	if (hours < 24) {
		if (hours < 1) return 'just now';
		const measurement = hours === 1 ? 'hour' : 'hours';
		return `${hours} ${measurement} ago`;
	}

	const options: Intl.DateTimeFormatOptions = {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
	};
	return `on ${new Intl.DateTimeFormat('en-US', options).format(date)}`;
}

