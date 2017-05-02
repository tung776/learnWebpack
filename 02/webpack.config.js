var htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/app.js',
    output: {
        path: 'dist',
        filename: 'app.budle.js'
    },
    plugins: [
        new htmlWebpackPlugin({
            title: "my title",
            minify: {
                collapseWhitespace: true
            },
            hash: true,
            template: "./src/mytemplate.ejs"
        })
    ]
}