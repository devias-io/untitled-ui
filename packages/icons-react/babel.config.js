module.exports = function (api) {
  const useESModules = api.env('esm');

  const presets = [
    [
      '@babel/preset-env',
      {
        browserslistEnv: process.env.BABEL_ENV || process.env.NODE_ENV,
        modules: useESModules ? false : 'commonjs',
        shippedProposals: useESModules
      }
    ],
    [
      '@babel/preset-react',
      {
        runtime: 'automatic'
      }
    ],
    '@babel/preset-typescript'
  ];

  const plugins = [
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    ['@babel/plugin-proposal-private-methods', { loose: true }],
    ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
    ['@babel/plugin-proposal-object-rest-spread', { loose: true }],
    [
      '@babel/plugin-transform-runtime',
      {
        useESModules
      }
    ]
  ];

  return {
    presets,
    plugins
  };
};
