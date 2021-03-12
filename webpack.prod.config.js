const merge = require("webpack-merge").merge;
const baseConfig = require("./webpack.base.config");

process.env.NODE_ENV = "production";
process.env.BASE_URL = "/";

module.exports = merge(baseConfig, {
  mode: process.env.NODE_ENV,
});
