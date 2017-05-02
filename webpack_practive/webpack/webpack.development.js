const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common');

module.exports = webpackMerge(commonConfig, {
    output: {
        path: path.resolve('dist'),
        filename : '[name].bundle.js'
    }
})