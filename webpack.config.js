var webpack = require('webpack');

module.exports = {
	entry: './src/index.js',
	output: {
		path: 'assets/',
		filename: 'bundle.min.js',
		// publicPath: '/docs/'
	},
	devServer: {
		inline: true,
		contentBase: './dist',
		port: 3000
	},
	devtool: 'eval-source-map',
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				loader: ['babel'],
				query: {
					presets: ['es2015', 'react', 'stage-0']
				}
			},
			{
				test: /\.css$/,
				loader: 'style!css!'
			}

		]
	}
}