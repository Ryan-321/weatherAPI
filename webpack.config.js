var HtmlWebpackPlugin = require('html-webpack-plugin')
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  entry: [
    './app/index.js'
  ],
  output: {
    path: __dirname + '/dist',
    filename: 'index_bundle.js'
  },
  	resolve: {
    extensions: [' ', '.js', '.jsx', '.json']
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: false
  },
  module: {
		preLoaders: [
			{
				test: /\.js?$/,
				loader: "eslint-loader",
				exclude: /node_modules/
			}
		],
    loaders: [
      { test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader' }  // Configure Babel in .babelrc file
    ]
  },
  plugins: [HTMLWebpackPluginConfig]
}
