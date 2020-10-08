const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base')
const devConfig = require('./webpack.dev')
const prodConfig = require('./webpack.prod')

module.exports = (env, argv) => {
  const config = argv.mode === 'development' ? devConfig : prodConfig
  return merge(baseConfig, config)
}

const path = require('path')
 
module.exports = {
    entry: path.join(__dirname,'../src/main.js'), //入口文件
    output: {
        filename:'bundle.js',
        path:path.join(__dirname,'')
    },
    module:{
        rules:[
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
              test: /\.css$/,
              use: [
                'style-loader',
                'css-loader'
              ]
            }
        ]
    },
    resolve: {
      extensions: ['.js', '.css', '.json']
  } 
}

