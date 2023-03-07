const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const babelOptions = (preset) => {
   const opts = {
      loader: 'babel-loader',
      options: {
         presets: ['@babel/preset-env'],
      },
   };

   if (preset) {
      opts.options.presets.push(preset);
   }

   return opts;
};

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
      extensions: ['.js', '.ts', '.json'],
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
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
         },
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
         {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: babelOptions(),
         },
         {
            test: /\.ts$/,
            exclude: /node_modules/,
            use: babelOptions('@babel/preset-typescript'),
         },
      ],
   },
};
