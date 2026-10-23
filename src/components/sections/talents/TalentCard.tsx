import React from 'react';
import { Play, Pause } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { resolveTalentAsset, type TalentItem } from './talents-data';
import type { ActiveAudioState, VoiceTrackType } from './useAudioPlayer';

export interface TalentCardProps {
	item: TalentItem;
	activeAudio: ActiveAudioState | null;
	onToggleAudio: (itemId: string, trackType: VoiceTrackType, audioPath?: string) => void;
}

export const TalentCard: React.FC<TalentCardProps> = ({
	item,
	activeAudio,
	onToggleAudio,
}) => {
	const isPlayingReal =
		activeAudio?.itemId === item.id && activeAudio.trackType === 'real';
	const isPlayingMine =
		activeAudio?.itemId === item.id && activeAudio.trackType === 'mine';
	const isAnyPlaying = isPlayingReal || isPlayingMine;

	const realLabel = item.realLabel || 'Real Voice';
	const myLabel = item.myLabel || 'My Voice';
	const hasRealAudio = item.realAudio !== undefined;

	return (
		<Card className="group flex h-[300px] flex-col justify-between overflow-hidden rounded-xl border border-[#dee2e6] bg-white p-0 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
			{/* ~70% Card Area: Character Image Highlight */}
			<div className="relative flex h-[205px] w-full items-end justify-center overflow-hidden bg-[#f8f9fa] px-4 pt-4">
				<img
					src={resolveTalentAsset(item.image)}
					alt={item.name}
					loading="lazy"
					decoding="async"
					className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
				/>
				<div className="absolute right-0 bottom-0 left-0 h-[3px] bg-[#e9ecef]">
					{isAnyPlaying && (
						<div
							className="h-full bg-[#0d6efd] transition-all duration-150"
							style={{ width: `${activeAudio?.progress ?? 0}%` }}
						/>
					)}
				</div>
			</div>

			{/* ~30% Card Area: Character Name + Real Voice & My Voice Buttons */}
			<CardContent className="flex flex-1 flex-col justify-between bg-white px-4 py-3">
				<h4 className="truncate text-center text-base font-semibold text-[#212529]">
					{item.name}
				</h4>

				<div
					className={cn(
						'grid gap-2 pt-1',
						hasRealAudio ? 'grid-cols-2' : 'grid-cols-1'
					)}
				>
					{hasRealAudio && (
						<Button
							type="button"
							variant="outline"
							size="sm"
							onClick={() => onToggleAudio(item.id, 'real', item.realAudio)}
							className={cn(
								'h-8 cursor-pointer gap-1.5 text-xs font-medium',
								isPlayingReal
									? 'border-[#212529] bg-[#212529] text-white hover:bg-[#212529]/90 hover:text-white'
									: 'border-[#ced4da] bg-white text-[#212529] hover:bg-[#f8f9fa]'
							)}
						>
							{isPlayingReal ? (
								<Pause data-icon="inline-start" />
							) : (
								<Play data-icon="inline-start" />
							)}
							<span className="truncate">{realLabel}</span>
						</Button>
					)}

					<Button
						type="button"
						variant="outline"
						size="sm"
						onClick={() => onToggleAudio(item.id, 'mine', item.myAudio)}
						className={cn(
							'h-8 cursor-pointer gap-1.5 text-xs font-medium',
							isPlayingMine
								? 'border-[#0d6efd] bg-[#0d6efd] text-white hover:bg-[#0b5ed7] hover:text-white'
								: 'border-[#ced4da] bg-white text-[#212529] hover:border-[#0d6efd] hover:text-[#0d6efd]'
						)}
					>
						{isPlayingMine ? (
							<Pause data-icon="inline-start" />
						) : (
							<Play data-icon="inline-start" />
						)}
						<span className="truncate">{myLabel}</span>
					</Button>
				</div>
			</CardContent>
		</Card>
	);
};

export default TalentCard;

