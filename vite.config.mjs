import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	base: '/Personal-Portfolio-Website/',
	define: {
		'process.env.PUBLIC_URL': JSON.stringify('/Personal-Portfolio-Website'),
	},
	resolve: {
		alias: {
			'~bootstrap': 'bootstrap',
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
		setupFiles: './src/setupTests.js',
	},
});

