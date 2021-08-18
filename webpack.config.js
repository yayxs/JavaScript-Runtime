'use strict'

const path = require('path')
const HWP = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader/dist/index')
const MODE = 'development'

const ENTRY = path.resolve(__dirname, './src/main.js')

console.log('ENTRY', ENTRY)
module.exports = {
  mode: MODE,
  entry: ENTRY,
  // context: path.resolve(__dirname),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    port: 2022,
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.vue$/,
        use: ['vue-loader']
      }
    ]
  },
  resolve: {},
  devtool: 'source-map',
  plugins: [
    new HWP({
      template: path.resolve(__dirname, './index.html'),
      filename: 'index.html',
      title: 'vue-vast-table'
    }),
    new VueLoaderPlugin(),
    new CleanWebpackPlugin()
  ]
}
