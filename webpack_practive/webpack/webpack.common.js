const path = require('path');
const webpack = require('webpack');
const extractTextWebpackPlugin = require('extract-text-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './src/app.js',
        vendor: './src/vendor.js'
    },
    output: {
        path: path.resolve('dist'),
        filename: '[name].bundle.js'
    },
    
    module: {
        rules:[
        {
            test: /\.scss$/,
            use: extractTextWebpackPlugin.extract({
                fallback: 'style-loader',
                loader: ['css-loader', 'sass-loader'],
                publicPath: path.resolve(__dirname, 'dist')
            })
            
        },
        {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader",
            // publicPath: path.resolve('dist')+ "/js"
        },
        ]
        
    },
    devServer: {
        contentBase: path.resolve( "dist"),
        compress: true,
        stats: 'errors-only',
        open:true,
        hot: true,
    },
    plugins: [
        new htmlWebpackPlugin({
            include:['app', 'vendor'],
            template: path.resolve('./src/index.template.ejs'),
            filename: 'index.html'
        }),
        new extractTextWebpackPlugin({
            filename: 'app.css',
            allChunks: true,
            // disable: process.env.APP_ENV == 'prodcution'
        }),
         new webpack.HotModuleReplacementPlugin(),
    ]
}