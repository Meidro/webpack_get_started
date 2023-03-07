const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
   mode: 'development',
   entry: {
      main: './src/index.js',
   },
   output: {
      filename: '[name].[contenthash].js',
      path: path.resolve(__dirname, 'dist'),
   },
   plugins: [
      new HtmlWebpackPlugin({
         template: './src/index.html',
      }),
      new CleanWebpackPlugin(),
   ],
};
