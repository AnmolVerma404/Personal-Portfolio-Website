import rawTalentsData from './talents.json';

export type TalentCategoryId =
	| 'all'
	| 'movies'
	| 'anime'
	| 'games'
	| 'real'
	| 'beatbox';

export interface TalentCategory {
	id: TalentCategoryId;
	label: string;
}

export interface TalentItem {
	id: string;
	name: string;
	image: string;
	realAudio?: string;
	myAudio?: string;
	realLabel?: string;
	myLabel?: string;
}

export interface TalentSource {
	id: string;
	category: Exclude<TalentCategoryId, 'all'>;
	categoryLabel: string;
	title: string;
	image: string;
	items: readonly TalentItem[];
}

export interface TalentsCatalog {
	categories: readonly TalentCategory[];
	sources: readonly TalentSource[];
}

export const TALENTS_DATA = rawTalentsData as TalentsCatalog;

/**
 * Resolves a relative public asset path (e.g. "talents/images/Peter_Griffin.png")
 * against Vite's BASE_URL so assets load both locally and on GitHub Pages.
 */
export function resolveTalentAsset(path?: string): string {
	if (!path) return '';
	if (/^(https?:)?\/\//.test(path) || path.startsWith('data:')) {
		return path;
	}
	const base = import.meta.env.BASE_URL.endsWith('/')
		? import.meta.env.BASE_URL
		: `${import.meta.env.BASE_URL}/`;
	const normalized = path.startsWith('/') ? path.slice(1) : path;
	return `${base}${normalized}`;
}

