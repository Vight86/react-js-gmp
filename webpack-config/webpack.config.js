const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base.config');
const devConfig = require('./webpack.dev.config');
const prodConfig = require('./webpack.prod.config');

module.exports = (env) => {
  switch (env.mode) {
    case 'development':
      return merge(baseConfig, devConfig);
    case 'production':
    default:
      return merge(baseConfig, prodConfig);
  }
};
