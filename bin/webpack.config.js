const webpack = require('webpack');

module.exports = {
	entry: ['babel-polyfill', './React/index.js'],
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			},
			{
				test: /\.(jpe?g|gif|png|svg)$/i,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 10000
						}
					}
				]
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
		]
	},
	resolve: {
		extensions: ['*', '.js', '.jsx']
	},
	output: {
		path: __dirname + '/public',
		publicPath: '/',
		filename: 'bundle.js'
	},
	devServer: {
		proxy: {
			'/api': 'http://localhost:3000',
			changeOrigin: true
		},
		contentBase: './public',
		hot: true
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	]
};