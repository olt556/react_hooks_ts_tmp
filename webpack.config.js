const path = require('path');

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
				loader: ['style-loader', 'css-loader?modules', 'postcss-loader', 'sass-loader'],
      		},
			{
				test: [/\.ts$/, /\.tsx$/, /\.js$/],
                loader: ['babel-loader', 'ts-loader'],
			},
		],
	},
}
