var path = require('path');
var webpack = require('webpack');

module.exports = {

  entry: path.resolve(__dirname, 'src/index.js'),
  devtool: 'inline-source-map',

  output: {
    filename: 'bundle.js',
    publicPath: '/assets/',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, './src'),
        ],
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      }
    ]
  },

  resolve: {
    /*
      Enables absolute imports from the /src directory. Example:

        import {sortBy} from '/util'
    */
    roots: [
      path.resolve('./src'),
    ],
  },

};
