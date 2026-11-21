import rawTalentsData from './talents.json';

export type TalentCategoryId =
	| 'all'
	| 'movies'
	| 'anime'
	| 'cartoon'
	| 'games'
	| 'real'
	| 'beatbox'
	| 'songs';

export interface TalentCategory {
	id: TalentCategoryId;
	label: string;
}

export interface TalentItem {
	id: string;
	name: string;
	languageCode?: string;
	language?: string;
	folder?: string;
	image: string;
	originalAudio?: string;
	realAudio?: string;
	myAudio?: string;
	originalLabel?: string;
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
	onlyShowWithAudio?: boolean;
	categories: readonly TalentCategory[];
	sources: readonly TalentSource[];
}

export const TALENTS_DATA = rawTalentsData as TalentsCatalog;

/**
 * Returns true if the item has at least one configured audio file path (myAudio or originalAudio).
 */
export function hasTalentItemAudio(item: TalentItem): boolean {
	return Boolean(
		item.myAudio?.trim() ||
			item.originalAudio?.trim() ||
			item.realAudio?.trim()
	);
}

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
