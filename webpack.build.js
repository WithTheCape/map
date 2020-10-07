const Clean = require('clean-webpack-plugin');
const merge = require('webpack-merge');

module.exports = merge(require('./webpack.common'), {
  mode    : process.env.NODE_ENV || 'production',
  output  : {
    filename : "[hash].bundle.js",
    path     : __dirname + "/dist",
  },

  plugins : [
    new Clean([ './dist' ]),
  ],
});
