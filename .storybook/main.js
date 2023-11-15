const path = require('path'); // Add this line to import the 'path' module

module.exports = {
    stories: [
        '../src/**/*.stories.mdx',
        '../src/**/*.stories.@(js|jsx|ts|tsx)',
    ],

    addons: ['@storybook/addon-styling-webpack'],

    framework: {
        name: '@storybook/react-webpack5',
        options: {}
    },

    docs: {
        autodocs: true
    },
    webpackFinal: async(config) => {
        // Find the rule for processing CSS files
        const cssRule = config.module.rules.find((rule) => rule.test && rule.test.toString() === '/\\.css$/');

        // Add Tailwind CSS support to PostCSS Loader
        if (cssRule) {
            const postcssLoader = cssRule.use.find((loader) => loader.loader && loader.loader.includes('postcss-loader'));
            if (postcssLoader) {
                postcssLoader.options.postcssOptions = {
                    plugins: [require('tailwindcss'), require('autoprefixer')],
                };
            }
        }

        return config;
    },
};