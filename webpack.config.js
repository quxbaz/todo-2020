const path = require('path')
const absolute = (...args) => path.resolve(__dirname, ...args)

module.exports = {

  entry: absolute('src/index.js'),
  output: {
    filename: 'bundle.js',
    publicPath: '/assets/',
  },

  devtool: 'source-map',  // 'source-map', 'eval'
  devServer: {
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        use: ['source-map-loader'],
        include: [
          absolute('node_modules/stateful-router'),
        ],
      },
      {
        test: /\.js$/,
        include: [absolute('./src')],
        use: ['babel-loader'],
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
      absolute('src'),
      'node_modules',
    ],
  },

}
