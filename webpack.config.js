const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const optimization = () => {
  const config = {
    splitChunks: {
      chunks: 'all'
    }
  } 
  if(isProd){
    config.minimize = true,
    config.minimizer = [
      new OptimizeCssAssetPlugin(),
      new TerserWebpackPlugin()
    ]
  }
  return config;
}

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: {
    // if context not set
    // main: path.resolve(__dirname, './js/index.js'),
    // analytics: path.resolve(__dirname, './js/analytics.js'),
    main: './js/index.js',
    analytics: './js/analytics.js',
  },
  // watch: true,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].[contenthash].js',
  },
  resolve: {
    // чтобы не указыват расширения
    extensions: ['.js', '.json'],
    // пути
    alias: {
      '@models': path.resolve(__dirname, 'src/models')
    }
  },
  // выносит скрипты которые были подключены в разные точки входа, на примере jquery
  optimization: optimization(),

  module: {
    rules: [
      {
        test: /\.css$/,
        // if use style loader
        // use: ['style-loader', 'css-loader'],
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../'
            }
          },
          {
            loader: 'css-loader'
          }]
      },
      {
        test: /\.scss$/,
        // if use style loader
        // use: ['style-loader', 'css-loader'],
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../'
            }
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: ['file-loader']
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/,
        use: ['file-loader']
      },
      {
        test: /\.xml$/,
        use: ['xml-loader']
      },
      {
        test: /\.csv$/,
        use: ['csv-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      // template: './src/index.html',
      template: './index.html',
      minify:{
        collapseWhitespace: isProd
      }
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [{
        from: path.resolve(__dirname, 'src/assets/images/favicon.ico'),
        to: path.resolve(__dirname, 'dist/images')
      }]
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css'
    })
  ]
};