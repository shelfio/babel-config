/**
 * Next.js standard configuration
 */
module.exports = {
  plugins: [
    'lodash',
    'dynamic-import-node',
    ['babel-plugin-styled-components', {ssr: true, fileName: false, pure: true}],
    '@babel/plugin-proposal-optional-chaining',
  ],
  presets: ['next/babel'],
  env: {
    test: {
      plugins: [
        [
          'babel-plugin-styled-components',
          {
            ssr: true,
            fileName: false,
            pure: true,
            displayName: false,
          },
        ],
      ],
    },
  },
};
