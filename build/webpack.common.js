const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
module.exports = {
	entry: {
		main: './src/common/js/index.js'
	},
	module: {
		rules: [
		{
			test: /\.js$/,
			exclude: /node_modules/,
			loader:'babel-loader'
		},
		{
			test: /\.(jpg|png|gif)$/,
			use:{
				loader: 'url-loader',
				options: {
					name: '[name]_[hash].[ext]',
					outputPath: 'images/',
					limit: 10240
				}
			}
		},
		{
			test: /\.(eot|svg|ttf|woff|woff2)$/,
			use:{
				loader:'file-loader',
				options:{
					name:'[name]_[hash].[ext]',
					outputPath:'font/'
				}
			},
		},{
			test: /\.styl$/,
			use:[
				'style-loader',
				{
					loader:'css-loader',
					options:{
						sourceMap:true,
						importLoaders:2
					}
				},
				'postcss-loader',
				'stylus-loader'
			]
		}]
	},
	plugins:[
		new HtmlWebpackPlugin({
			template:'src/index.html'
		}),
		new CleanWebpackPlugin()
	],
	// optimization:{
	// 	splitChunks:{ 
	// 		chunks:'all'
	// 	}
	// },	
	// optimization: {
	//     splitChunks: {
	//       chunks: 'all',
	//       minSize: 20000,
	//       minRemainingSize: 0,
	//       maxSize: 0,
	//       minChunks: 1,
	//       maxAsyncRequests: 30,
	//       maxInitialRequests: 30,
	//       automaticNameDelimiter: '~',
	//       enforceSizeThreshold: 50000,
	//       cacheGroups: {
	//         defaultVendors: {
	//           test: /[\\/]node_modules[\\/]/,
	//           priority: -10
	//         },
	//         default: {
	//           minChunks: 2,
	//           priority: -20,
	//           reuseExistingChunk: true
	//         }
	//       }
	//     }
	// },
	output: {
		// publicPath:"./",
		filename: '[name].js',
		path: path.resolve(__dirname, '../dist')
	}
}