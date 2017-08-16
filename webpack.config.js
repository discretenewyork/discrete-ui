const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const dist = path.resolve('./dist')
const node_modules = path.resolve('./node_modules')

module.exports = {
  entry: path.resolve('demo/index.js'),
  output: {
    path: dist,
    filename: '[name].[hash:8].js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: { presets: ['es2015', 'react', 'stage-0'] }
      },
      {
        test: /\.svg$/,
        use: ['svg-sprite-loader', 'svgo-loader']
      }
    ]
  },
  resolve: {
    modules: [node_modules],
    extensions: ['.js']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('./demo/index.html'),
      inject: 'body'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    port: 8080,
    contentBase: dist,
    inline: true,
    hot: true,
    overlay: true,
    stats: { chunks: false }
  },
  target: 'web'
}
