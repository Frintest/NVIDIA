const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// подстраховка **(рабочая)**
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const {
	BundleAnalyzerPlugin
} = require('webpack-bundle-analyzer');

module.exports = {
	mode: 'development',
	context: path.resolve(__dirname, 'src/public'),
	entry: {
		index: {
			import: './index.js',
			filename: 'js/[name].js'
		}
	},
	output: {
		path: path.resolve(__dirname, 'dist/public'),
		clean: true
	},
	devServer: {
		port: 3030
	},
	optimization: {
		minimizer: [
			new CssMinimizerPlugin(),
			new TerserPlugin()
		]
	},
	module: {
		rules: [
			// * ----- css -----
			{
				test: /\.(css)$/i,
				use: [MiniCssExtractPlugin.loader, 'css-loader']
			},

			// * ----- sass/scss -----
			{
				test: /\.(s[ac]ss)$/i,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
			},

			// * ----- fonts -----
			{
				test: /\.(woff2|woff|svg|ttf|otf|eot)$/i,
				type: 'asset/resource',
				generator: {
					filename: 'fonts/[name][ext]'
				}
			},

			// * ----- images -----
			{
				test: /\.(png|jpe?g|webp|svg|gif)$/i,
				type: 'asset/resource',
				exclude: '/fonts/',
				generator: {
					filename: 'img/[name][ext]'
				}
			},

			// * ----- video -----
			{
				test: /\.(mp4)$/i,
				type: 'asset/resource',
				generator: {
					filename: 'video/[name][ext]'
				}
			},

			// * ----- audio -----
			{
				test: /\.(mp3)$/i,
				type: 'asset/resource',
				generator: {
					filename: 'audio/[name][ext]'
				}
			},

			// * ----- json -----
			{
				test: /\.(json)$/i,
				type: 'asset/resource',
				generator: {
					filename: 'json/[name][ext]'
				}
			},

			// * ----- gltf/glb -----
			{
				test: /\.(gltf|glb)$/i,
				type: 'asset/resource',
				generator: {
					filename: 'models/[name][ext]'
				}
			},
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './index.html',
			filename: 'index.html',
			chunks: ['index']
		}),
		new MiniCssExtractPlugin({
			filename: 'css/[name].css'
		}),
		// new BundleAnalyzerPlugin()
	]
};