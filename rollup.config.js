import typescript from 'rollup-plugin-typescript';
import resolve from 'rollup-plugin-node-resolve'; 
import commonjs from 'rollup-plugin-commonjs';

export default {
    input: 'src/index.ts',
    output: {
        file: 'dist/bundle.js',
        format: 'cjs',
    }, 
    plugins: [
        resolve(),
        commonjs(),
        typescript({
            tsconfig: './tsconfig.json',
        }), 
    ],

    external: ['react', 'react-dom'],
}
