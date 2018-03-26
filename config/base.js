const path = require('path')
const SpritePlugin = require('svg-sprite-loader/plugin')
const { DIST, SRC, NODE_MODULES } = require('./constants')

module.exports = {
  entry: path.join(SRC, 'index.js'),
  output: { path: DIST },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            ['env', {
              modules: false,
              targets: ['last 2 versions']
            }],
            'stage-0',
            'react'
          ]
        }
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-sprite-loader',
            options: { extract: true }
          },
          {
            loader: 'svgo-loader',
            options: {
              plugins: [{ removeXMLNS: true }]
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new SpritePlugin()
  ],
  resolve: {
    modules: [NODE_MODULES],
    extensions: ['.js']
  },
  target: 'web'
}
