const webpack = require('webpack');
require("babel-polyfill");
module.exports = {
  // entry: './src/index.js',
  entry: {
    js: ['babel-polyfill', './src/index.js'],
    vendor: ['react']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    modules: ['node_modules', 'app']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: './dist',
    hot: true
  }
};
