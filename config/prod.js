const merge = require('webpack-merge')
const baseConfig = require('./base')
const { peerDependencies } = require('../package.json')

module.exports = merge(baseConfig, {
  output: {
    filename: 'discrete-ui.js',
    libraryTarget: 'commonjs'
  },
  mode: 'production',
  externals: Object.keys(peerDependencies),
  devtool: 'source-map'
})
