var htmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/app.js',
    output: {
        path: 'dist',
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