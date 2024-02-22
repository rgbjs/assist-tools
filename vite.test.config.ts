import { defineConfig } from 'vite'

export default defineConfig({
	build: {
		lib: {
			entry: './test/main.js',
			name: 'assistTools',
			formats: ['es', 'cjs', 'umd', 'iife'],
			fileName(format, entryName) {
				return `${entryName}.${format}.js`
			}
		}
	}
})
