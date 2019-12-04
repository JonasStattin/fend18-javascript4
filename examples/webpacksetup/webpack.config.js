const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',

  output: {
    publicPath: '/',
    path: path.resolve(__dirname, './public'),
    filename: 'main.js',
  },

  optimization: {
    minimize: false
  },

  mode: 'development',

  devtool: 'source-map',

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          }
        ],
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader'
        }
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html')
    }),
  ],
};
