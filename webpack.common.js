const Html = require('html-webpack-plugin');

module.exports = {
  entry        : './src/index.ts',
  optimization : {
    usedExports : true,
  },
  output       : {
    filename : "[hash].bundle.js",
    path     : __dirname + "/dist",
  },
  plugins      : [
    new Html({
      template : './src/index.html',
      minify   : {
        removeComments            : true,
        removeEmptyAttributes     : true,
        removeOptionalTags        : true,
        collapseBooleanAttributes : true,
        collapseWhitespace        : true,
      },
    }),
  ],
  resolve      : {
    extensions : [ '.tsx', '.ts', '.js' ],
  },
  module       : {
    rules : [
      {
        test : /\.(png|jpg|jpeg|gif|svg)$/,
        use  : [
          {
            loader : "url-loader",
          },
        ],
      },
      {
        test    : /\.tsx?$/,
        use     : 'ts-loader',
        exclude : /node_modules/,
      },
      {
        test : /\.scss$/,
        use  : [
          {
            loader : "style-loader",
          }, {
            loader : "css-loader",
          }, {
            loader : "sass-loader",
          },
        ],
      },
      {
        test : /\.css$/,
        use  : [
          {
            loader : "style-loader",
          }, {
            loader : "css-loader",
          },
        ],
      },

    ],
  },
};
