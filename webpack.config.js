const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const mode = "development";

module.exports = {
	entry: {
		main: path.resolve(__dirname, "./src/index.js")
	},
	mode,
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js"
	},
	devServer: {
		hot: true
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./index.html"
		}),
	],
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/i,
				loader: "babel-loader",
			},
			{
				test: /\.(html)$/,
				use: ['html-loader']
			},
			{
				test: /\.(s[ac]|c)ss$/i,
				use: [
					'style-loader',
					'css-loader',
					'postcss-loader',
					'sass-loader'
				]
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
				type: "asset",
			},
		],
	},
};
