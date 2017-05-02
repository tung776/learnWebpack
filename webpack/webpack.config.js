const path = require('path');
module.exports = {
    entry: './app',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {presets:'es2015'}
            }
            ]
    },
    devServer: {
        port: process.env.PORT,
        contentBase:path.resolve(__dirname, 'build'),
        inline:true
    }
}