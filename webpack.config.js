const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: { index: './src/js/index.js' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: [{ loader: 'html-loader', options: { minimize: true } }]
      },
      {
        test: /\.(png|jp?g|svg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: './img/[name].[ext]',
              limit: 10000
            }
          },
          {
            loader: 'img-loader'
          }
        ]
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
      // {
      //   test: /\.(png|svg|jpg|gif)$/,
      //   use: ['file-loader']
      // }
    ]
  },
  optimization: {
    minimizer: [new TerserPlugin({}), new OptimizeCSSAssetsPlugin({})]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      // inject: false,
      // hash: true,
      template: './src/index.html',
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/rgpd/aviso-legal.html',
      filename: './rgpd/aviso-legal.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/rgpd/politica-de-privacidad.html',
      filename: './rgpd/politica-de-privacidad.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/rgpd/politica-de-cookies.html',
      filename: './rgpd/politica-de-cookies.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].bundle.css',
      chunkFilename: '[id].css'
    }),
    new CopyWebpackPlugin([
      { from: 'src/js/lib/tarteaucitron', to: 'js/tarteaucitron' }
    ])
  ]
};
