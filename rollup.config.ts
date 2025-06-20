
import type { RollupOptions } from 'rollup';

import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';

export default {  
	input: 'src/index.ts',
	plugins: [typescript()],
	output: {
		dir: 'dist',
		format: 'cjs',
		plugins: [terser()]
	}
} as RollupOptions;