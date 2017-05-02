var htmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = {
    entry: path.resolve(_dirname, './src/app.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.budle.js'
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'sass-loader'],
                publicPath: '/dist'
            })
        }]
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