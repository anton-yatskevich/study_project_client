const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/js/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/dist',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: {
					loader: 'babel-loader',
					options: { presets: ['env'] },
				},
			},
			{
				test: /\.scss$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
					},
					'css-loader',
					'sass-loader',
				],
			},
			{
                test: /\.html$/,
                loader: 'html-loader',
                // options: {
                //   	attrs: ['link:href'],
                // },
            }
		],
	},
	plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
			filename: "./index.html",
			inject: 'head'
        }),
        new MiniCssExtractPlugin({
            filename: 'index.css',
            allChunks: true,
        })
    ],
    devtool: 'source-map'
};
