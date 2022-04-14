const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isDev = process.env.NODE_ENV === "development";

const pages = ["block1/task1"];

module.exports = {
  mode: isDev ? "development" : "production",
  entry: {
    index: "./src/index.ts",
    ...pages.reduce((config, page) => {
      config[page] = `./src/pages/${page}.ts`;

      return config;
    }, {}),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(sass|scss|css)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: "/node-modules/",
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        use: "file-loader",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        use: "file-loader",
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
    alias: {
      assets: path.resolve(__dirname, "src/assets"),
      pages: path.resolve(__dirname, "src/pages"),
      shared: path.resolve(__dirname, "src/shared"),
      components: path.resolve(__dirname, "src/components"),
    },
  },
  devServer: {
    hot: true,
    open: true,
    port: 4000,
    compress: true,
  },
  devtool: isDev ? "source-map" : "",
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      excludeChunks: pages.map((page) => page),
      template: "./src/index.html",
    }),
    ...pages.map(
      (page) =>
        new HtmlWebpackPlugin({
          filename: `${page}.html`,
          template: `./src/pages/${page}.html`,
        })
    ),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
  ],
};
