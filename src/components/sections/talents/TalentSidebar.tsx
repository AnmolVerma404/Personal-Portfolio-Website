import React from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import { resolveTalentAsset, type TalentSource } from './talents-data';

export interface TalentSidebarProps {
	sources: readonly TalentSource[];
	activeSourceId: string;
	onSelectSource: (sourceId: string) => void;
}

export const TalentSidebar: React.FC<TalentSidebarProps> = ({
	sources,
	activeSourceId,
	onSelectSource,
}) => {
	return (
		<aside
			aria-label="Talent Titles Sidebar"
			className="overflow-hidden rounded-xl border border-[#dee2e6] bg-white shadow-sm md:col-span-4 lg:col-span-3"
		>
			<ScrollArea className="md:h-[560px]">
				<div className="flex gap-1 overflow-x-auto p-2 md:flex-col md:overflow-x-visible">
					{sources.length === 0 ? (
						<div className="p-6 text-center text-sm text-[#6c757d]">
							No results found.
						</div>
					) : (
						sources.map(source => {
							const isSelected = source.id === activeSourceId;
							return (
								<button
									key={source.id}
									type="button"
									onClick={() => onSelectSource(source.id)}
									className={cn(
										'flex w-full shrink-0 cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-left transition-colors md:shrink',
										isSelected
											? 'bg-[#e9ecef] font-medium text-[#212529]'
											: 'font-normal text-[#495057] hover:bg-[#f8f9fa]'
									)}
								>
									<img
										src={resolveTalentAsset(source.image)}
										alt={source.title}
										loading="lazy"
										decoding="async"
										className="size-10 shrink-0 rounded-lg border border-[#dee2e6] bg-[#f8f9fa] object-contain p-0.5"
									/>
									<div className="min-w-0 flex-1">
										<div className="truncate text-sm text-[#212529]">
											{source.title}
										</div>
										<div className="truncate text-xs text-[#6c757d]">
											{source.categoryLabel}
										</div>
									</div>
								</button>
							);
						})
					)}
				</div>
			</ScrollArea>
		</aside>
	);
};

export default TalentSidebar;

