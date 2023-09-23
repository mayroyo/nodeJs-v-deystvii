const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./app/index.jsx",
  output: { path: __dirname, filename: "dist/bundle.js", publicPath: "/assets/" },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
        },
      },
    ],
  },
  devServer: {
    port: 3001,
  },
};
