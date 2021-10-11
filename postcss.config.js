module.exports = {
  plugins: {
    'postcss-import': {},
    // Reference: https://tailwindcss.com/docs/using-with-preprocessors
    //'tailwindcss/nesting': {},
    tailwindcss: {},
    'postcss-flexbugs-fixes': {},
    'postcss-preset-env': {
      autoprefixer: {
        flexbox: 'no-2009',
      },
      stage: 3,
      features: {
        'custom-properties': false,
        // Reference: https://tailwindcss.com/docs/using-with-preprocessors
        //'nesting-rules': false,
      },
    },
  },
};
