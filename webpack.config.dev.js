var path = require("path");
var webpack = require("webpack");

module.exports = {
  entry: [
    "babel-polyfill",
    "./public/src/main.js",
    "webpack-hot-middleware/client"
  ],
  output: {
    path: path.join(__dirname, 'public/build'),
    filename: "bundle.js",
    publicPath: "/build/"
  },
  // assumes all JavaScript files you edit will be in src/
  // when importing from src/<file>.js, only need to specify as <file>
  resolve: {
    root: path.resolve("./src"), // must be absolute path
    extensions: ["", ".js"]
  },
  devtool: "cheap-module-eval-source-map", // source maps to ease debugging
  module: {
    loaders: [
      {
        // pre-process every *.js file (except for ones in
        // node_modules/) with Babel:
        test: /\.js$/,
          exclude: /node_modules/,
          loaders: [
            // invokes Babel to translate React and ES6
            "babel"
          ]
      },
    ]
  },
  plugins: [
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin()
  ]
};