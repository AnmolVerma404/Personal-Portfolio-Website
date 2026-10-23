import React from 'react';
import { Search, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import type { TalentCategory, TalentCategoryId } from './talents-data';

export interface TalentFilterBarProps {
	categories: readonly TalentCategory[];
	activeCategory: TalentCategoryId;
	onSelectCategory: (categoryId: TalentCategoryId) => void;
	searchQuery: string;
	onSearchChange: (query: string) => void;
}

export const TalentFilterBar: React.FC<TalentFilterBarProps> = ({
	categories,
	activeCategory,
	onSelectCategory,
	searchQuery,
	onSearchChange,
}) => {
	return (
		<div className="mb-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
			<div
				role="tablist"
				aria-label="Talent Categories"
				className="inline-flex items-center gap-1 overflow-x-auto rounded-lg border border-[#dee2e6] bg-white p-1"
			>
				{categories.map(category => {
					const isActive = category.id === activeCategory;
					return (
						<button
							key={category.id}
							role="tab"
							type="button"
							aria-selected={isActive}
							onClick={() => onSelectCategory(category.id)}
							className={cn(
								'cursor-pointer rounded-md px-3.5 py-1.5 text-sm whitespace-nowrap transition-colors',
								isActive
									? 'bg-[#212529] font-medium text-white shadow-2xs'
									: 'font-normal text-[#6c757d] hover:bg-[#f8f9fa] hover:text-[#212529]'
							)}
						>
							{category.label}
						</button>
					);
				})}
			</div>

			<div className="relative w-full md:w-64">
				<Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-[#6c757d]" />
				<Input
					type="text"
					value={searchQuery}
					onChange={e => onSearchChange(e.target.value)}
					placeholder="Search character or title..."
					aria-label="Search character or title"
					className="h-9 w-full rounded-lg border-[#dee2e6] bg-white pr-8 pl-9 text-sm text-[#212529] placeholder:text-[#6c757d]"
				/>
				{searchQuery.trim().length > 0 && (
					<button
						type="button"
						onClick={() => onSearchChange('')}
						aria-label="Clear search"
						className=" absolute top-1/2 right-2.5 -translate-y-1/2 cursor-pointer text-[#6c757d] hover:text-[#212529]"
					>
						<X className="size-3.5" />
					</button>
				)}
			</div>
		</div>
	);
};

export default TalentFilterBar;

