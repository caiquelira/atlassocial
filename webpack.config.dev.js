var path = require("path");
var webpack = require("webpack");

module.exports = {
  entry: [
    "react-hot-loader/patch",
    "babel-polyfill",
    "webpack-hot-middleware/client?reload=true",
    "./public/src/main.js"
  ],
  output: {
    path: path.join(__dirname, 'public/build'),
    filename: "bundle.js",
    publicPath: "/build/"
  },
  externals: {
    Config: JSON.stringify(require('./config')(false))
  },
  // assumes all JavaScript files you edit will be in src/
  // when importing from src/<file>.js, only need to specify as <file>
  resolve: {
    root: path.resolve("./public/src"), // must be absolute path
    extensions: ['', '.js', '.json', '.scss', '.css']
  },
  devtool: "source-map", // source maps to ease debugging
  module: {
    loaders: [
      {
        // pre-process every *.js file (except for ones in
        // node_modules/) with Babel:
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ["babel"]
      },
      {
       test: /\.json$/,
       loader: 'json'
      },
      {
       test: /\.scss$/,
       loader: 'style!css!sass'
      },
      {
        test: /\.css$/, // Only .css files
        loader: 'style!css' // Run both loaders
      }
    ],
    sassLoader: {
      includePaths: [
        './node_modules'
      ]
    }
  },
  plugins: [
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.HotModuleReplacementPlugin({quiet: true}),
      new webpack.NoErrorsPlugin()
  ]
};