const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

process.env.BASE_URL = "/";

module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "app.[fullhash:8].js",
  },
  module: {
    rules: [
      {
        test: /\.m?jsx?$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.vue$/,
        use: "vue-loader",
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "vue-style-loader",
            // loader: "style-loader",
            // options: {
            //   sourceMap: false,
            //   shadowMode: false,
            // },
          },
          {
            loader: "css-loader",
            // options: {
            //   sourceMap: false,
            //   importLoaders: 2,
            // },
          },
          {
            loader: "postcss-loader",
            // options: {
            //   sourceMap: false,
            // },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      title: "成功啦",
      template: "public/index.html",
      inject: "body",
      templateParameters: {
        keywords: "vue,js,css",
        description: "Learn vue follow ky",
        BASE_URL: process.env.BASE_URL,
      },
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "public"),
          to: path.resolve(__dirname, "dist"),
          toType: "dir",
          filter: (resourcePath) => {
            if (
              resourcePath.includes("index.html") ||
              resourcePath.includes(".DS_Store")
            ) {
              return false;
            }
            return true;
          },
        },
      ],
    }),
  ],
};
