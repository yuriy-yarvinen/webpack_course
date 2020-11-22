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
  if (isProd) {
    config.minimize = true,
      config.minimizer = [
        new OptimizeCssAssetPlugin(),
        new TerserWebpackPlugin()
      ]
  }
  return config;
}

const filename = ext => isDev ? `[name].${ext}` : `[name].[hash].${ext}`;

const cssLoaders = extra => {

  let cssLoadersArray = [
    {
      loader: MiniCssExtractPlugin.loader,
      options: {
        publicPath: '../'
      }
    },
    {
      loader: 'css-loader',
    }
  ];

  if (extra) {
    cssLoadersArray.push({ loader: extra });
  }

  return cssLoadersArray;
};

const babelOptions = preset => {

  let babelOptions = {
    presets: [
      '@babel/preset-env',
    ],
    plugins: [
      '@babel/plugin-proposal-class-properties'
    ]
  };

  if (preset) {
    babelOptions.presets.push(preset);
  }

  return babelOptions;
};

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: {
    // if context not set
    // main: path.resolve(__dirname, './js/index.js'),
    // analytics: path.resolve(__dirname, './js/analytics.js'),
    main: ['@babel/polyfill', './js/index.jsx'],
    analytics: './js/analytics.ts',
  },
  // watch: true,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/' + filename('js'),
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
  devtool: isDev ? 'source-map' : '',
  module: {
    rules: [
      {
        test: /\.css$/,
        // if use style loader
        // use: ['style-loader', 'css-loader'],
        use: cssLoaders()
      },
      {
        test: /\.(scss|sacs)$/,
        use: cssLoaders('sass-loader')
      },
      {
        test: /\.less$/,
        use: cssLoaders('less-loader')
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: babelOptions()
        }
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: babelOptions('@babel/preset-typescript')
        }
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: babelOptions('@babel/preset-react')
        }
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
      minify: {
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
      filename: 'css/' + filename('css')
    })
  ]
};