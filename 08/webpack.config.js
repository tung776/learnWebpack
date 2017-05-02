var htmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
var webpack = require("webpack");

module.exports = {
    entry: {
        app: path.resolve(__dirname, './src/app.js'),
        contact: path.resolve(__dirname, './src/contact.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].budle.js'
    },
    module: {
        rules: [
        {
            test: /\.scss$/,
            exclude: /node_modules/,
            use: [ 'style-loader','css-loader', 'sass-loader']
        },
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: ['babel-loader'],
            // publicPath: path.resolve(__dirname, 'dist')
            
        },
        {
            test: /\.jsx?$/,
            use: [ 'babel-loader', ],
            exclude: /node_modules/
        },
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        stats: 'errors-only',
        open:true,
        hot: true,
  // Enable special support for Hot Module Replacement
  // Page is no longer updated, but a "webpackHotUpdate" message is sent to the content
  // Use "webpack/hot/dev-server" as additional module in your entry point
  // Note: this does _not_ add the `HotModuleReplacementPlugin` like the CLI option does. 
        // port:900
    },
    plugins: [
        new htmlWebpackPlugin({
            title: "my title",
            // minify: {
            //     collapseWhitespace: true
            // },
            hash: true,
            excludeChunks: ['contact'],
            template: "./src/mytemplate.ejs"
        }),
        new htmlWebpackPlugin({
            title: "my contact",
            // minify: {
            //     collapseWhitespace: true
            // },
            filename: "contact.html",
            hash: true,
            excludeChunks: ['app'],
            // Chunks: ['contact'],//Cách 2
            template: "./src/contact.ejs"
        }),
        new ExtractTextPlugin({
            filename: 'app.css',
            disable: true,
            allChunks: true
        }),
        new webpack.HotModuleReplacementPlugin(),
    // enable HMR globally

        new webpack.NamedModulesPlugin(),
    // prints more readable module names in the browser console on HMR updates
    ]
}