const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    export: './src/js/main.ts'
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.html$/i,
        use: [
          'file-loader?name=[name].[ext]',
          'extract-loader',
          {
            loader: 'html-loader',
            options: {
              attributes: false,
              minimize: false
            }
          }
        ],
        exclude: /node_modules/
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
    // new HtmlWebpackPlugin({
    //   inject: true,
    //   template: './src/index.html'
    // })
    new MiniCssExtractPlugin({
      filename: 'css/style.css',
      chunkFilename: 'css/[id].css'
    })
  ],
  externals: {
    p5: 'p5'
  },
  output: {
    path: __dirname + '/dist',
    filename: './js/main.js'
  }
};
