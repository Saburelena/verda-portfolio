const purgecss = require('@fullhuman/postcss-purgecss')({
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,html,scss}'],
    defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
    safelist: [
        'visually-hidden',
        'u-hidden-mobile',
        'hidden-mobile',
        'visible-mobile',
        /^is-/,
        /^js-/,
        /^animate-/
    ]
});

module.exports = {
    plugins: [
        require('postcss-preset-env')({
            stage: 2,
        }),
        ...(process.env.NODE_ENV === 'production' ? [purgecss] : [])
    ]
};
