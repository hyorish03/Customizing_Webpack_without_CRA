const path = require("path");
const webpack = require("webpack");
const WebpackReactRefreshPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = {
  name: "NoCRA",
  mode: "development",
  devtool: "eval-source-map", // 개선된 소스 맵
  resolve: {
    extensions: [".js", ".jsx"],
  },
  entry: {
    app: ["./client"],
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: "babel-loader",
        options: {
          presets: [
            [
              "@babel/preset-env",
              {
                targets: ">1% in KR",
                debug: true,
              },
            ],
            "@babel/preset-react",
          ],
          plugins: ["react-refresh/babel"], // React Fast Refresh 플러그인
        },
      },
    ],
  },
  plugins: [
    new WebpackReactRefreshPlugin(),
    new webpack.HotModuleReplacementPlugin(), // HMR 활성화
  ],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "app.js",
  },
  devServer: {
    static: path.resolve(__dirname, "dist"),
    port: 3000,
    open: true,
    hot: true, // HMR 활성화
  },
};
