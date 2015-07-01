var webpack = require('webpack');

module.exports = {
  entry: './app/app.js',
  output: {
    path: './build/',
    filename: 'app.js'
  },
  plugins: [],
  module: {},
  devServer: {
    contentBase: './'
  }
};

/*
 * Use via
 *    ./node_modules/webpack/bin/webpack.js --progress --colors --watch
 */

/*
 * relevant references for extension:
 * https://github.com/shprink/angular1.4-ES6-material-webpack-boilerplate/blob/master/webpack.config.js
 */
