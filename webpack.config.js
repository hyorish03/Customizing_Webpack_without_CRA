const path = require("path");
const webpack = require("webpack");

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
        },
      },
    ],
  },
  plugins: [new webpack.LoaderOptionsPlugin({ debug: true })],
  output: {
    path: path.join(__dirname, "dist"), // 실제 로컬 경로는 user/hyorinlee/github/.../dist 이겠지만, 현재 파일이 위치한 폴더(__dirname)를 기준으로 "dist" 폴더의 절대 경로를 생성
    filename: "app.js",
  }, //출력
  devServer: {
    static: path.join(__dirname, "dist"), // 빌드된 파일들이 위치할 폴더
    port: 3000, // 서버가 실행될 포트 번호
    open: true, // 서버 시작 시 자동으로 브라우저 열기
  },
};
