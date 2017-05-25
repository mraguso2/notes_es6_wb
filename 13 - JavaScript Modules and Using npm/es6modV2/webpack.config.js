const webpack = require('webpack');

const nodeEnv = process.env.NODE_ENV || 'production';
// ^ variable for environment -> helps us do production builds and dev builds

// 
module.exports = {
  devtool: 'source-map',
  // entry = where do you want to start your application
  entry: {
    filename: './app.js'
  },
  // output = where do you want it to go
  output: {
    filename: '_build/bundle.js'
  },
  module: {
    // loaders = how should I handle certain types of files
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015-native-modules']
        }
      }
    ]
  },
  plugins: [
    // ugligy js
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      output: { comments: false },
      sourceMap: true
    }),
    //env plugin
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(nodeEnv)}
    })
  ]

}