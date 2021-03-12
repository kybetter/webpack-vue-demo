const path = require("path");
const merge = require('webpack-merge').merge;
const baseConfig = require('./webpack.base.config');

process.env.NODE_ENV = "development";
process.env.BASE_URL = "/";

module.exports = merge(baseConfig, {
  mode: process.env.NODE_ENV,
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
  },
  devtool: "inline-source-map",
});
