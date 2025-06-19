import type {  RollupOptions } from 'rollup';

export default {
	input: 'index.ts',
	output: {
		file: 'bundle.js',
		format: 'cjs'
	}
} as RollupOptions;