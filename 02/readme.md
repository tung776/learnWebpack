bổ xung thêm plugin html-webpack-plugin
yarn add html-webpack-plugin -dev
chi tiết tham khảo tại:
https://webpack.js.org/plugins/html-webpack-plugin/

You can pass a hash of configuration options to HtmlWebpackPlugin. Allowed values are as follows:

title:      The title to use for the generated HTML document.
filename:   The file to write the HTML to. Defaults to index.html. You can specify a subdirectory here too (eg: assets/admin.html).
template:   Webpack require path to the template. Please see the docs for details.
inject:     true | 'head' | 'body' | false Inject all assets into the given template or templateContent - When passing true or 'body' all javascript resources will be placed at the bottom of the body element. 'head' will place the scripts in the head element.
favicon:    Adds the given favicon path to the output html.
minify:     {...} | false Pass a html-minifier options object to minify the output.
hash:       true | false if true then append a unique webpack compilation hash to all included scripts and CSS files. This is useful for cache busting.
cache:      true | false if true (default) try to emit the file only if it was changed.
showErrors: true | false if true (default) errors details will be written into the HTML page.
chunks:     Allows you to add only some chunks (e.g. only the unit-test chunk)
chunksSortMode: Allows to control how chunks should be sorted before they are included to the html. Allowed values: 'none' | 'auto' | 'dependency' | {function} - default: 'auto'
excludeChunks: Allows you to skip some chunks (e.g. don't add the unit-test chunk)
xhtml:      true | false If true render the link tags as self-closing, XHTML compliant. Default is false
Here's an example webpack config illustrating how to use these options:

{
  entry: 'index.js',
  output: {
    path: 'dist',
    filename: 'index_bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'My App',
      filename: 'assets/admin.html'
    })
  ]
}
