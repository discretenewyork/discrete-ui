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
    libraryTarget: 'commonjs'
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
        use: [
          { loader: 'svg-sprite-loader' },
          {
            loader: 'svgo-loader',
            options: {
              plugins: [ { removeXMLNS: true } ]
            }
          }
        ]
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
  target: 'web'
}
