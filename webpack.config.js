const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isDev = process.env.NODE_ENV === "development";

const pages = [
  "block1/task1",
  "block1/task2",
  "block1/task3",
  "block1/task4",
  "block1/task5",

  /* "block2/task1/index","block2/task2/index","block2/task3/index","block2/task4/index",
  "block3/task1/index","block3/task2/index", */
];

module.exports = {
  mode: isDev ? "development" : "production",
  entry: {
    index: "./src/index.ts",
    ...pages.reduce((config, page) => {
      config[page] = `./src/pages/${page}/index.ts`;

      return config;
    }, {}),
  },
  output: {
    clean: true,
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
    assetModuleFilename: "assets/[name].[contenthash].[ext]",
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
        test: /\.(png|svg|jpg|jpeg|gif|woff|woff2|eot|ttf|otf)$/,
        type: "asset/resource",
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
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
      chunks: ["index"],
      template: "./src/index.html",
    }),
    ...pages.map(
      (page) =>
        new HtmlWebpackPlugin({
          chunks: [page, "index"],
          filename: `${page}.html`,
          template: `./src/pages/${page}/index.html`,
        })
    ),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
  ],
};
