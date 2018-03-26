const merge = require('webpack-merge')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const baseConfig = require('./base')
const { DEMO } = require('./constants')

module.exports = merge(baseConfig, {
  entry: path.join(DEMO, 'index.js'),
  output: {
    filename: 'demo.js',
    libraryTarget: 'var'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(DEMO, 'index.html'),
      inject: 'body'
    })
  ],
  mode: 'development',
  devtool: 'eval-source-map'
})
