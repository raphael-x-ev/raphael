var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var WebpackBuildNotifierPlugin = require('webpack-build-notifier');

module.exports = {
  mode: 'production',
  entry: {
    index: './src/index.jsx',
    another: './src/module_2.jsx'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].main.js',
    publicPath: '/'
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        default: false,
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor_app',
          chunks: 'all',
          minChunks: 2
        }
      }
    }
  },
  performance: {
    hints: false,
  },
  devtool: false,
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(s*)css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
            options: {
              includePaths: ['./node_modules'],
            },
          },
        ],
      },      
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    host: '192.168.1.20',
    port: '8888',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.scss'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Production",
      template: "./public/index.html",
    }),
    new WebpackBuildNotifierPlugin({
      title: "My Project Webpack Build",
    
      suppressSuccess: true
    }),
  ]
};