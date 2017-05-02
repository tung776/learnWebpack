const webpack = require('webpack');
const path = require('path');
const commonConfig= require('./webpack.common');
// const productionConfig = require('./webpack.production');
const webpackMerge = require('webpack-merge');


// var AppCachePlugin = require('appcache-webpack-plugin');

module.exports = webpackMerge(commonConfig, {
    output:{
        path: path.resolve('dist'),
        filename: '[name].bundle.js'
    },
    plugins:[
        new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}}),
        new webpack.optimize.AggressiveMergingPlugin(),
        new webpack.NoErrorsPlugin(),
        // new AppCachePlugin({
        //     cache: ['someOtherAsset.jpg'],
        //     network: null,  // No network access allowed!
        //     fallback: ['failwhale.jpg'],
        //     settings: ['prefer-online'],
        //     exclude: ['file.txt', /.*\.js$/],  // Exclude file.txt and all .js files
        //     output: 'my-manifest.appcache'
        // }),

        // new webpack.ProvidePlugin({
        //     $: "jquery"
        // }),


    ]
});