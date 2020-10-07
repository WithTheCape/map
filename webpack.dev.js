const merge = require('webpack-merge');

module.exports = merge(require('./webpack.common'), {
  mode    : process.env.NODE_ENV || 'development',
  devtool : 'inline-source-map',
  // devtool : 'inline-source-map',
});
