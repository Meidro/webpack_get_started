const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
   mode: 'development',
   entry: {
      main: './src/index.js',
   },
   output: {
      filename: '[name].[contenthash].js',
      path: path.resolve(__dirname, 'dist'),
   },
   resolve: {
      extensions: ['.js'],
   },
   plugins: [
      new HtmlWebpackPlugin({
         template: './src/index.html',
      }),
      new CleanWebpackPlugin(),
   ],
   module: {
      rules: [
         {
            test: /\.s[ac]ss$/,
            use: ['style-loader', 'css-loader', 'sass-loader'],
         },
         {
            test: /\.(png|jpg|svg|jpeg|gif)$/,
            use: ['file-loader'],
         },
         {
            test: /\.(ttf|woff|woff2|eot|otf)$/,
            use: ['file-loader'],
         },
      ],
   },
}
