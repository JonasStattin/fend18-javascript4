const merge = require('webpack-merge');
const conf = require('./webpack.config.js');

module.exports = merge(conf, {
  output: {
    publicPath: './',
  },

  optimization: {
    minimize: true
  },

  mode: 'production',
});
