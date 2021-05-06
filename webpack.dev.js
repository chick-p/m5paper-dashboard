/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const { merge } = require("webpack-merge");
const webpack = require("webpack");
const dotenv = require("dotenv");

const common = require("./webpack.common.js");

const env = dotenv.config().parsed;

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: path.join(__dirname, "public"),
  },
  plugins: [
    ...common.plugins,
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(env),
    }),
  ],
});
