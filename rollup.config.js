import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';
import copy from 'rollup-plugin-copy';
import css from 'rollup-plugin-css-only';


const packageJson = require('./package.json');

export default {
    input: 'src/index.ts',
    output: [{
            file: packageJson.main,
            format: 'cjs',
            sourcemap: true,
        },
        {
            file: packageJson.module,
            format: 'esm',
            sourcemap: true,
        },
    ],
    plugins: [
        peerDepsExternal(),
        css({
            output: 'bundle.css',
        }),
        resolve({
            browser: true,
        }),
        commonjs(),
        typescript({ useTsconfigDeclarationDir: true }),
        postcss({
            modules: true,
            extract: 'src/styles.css', // Specify the output CSS file name
            plugins: [
                require('tailwindcss'),
                require('autoprefixer'),
                // Add any other PostCSS plugins here if needed
            ],
        }),

        copy({
            targets: [{
                src: 'src/index.css',
                dest: 'build',
                rename: 'index.css',
            }, ],
        }),
    ],
    module: {
        rules: [{
            test: /\.(sa|sc|c)ss$/,
            use: [
                'vue-style-loader',
                'css-loader',
                'sass-loader',
                'postcss-loader',
            ],
        }, ],
    },
};