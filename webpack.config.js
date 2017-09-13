const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CssEntryPlugin = require("css-entry-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
  entry: ["./src/client/App/App.js", "./src/client/App/App.css", "./src/client/Nav/Nav.css"],
  output: {
    path: path.resolve('./public', 'dist'), // output directory
    filename: "bundle.js" // name of the generated bundle
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("styles.css"),
  ],
  devtool: "inline-source-map"
  //,
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     template: "./public/index.html",
  //     inject: "body"
  //   }),
  //   // new CssEntryPlugin({
  //   //   output: {
  //   //     filename: "style.bundle.css"
  //   //   }
  //   // })
  // ]
};
