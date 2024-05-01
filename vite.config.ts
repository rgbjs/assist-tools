/// <reference types="vitest" />
import { defineConfig } from 'vite'

export default defineConfig({
	build: {
		lib: {
			entry: './src/main.ts',
			name: 'assistTools',
			formats: ['es']
		}
	}
})
