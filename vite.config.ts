/// <reference types="vitest" />
import { defineConfig } from 'vite'
import fs from 'fs'
import path from 'path'
import dts from 'vite-plugin-dts'

export default defineConfig({
	build: {
		lib: {
			entry: './src/main.ts',
			name: 'assistTools',
			formats: ['es', 'cjs'],
			fileName(format, entryName) {
				return `${entryName}.${format}.js`
			}
		}
	},

	plugins: [
		dts({
			insertTypesEntry: true,
			afterBuild(emittedFiles) {
				const rootPath = path.resolve()
				const reg = /\\/g
				const p = path.join(rootPath, '/dist/main.es.d.ts').replace(reg, '/')
				const content = emittedFiles.get(p) as string
				fs.writeFileSync(path.join(rootPath, '/dist/main.cjs.d.ts'), content)
			}
		})
	]
})
