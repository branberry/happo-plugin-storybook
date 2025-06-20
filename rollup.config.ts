
import typescript from '@rollup/plugin-typescript';
import type { RollupOptions } from 'rollup';

export default {  
	input: 'index.ts',
	plugins: [typescript()],
	output: {
		file: 'bundle.js',
		format: 'cjs'
	}
} as RollupOptions;