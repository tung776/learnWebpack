const webpack= require('webpack');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common');
const path = require('path');

module.exports = webpackMerge(commonConfig, {
    output: {
        path: path.resolve('dist'),
        filename: '[name].bundle.js'
    }
})