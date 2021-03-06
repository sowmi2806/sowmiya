var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
	template: __dirname + '/index.html',
	filename: 'index.html',
	inject: 'body'
})

module.exports = {
	entry: [
		'./helloworld.js'
	],
	output: {
		path: __dirname + '/release',
		filename: "index_bundle.js"
	},
	module: {
		loaders: [
			{test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
		]
	},
	plugins: [HtmlWebpackPluginConfig]
}