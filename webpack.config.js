const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
          // plugins: [
          //   '@babel/plugin-transform-runtime',
          //   '@babel/transform-async-to-generator',
          // ],
        },
      },
      {
        test: /.(css|scss)$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.png|svg|jpg|gif$/,
        use: ['file-loader'],
      },
    ],
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'build'),
      publicPath: '/',
    },
    compress: true,
    port: 8080,
    open: true,
    hot: true,
    proxy: {
      '/api': 'http://localhost:3000',
    },
  },
  plugins: [new HtmlWebpackPlugin({ template: 'index.html' })],
  resolve: { extensions: ['.js', '.jsx'] },
};
