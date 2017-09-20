const path = require('path')
const webpack = require('webpack')
const MinifyPlugin = require('babel-minify-webpack-plugin')
const { dir } = require('./constants')
const { peerDependencies } = require('../package.json')

module.exports = {
  entry: path.join(dir.src, 'index.js'),
  output: {
    path: dir.dist,
    filename: 'discrete-ui.js',
    library: 'discreteUI'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            ['env', { modules: false }],
            'react',
            'stage-0'
          ]
        }
      },
      {
        test: /\.svg$/,
        use: ['svg-sprite-loader', 'svgo-loader']
      }
    ]
  },
  resolve: {
    modules: [dir.node_modules],
    extensions: ['.js']
  },
  plugins: [
    new MinifyPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    })
  ],
  externals: Object.keys(peerDependencies),
  devtool: 'source-map',
  target: 'web'
}
