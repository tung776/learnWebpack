var htmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, './src/app.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.budle.js'
    },
    module: {
        rules: [
        {
            test: /\.scss$/,
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
            template: "./src/mytemplate.ejs"
        }),
        new ExtractTextPlugin("app.css")
    ]
}