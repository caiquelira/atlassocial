var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'source-map',
    entry: [
        './public/src/main.js'
    ],
    output: {
        path: path.join(__dirname, 'public/build'),
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            }
        })
    ],
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
    }
};