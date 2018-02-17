var webpack = require('webpack');

module.exports = {
	entry: './src/index.js',
	output: {
		// path: 'dist/assets',
		path: __dirname,
		filename: 'bundle.min.js',
		//publicPath: '/assets/'
		publicPath: __dirname
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