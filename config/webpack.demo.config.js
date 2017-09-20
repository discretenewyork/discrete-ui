const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const dir = require('./constants').dir

module.exports = {
  entry: path.join(dir.demo, 'index.js'),
  output: {
    path: dir.dist,
    filename: 'demo.js',
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
    new HtmlWebpackPlugin({
      template: path.join(dir.demo, 'index.html'),
      inject: 'body'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    port: 8080,
    contentBase: dir.dist,
    inline: true,
    hot: true,
    overlay: true,
    stats: { chunks: false }
  },
  target: 'web'
}
