import { useState, useRef, useEffect, useCallback } from 'react';
import { resolveTalentAsset } from './talents-data';

export type VoiceTrackType = 'real' | 'mine';

export interface ActiveAudioState {
	itemId: string;
	trackType: VoiceTrackType;
	progress: number;
}

export interface UseAudioPlayerReturn {
	activeAudio: ActiveAudioState | null;
	toggleAudio: (itemId: string, trackType: VoiceTrackType, audioPath?: string) => void;
	stopAudio: () => void;
}

/**
 * Singleton HTMLAudioElement hook with preload="none".
 * Ensures zero audio network requests occur until the user explicitly clicks a voice button.
 * Falls back to a brief simulated progress bar if the MP3 file hasn't been uploaded yet.
 */
export function useAudioPlayer(): UseAudioPlayerReturn {
	const [activeAudio, setActiveAudio] = useState<ActiveAudioState | null>(null);
	const audioRef = useRef<HTMLAudioElement | null>(null);
	const fallbackTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);

	const clearFallbackTimer = useCallback(() => {
		if (fallbackTimerRef.current) {
			clearInterval(fallbackTimerRef.current);
			fallbackTimerRef.current = null;
		}
	}, []);

	const stopAudio = useCallback(() => {
		clearFallbackTimer();
		if (audioRef.current) {
			audioRef.current.pause();
			audioRef.current.removeAttribute('src');
		}
		setActiveAudio(null);
	}, [clearFallbackTimer]);

	const startFallbackSimulation = useCallback(
		(itemId: string, trackType: VoiceTrackType) => {
			clearFallbackTimer();
			setActiveAudio({ itemId, trackType, progress: 15 });

			fallbackTimerRef.current = setInterval(() => {
				setActiveAudio(prev => {
					if (!prev || prev.itemId !== itemId || prev.trackType !== trackType) {
						clearFallbackTimer();
						return prev;
					}
					const nextProgress = prev.progress + 8;
					if (nextProgress >= 100) {
						clearFallbackTimer();
						return null;
					}
					return { ...prev, progress: nextProgress };
				});
			}, 180);
		},
		[clearFallbackTimer]
	);

	const toggleAudio = useCallback(
		(itemId: string, trackType: VoiceTrackType, audioPath?: string) => {
			// If clicking the currently playing button, stop playback
			if (
				activeAudio &&
				activeAudio.itemId === itemId &&
				activeAudio.trackType === trackType
			) {
				stopAudio();
				return;
			}

			clearFallbackTimer();

			if (!audioPath) {
				startFallbackSimulation(itemId, trackType);
				return;
			}

			if (!audioRef.current && typeof Audio !== 'undefined') {
				const el = new Audio();
				el.preload = 'none';
				audioRef.current = el;
			}

			const audio = audioRef.current;
			if (!audio) {
				startFallbackSimulation(itemId, trackType);
				return;
			}

			audio.pause();
			audio.src = resolveTalentAsset(audioPath);
			audio.currentTime = 0;

			setActiveAudio({ itemId, trackType, progress: 5 });

			audio.ontimeupdate = () => {
				if (audio.duration && Number.isFinite(audio.duration)) {
					const pct = Math.min(100, Math.round((audio.currentTime / audio.duration) * 100));
					setActiveAudio(prev =>
						prev && prev.itemId === itemId && prev.trackType === trackType
							? { ...prev, progress: pct }
							: prev
					);
				}
			};

			audio.onended = () => {
				setActiveAudio(null);
			};

			audio.onerror = () => {
				// Gracefully fall back to visual progress demo if the audio file is not placed in public/ yet
				startFallbackSimulation(itemId, trackType);
			};

			const playPromise = audio.play();
			if (playPromise && typeof playPromise.catch === 'function') {
				playPromise.catch(() => {
					startFallbackSimulation(itemId, trackType);
				});
			}
		},
		[activeAudio, clearFallbackTimer, startFallbackSimulation, stopAudio]
	);

	useEffect(() => {
		return () => {
			clearFallbackTimer();
			if (audioRef.current) {
				audioRef.current.pause();
				audioRef.current.removeAttribute('src');
			}
		};
	}, [clearFallbackTimer]);

	return {
		activeAudio,
		toggleAudio,
		stopAudio,
	};
}

