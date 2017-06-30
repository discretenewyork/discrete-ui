const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const SRC_DIR = path.resolve('./src')
const BUILD_DIR = path.resolve('./dist')
const NODE_MODULES = path.resolve('./node_modules')

module.exports = {
  entry: path.join(SRC_DIR, 'demo/index.js'),
  output: {
    path: BUILD_DIR,
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
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { importLoaders: 1, modules: true }
          },
          {
            loader: 'postcss-loader',
            options: {
              config: { path: path.resolve('./postcss.config.js') }
            }
          }
        ]
      },
      {
        test: /\.svg$/,
        use: [ 'svg-sprite-loader', 'svgo-loader' ]
      }
    ]
  },
  resolve: {
    modules: [NODE_MODULES, SRC_DIR],
    extensions: ['.js']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(SRC_DIR, 'demo/index.html'),
      inject: 'body'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    port: 8080,
    contentBase: BUILD_DIR,
    inline: true,
    hot: true,
    overlay: true,
    stats: { chunks: false }
  },
  target: 'web'
}
