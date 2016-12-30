var webpack = require('webpack');
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");

module.exports = {
  entry: './index2.js',
  output: {
    filename: './bundle.js'
  },
  devtool: 'source-map',//开启debug-map
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  externals: {//分离第三方库
        '$': 'jquery'
  },
  module: {
      loaders: [
          {
              test: /\.jsx?$/,
              exclude: /(node_modules|bower_components)/,
              loader: 'babel', // 'babel-loader' is also a legal name to reference
              query: {
                  presets: ['react', 'es2015']
              }
          }
      ]
  },
  plugins: [
    new CommonsChunkPlugin('init.js'),
  ]
};
