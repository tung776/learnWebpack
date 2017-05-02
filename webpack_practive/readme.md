###     bước [1]: Cài đặt các module nodejs cần thiết:        ###

webpack, webpack-merge, webpack-dev-server
babel, babel-loader, babel-preset-es2015, babel-preset-react
cross-env
exact-text-webpack-plugin, css-loader, sass-loader, node-sass, style-loader
rimraf
react, react-dom
```
npm i --save-dev webpack webpack-dev-server webpack-merge cross-env 
                react react-dom babel babel-loader babel-preset-es2015
                babel-preset-react extract-text-webpack-plugin
                html-webpack-plugin css-loader sass-loader node-sass style-loader
                rimraf
```

###     [2]. thêm dòng mã sau vào package.json:    ###
```
scripts: {
    "dev": 'webpack-dev-server',
    "prod": 'npm run clear && cross-env APP_ENV=production webpack -d',
    "clear": ' rimraf ./dist/* '
}
```
###     [3]. tạo file .babelrc với nội dung như sau:      ###
```
{
    "presets": ["es2015", "react"]
}
```
###     [4]. tạo webpack.config.js với nội dung sau   ###
```
switch(process.env.APP_ENV){
    case "production":
        require("./webpack/webpack.production");
    break;
    default
        require("./webpack/webpack.development");
    break;
}
```

###     [5]. Tạo thư mục webpack và file webpack.production.js với nội dung sau: ###
```
const commonConfig = require('./webpack.common.js');
const path = require("path");
const webpack = require("webpack");
const webpackMerge = require("webpack-merge");

module.exports = webpackMerge(commonConfig, {
    output: {
        path: path.resolve("dist");
        filename: "[name].bundle.js"
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}}),
        new webpack.optimize.AggressiveMergingPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
    ]
});
```
###     [6]. Tạo file mới với tên là webpack.development.js ###
```
const path = require("path");
const webpack = require("webpack");
const webpackMerge= require("webpack-merge");
const commonConfig = require("./webpack/webpack.common..js");

module.exports = webpackMerge(commonConfig, {
    output: {
        path: path.resolve("dist");
        filename: "[name].bundle.js"
    }
});
```
### [7]. Tạo file mới webpack.common.js       ##
```
const path = require("path");
const webpack = require("webpack");
const extractTextWebpackPlugin = require("extract-text-webpack-plugin");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        app: path.resolve("./src/app"),
        vendor: path.resolve("./src/vendor"),
    },
    output: {
        path: path.resolve("dist"),
        filename: "[name].bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: exactTextWebpackPlugin({
                    fallback: "style-loader",
                    loader: ["css-loader", "sass-loader"]
                })
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: "babel-loader"
            }
        ]
    },
    devServer: {
        contentBase: path.resolve("dist"),
        hot: true,
        open: true
    },
    plugins: [
        new htmlWebpackPlugin({
            templcate: path.resolve("src") + index.template.ejs,
            title: "new title",
            include: ["app", "vendor"]
        }),
        new extractTextWebpackPlugin({
            filename: "app.css"
        })
    ]
}
```
###     [8]. tạo file ./src/app.js (đăng ký các file js đầu vào cho webpack)  ###
```
require("server.js");
require("models.js");

...
```
###     [9]. tạo file vendor.js ###
```
import react from "react";
import reactDom from "react-dom";
require("/app.scss");

.....
```