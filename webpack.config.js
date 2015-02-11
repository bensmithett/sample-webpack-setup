var path = require("path");
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");

/* Entry & output files
*****************************/
var entry = {
  index: ["./src/index"],
};

var output = {
  filename: "[name]-[hash].js",
  path: path.join(__dirname, "./build"),
  publicPath: "/_assets/",
};


/* Loaders
*****************************/
var loaders = [
  {
    test: /\.sass$/,
    loader: ExtractTextPlugin.extract("style-loader", "css!sass?indentedSyntax=sass")
  },
  {
    test: /\.jpg$/,
    loader: "file-loader"
  }
];



/* Exports
*****************************/
module.exports = {
  entry: entry,
  output: output,
  module: {
    loaders: loaders,
  },
  
  plugins: [
    new ExtractTextPlugin("style-[hash].css"),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
  ]
};
