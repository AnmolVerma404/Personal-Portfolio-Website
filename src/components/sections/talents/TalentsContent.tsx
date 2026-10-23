import React, { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { TalentFilterBar } from './TalentFilterBar';
import { TalentSidebar } from './TalentSidebar';
import { TalentCard } from './TalentCard';
import {
	TALENTS_DATA,
	resolveTalentAsset,
	type TalentCategoryId,
} from './talents-data';
import { useAudioPlayer } from './useAudioPlayer';

const INITIAL_VISIBLE_CARDS = 6;
const LOAD_MORE_STEP = 6;

export const TalentsContent: React.FC = () => {
	const [activeCategory, setActiveCategory] = useState<TalentCategoryId>('all');
	const [activeSourceId, setActiveSourceId] = useState<string>(
		TALENTS_DATA.sources[0]?.id ?? ''
	);
	const [searchQuery, setSearchQuery] = useState<string>('');
	const [visibleCount, setVisibleCount] = useState<number>(INITIAL_VISIBLE_CARDS);

	const { activeAudio, toggleAudio } = useAudioPlayer();

	const filteredSources = useMemo(() => {
		const q = searchQuery.trim().toLowerCase();
		return TALENTS_DATA.sources.filter(source => {
			const matchesCategory =
				activeCategory === 'all' || source.category === activeCategory;
			if (!matchesCategory) return false;
			if (!q) return true;
			if (source.title.toLowerCase().includes(q)) return true;
			return source.items.some(item => item.name.toLowerCase().includes(q));
		});
	}, [activeCategory, searchQuery]);

	const currentSource = useMemo(() => {
		return (
			filteredSources.find(s => s.id === activeSourceId) ?? filteredSources[0]
		);
	}, [filteredSources, activeSourceId]);

	const visibleItems = useMemo(() => {
		if (!currentSource) return [];
		const q = searchQuery.trim().toLowerCase();
		if (!q) return currentSource.items;
		return currentSource.items.filter(
			item =>
				item.name.toLowerCase().includes(q) ||
				currentSource.title.toLowerCase().includes(q)
		);
	}, [currentSource, searchQuery]);

	const paginatedItems = useMemo(
		() => visibleItems.slice(0, visibleCount),
		[visibleItems, visibleCount]
	);

	const handleSelectCategory = (categoryId: TalentCategoryId) => {
		setActiveCategory(categoryId);
		setVisibleCount(INITIAL_VISIBLE_CARDS);
		const nextSources = TALENTS_DATA.sources.filter(s => {
			const matchesCat = categoryId === 'all' || s.category === categoryId;
			if (!matchesCat) return false;
			const q = searchQuery.trim().toLowerCase();
			if (!q) return true;
			return (
				s.title.toLowerCase().includes(q) ||
				s.items.some(item => item.name.toLowerCase().includes(q))
			);
		});
		if (
			nextSources.length > 0 &&
			!nextSources.some(s => s.id === activeSourceId)
		) {
			setActiveSourceId(nextSources[0].id);
		}
	};

	const handleSelectSource = (sourceId: string) => {
		setActiveSourceId(sourceId);
		setVisibleCount(INITIAL_VISIBLE_CARDS);
	};

	const handleSearchChange = (query: string) => {
		setSearchQuery(query);
		setVisibleCount(INITIAL_VISIBLE_CARDS);
		const q = query.trim().toLowerCase();
		const nextSources = TALENTS_DATA.sources.filter(s => {
			const matchesCat =
				activeCategory === 'all' || s.category === activeCategory;
			if (!matchesCat) return false;
			if (!q) return true;
			return (
				s.title.toLowerCase().includes(q) ||
				s.items.some(item => item.name.toLowerCase().includes(q))
			);
		});
		if (
			nextSources.length > 0 &&
			!nextSources.some(s => s.id === activeSourceId)
		) {
			setActiveSourceId(nextSources[0].id);
		}
	};

	return (
		<>
			<TalentFilterBar
				categories={TALENTS_DATA.categories}
				activeCategory={activeCategory}
				onSelectCategory={handleSelectCategory}
				searchQuery={searchQuery}
				onSearchChange={handleSearchChange}
			/>

			<div className="grid grid-cols-1 items-start gap-6 md:grid-cols-12">
				<TalentSidebar
					sources={filteredSources}
					activeSourceId={currentSource?.id ?? activeSourceId}
					onSelectSource={handleSelectSource}
				/>

				<div className="flex flex-col gap-5 md:col-span-8 lg:col-span-9">
					{currentSource ? (
						<>
							{/* Selected Show Header */}
							<div className="flex items-center justify-between rounded-xl border border-[#dee2e6] bg-white px-5 py-3.5 shadow-sm">
								<div className="flex items-center gap-3.5">
									<img
										src={resolveTalentAsset(currentSource.image)}
										alt={currentSource.title}
										loading="lazy"
										decoding="async"
										className="size-11 shrink-0 rounded-lg border border-[#dee2e6] bg-[#f8f9fa] object-contain p-0.5"
									/>
									<div>
										<h3 className="text-lg leading-tight font-semibold text-[#212529]">
											{currentSource.title}
										</h3>
										<p className="mt-0.5 text-xs text-[#6c757d]">
											{currentSource.categoryLabel}
										</p>
									</div>
								</div>
								<span className="text-xs text-[#6c757d]">
									{visibleItems.length}{' '}
									{visibleItems.length === 1 ? 'character' : 'characters'}
								</span>
							</div>

							{/* Character Cards Grid */}
							<div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
								{paginatedItems.map(item => (
									<TalentCard
										key={item.id}
										item={item}
										activeAudio={activeAudio}
										onToggleAudio={toggleAudio}
									/>
								))}
							</div>

							{/* Lazy Load More Guard for Large Sets */}
							{visibleItems.length > visibleCount && (
								<div className="mt-2 flex justify-center">
									<Button
										type="button"
										variant="outline"
										onClick={() =>
											setVisibleCount(prev => prev + LOAD_MORE_STEP)
										}
										className="border-[#ced4da] bg-white text-[#212529] hover:bg-[#f8f9fa]"
									>
										Load More ({visibleItems.length - visibleCount} remaining)
									</Button>
								</div>
							)}
						</>
					) : (
						<div className="rounded-xl border border-[#dee2e6] bg-white p-8 text-center text-sm text-[#6c757d] shadow-sm">
							No matching characters or titles found.
						</div>
					)}
				</div>
			</div>
		</>
	);
};

export default TalentsContent;

