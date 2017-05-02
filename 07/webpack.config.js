var htmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

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
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'sass-loader'],
                publicPath: path.resolve(__dirname, 'dist')
            })
        },
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: ['babel-loader'],
            // publicPath: path.resolve(__dirname, 'dist')
            
        },
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        stats: 'errors-only',
        open:true,
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
        new ExtractTextPlugin("app.css")
    ]
}