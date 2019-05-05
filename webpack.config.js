const HTMLWebPackPlugin = require("html-webpack-plugin");
var WebpackBuildNotifierPlugin = require('webpack-build-notifier');

module.exports = {
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
  plugins: [
    new HTMLWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html"
    }),
    new WebpackBuildNotifierPlugin({
      title: "My Project Webpack Build",
    
      suppressSuccess: true
    })    
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.scss'],
  },
  devServer: {
    host: '192.168.1.20',
    port: 8888,
    // hot: true,
    // inline: true,
    // publicPath: '/static/scripts/',
    // contentBase: 'src/dist/',
    // watchContentBase: true,
    // historyApiFallback: {
    //   rewrites: [
    //     { from: /^\/pos\/.*$/, to: '/pos/' },
    //   ],
    // },
  },
};