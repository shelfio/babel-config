/**
 * React components(jsx,tsx) + testing (ts/tsx)
 */
module.exports = {
  plugins: [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-optional-chaining',
    'babel-plugin-styled-components',
    [
      '@babel/plugin-transform-runtime',
      {
        corejs: false,
        helpers: false,
        regenerator: true,
        useESModules: true,
        absoluteRuntime: false,
      },
    ],
  ],
  presets: [
    '@babel/preset-typescript',
    [
      '@babel/preset-env',
      {
        targets: {
          browsers: ['last 4 versions', 'ie >= 11'],
        },
        modules: false,
        useBuiltIns: false,
      },
    ],
    '@babel/preset-react',
  ],
  env: {
    test: {
      presets: [
        '@babel/preset-typescript',
        [
          '@babel/preset-env',
          {
            targets: {
              browsers: ['last 4 versions', 'ie >= 11'],
            },
            useBuiltIns: false,
          },
        ],
      ],
    },
  },
};
