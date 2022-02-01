const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')

module.exports = {
	mode: 'development',
	entry: './src/index.tsx',
	devtool: 'inline-source-map',
	watchOptions: {
		aggregateTimeout: 600,
		ignored: /node_modules/
	},
	module: {
		rules: [
			{
				test: /\.t(sx|s)?$/,
				exclude: /node_modules/,
				use: [
					{ loader: 'ts-loader' },
					{
						loader: 'babel-loader',
						options: {
							presets: [
								['@babel/preset-env', { useBuiltIns: 'usage', corejs: 3 }],
								'@babel/preset-react',
								'@babel/preset-typescript'
							]
						}
					}
				]
			},
			{
				test: /\.(scss|css)$/i,
				exclude: /\.module\.scss$/i,
				use: [
					{
						loader: MiniCssExtractPlugin.loader
					},
					{
						loader: 'css-loader',
						options: {
							url: true,
							importLoaders: 1,
							modules: {
								mode: 'icss'
							}
						}
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true,
							implementation: require('sass')
						}
					}
				]
			},
			{
				test: /\.module\.scss$/i,
				use: [
					{
						loader: MiniCssExtractPlugin.loader
					},
					{
						loader: 'css-loader',
						options: {
							url: true,
							importLoaders: 1,
							modules: {
								mode: 'local',
								localIdentName: '[path][name]__[local]--[hash:base64:5]'
							}
						}
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true,
							implementation: require('sass')
						}
					}
				]
			},
			{
				test: /\.(?:ico|png|jpe?g|gif)$/i,
				type: 'asset/resource'
			},
			{
				test: /\.(svg|eot|ttf|woff|woff2)$/i,
				type: 'asset/inline'
			}
		]
	},
	resolve: {
		modules: ['node_modules'],
		extensions: ['.tsx', '.ts', '.js', '.jsx'],
		alias: {
			'~': path.resolve(__dirname, 'src/'),
		}
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
		clean: true,
		assetModuleFilename: '[name][ext][query]'
	},
	devServer: {
		static: [
			{
				directory: path.join(__dirname, 'dist'),
			}
		],
		compress: true,
		port: 3000
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
			filename: 'index.html'
		}),
		new ESLintPlugin({ extensions: ['.ts', '.tsx'], exclude: 'node_modules' }),
		new MiniCssExtractPlugin({ filename: 'style.css' }),
	]
}
