const path = require('path')
const abs = (...args) => path.resolve(__dirname, ...args)
const webpack = require('webpack')

module.exports = {

  devtool: 'source-map',
  devServer: { historyApiFallback: true },

  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        use: ['source-map-loader'],
        include: [
          abs('node_modules/stateful-router'),
        ],
      },
      {
        test: /\.js$/,
        include: [abs('./src')],
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

  plugins: [
    new webpack.EnvironmentPlugin({NODE_ENV: 'development'}),
  ],

  resolve: {
    modules: [
      abs('src'),  // Enable absolute imports relative to the src/ directory.
      abs('node_modules'),
    ],
  },

}
