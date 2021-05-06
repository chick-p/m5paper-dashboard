/* eslint-disable @typescript-eslint/no-var-requires */
const { merge } = require("webpack-merge");
const CopyPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");

const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "production",
  plugins: [
    ...common.plugins,
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(process.env),
    }),
    new CopyPlugin({
      patterns: [{ from: "public", to: "./" }],
    }),
  ],
});
