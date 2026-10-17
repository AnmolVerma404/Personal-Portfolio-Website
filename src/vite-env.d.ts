/// <reference types="vite/client" />

declare module 'react-typist-component' {
	import React from 'react';
	const Typist: React.ComponentType<{
		children?: React.ReactNode;
		typingDelay?: number;
		backspaceDelay?: number;
		loop?: boolean;
		pause?: number;
		onTypingDone?: () => void;
	}>;
	export default Typist;
}

declare module '*.jpeg' {
	const src: string;
	export default src;
}

declare module '*.jpg' {
	const src: string;
	export default src;
}

declare module '*.png' {
	const src: string;
	export default src;
}

declare module '*.svg' {
	const src: string;
	export default src;
}

