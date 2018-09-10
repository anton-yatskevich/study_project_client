const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	devtool: 'inline-source-map',
	entry: './src/js/index.js',
	output: {
		path: path.join(__dirname, 'dist/'),
		filename: 'bundle.js',
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel',
			},
			{
				test: /\.scss$/,
				loader: 'style!css!sass',
			},
			{
				test: /\.html$/,
				loader: 'raw-loader',
			},
		],
		postLoaders: [
			{
				test: /\.js$/,
				exclude: [/node_modules/, /\.spec\.js/],
				loader: 'istanbul-instrumenter',
			},
		],
	},
	plugins: [
		new HtmlWebPackPlugin({
			inject: true,
			template: 'src/index.html',
			filename: 'index.html',
		}),
	],
};
