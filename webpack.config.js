const path = require("path");

module.exports = {
  // 入口文件
  entry: "./src/main.js",
  // 出口文件
  output: {
    path: __dirname + "/src/dist",
    filename: "build.js"
  },
  mode: "development",
  // 需要依赖的插件或者转载器
  module: {
    // 之前配置
    // loaders: [
    //   {
    //     test: /\.css$/,
    //     loader: "style-loader!css-loader"
    //   }
    // ]
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
            options: {
              modules: true
            }
          }
        ]
      },

      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      {
        test: /\.less$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "less-loader"
          }
        ]
      }
    ]
  }
};
