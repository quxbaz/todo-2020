var path = require('path');
var webpack = require('webpack');

module.exports = {

  entry: path.resolve(__dirname, 'src/index.js'),

  // devtool: 'source-map',
  devtool: 'inline-source-map',
  // devtool: 'eval',

  devServer: {
    historyApiFallback: true,
  },

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
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader?{"modules": {"localIdentName": "[path][name]__[local]"}}',
        ],
      },
    ],
  },

  resolve: {
    modules: [
      // Enables absolute imports relative to the src/ directory.
      path.resolve(__dirname, 'src'),
      'node_modules',
    ],
  },

};
