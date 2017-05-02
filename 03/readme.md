Webpack Css
-----------------------------------------------------

npm install css-loader --save-dev
hoặc

yarn add css-loader --save-dev

npm install --save-dev style-loader
npm install --save-dev sass-loader node-sass

https://github.com/webpack-contrib/extract-text-webpack-plugin

const ExtractTextPlugin = require('extract-text-webpack-plugin');

// Create multiple instances
const extractCSS = new ExtractTextPlugin('stylesheets/[name]-one.css');
const extractLESS = new ExtractTextPlugin('stylesheets/[name]-two.css');

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: extractCSS.extract([ 'css-loader', 'postcss-loader' ])
      },
      {
        test: /\.less$/i,
        use: extractLESS.extract([ 'css-loader', 'less-loader' ])
      },
    ]
  },
  plugins: [
    extractCSS,
    extractLESS
  ]
};

