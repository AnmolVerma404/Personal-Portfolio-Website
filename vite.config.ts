/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { fileURLToPath, URL } from 'node:url';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), tailwindcss()],
	base: '/Personal-Portfolio-Website/',
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
			'react-typist-component': 'react-typist-component/dist/index.js',
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
