const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
module.exports= webpackMerge(commonConfig, {
    output: {
        path: path.resolve('dist'),
        filename: '[name].bundle.js'
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}}),
        new webpack.optimize.AggressiveMergingPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
    ]
})