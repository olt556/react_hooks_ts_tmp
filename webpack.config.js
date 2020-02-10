const path = require('path');
const BabelMinifyPlugin = require("babel-minify-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	mode: 'development',
	entry: path.resolve(__dirname, 'src/Main.tsx'),
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	devServer: {
		contentBase: path.resolve(__dirname, 'dist'),
		port: 8080,
		historyApiFallback: true, // without no routing
	},
	resolve: {
		modules: [path.resolve(__dirname, 'src'), path.resolve(__dirname, 'node_modules')],
		extensions: ['.ts', '.tsx', '.js']
	},
	module: {
		rules: [
			{
                test: [/\.css$/, /\.scss$/],
                exclude: /node_modules/,
				loader: [MiniCssExtractPlugin.loader, 'css-loader?modules', 'postcss-loader', 'sass-loader'],
      		},
			{
				test: [/\.ts$/, /\.tsx$/, /\.js$/],
                loader: ['babel-loader', 'ts-loader'],
			},
		],
	},
	plugins: [
		new BabelMinifyPlugin(),
		new HtmlWebpackPlugin({
			publicPath: 'dist',
			filename: 'index.html',
			template: 'src/html/index.html',
		}),
		new MiniCssExtractPlugin({
			publicPath: 'dist',
			filename: 'app.css',
		}),
    ],
}
