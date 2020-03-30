const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    export: './src/js/main.ts'
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      // {
      //   test: /\.html$/i,
      //   loader: 'html-loader'
      // },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.css']
  },
  plugins: [
    // Webpack plugin for clean up on rebuids
    new CleanWebpackPlugin(),
    // Set a HTML template to be generated with scripts imported
    new HtmlWebpackPlugin({
      inject: true,
      template: './src/index.html'
    })
  ],
  output: {
    path: __dirname + '/dist',
    filename: './js/main.bundle.js'
  }
};
