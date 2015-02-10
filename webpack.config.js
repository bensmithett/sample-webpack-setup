var path = require("path");
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  cache: true,
  context: __dirname,
  entry: {
    index: ["./src/index"],
  },
  module: {
    loaders: [
      {
        test: /\.sass$/,
        loader: ExtractTextPlugin.extract("style-loader", "css!sass?indentedSyntax=sass")
      },
      {
        test: /\.jpg$/,
        loader: "file-loader"
      }
    ]
  },
  output: {
    filename: "[name].js",
    path: path.join(__dirname, "./build"),
    publicPath: "/build/"
  },
  plugins: [
    new ExtractTextPlugin("style.css", { allChunks: true })
  ]
};
