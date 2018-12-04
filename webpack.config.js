const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/dist/index.html",
      filename: "./index.html"
    })
    // new webpack.DefinePlugin({
    //   "process.env": {
    //     NODE_ENV: JSON.stringify("production")
    //   }
    // })
    // new UglifyJsPlugin({
    //   sourceMap: true,
    //   uglifyOptions: {
    //     output: {
    //       comments: false // remove all comments
    //     }
    //   }
    // })
  ],
  entry: {
    bundle: "./src/index.js"
  },
  module: {
    rules: [
      {
        test: [/\.js$/, /\.jsx$/],
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"]
          }
        }
      }
    ]
  },
  output: {
    filename: "bundle.js",
    path: __dirname + "/src/dist/"
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    contentBase: "./src/dist",
    hot: true
  }
};
