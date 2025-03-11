const path = require("path");

module.exports = {
  name: "NoCRA",
  mode: "development",
  devtool: "eval",
  resolve: {
    extensions: [".js", ".jsx"],
  },
  entry: {
    app: ["./client"],
  }, //입력
  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
        },
      },
    ],
  },
  output: {
    path: path.join(__dirname, "dist"), // 실제 로컬 경로는 user/hyorinlee/github/.../dist 이겠지만, 현재 파일이 위치한 폴더(__dirname)를 기준으로 "dist" 폴더의 절대 경로를 생성
    filename: "app.js",
  }, //출력
};
