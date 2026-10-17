/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	base: '/Personal-Portfolio-Website/',
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
			'~bootstrap': 'bootstrap',
			'react-typist-component': 'react-typist-component/dist/index.js',
		},
	},
	css: {
		preprocessorOptions: {
			scss: {
				silenceDeprecations: [
					'import',
					'global-builtin',
					'color-functions',
					'if-function',
				],
			} as any,
		},
	},
	build: {
		outDir: 'build',
	},
	server: {
		port: 3000,
		open: true,
	},
	test: {
		globals: true,
		environment: 'jsdom',
		setupFiles: './src/setupTests.ts',
	},
});

