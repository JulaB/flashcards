const path    = require("path")
const webpack = require("webpack")
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const mode = process.env.NODE_ENV === 'development' ? 'development' : 'production';

module.exports = {
  mode,
  optimization: {
    moduleIds: 'deterministic',
  },
  entry: {
    application: "./client/packs/application.js"
  },
  output: {
    filename: "[name].js",
    sourceMapFilename: "[name].js.map",
    path: path.resolve(__dirname, "app/assets/builds"),
  },
  plugins: [
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1
    }),
    new MiniCssExtractPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx|)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|eot|woff2|woff|ttf|svg)$/i,
        use: 'file-loader',
      },
    ]
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, 'client/components/'),
      constants: path.resolve(__dirname, 'client/constants'),
      containers: path.resolve(__dirname, 'client/containers'),
      actions: path.resolve(__dirname, 'client/actions'),
      libs: path.resolve(__dirname, 'client/libs'),
      reducers: path.resolve(__dirname, 'client/reducers'),
      store: path.resolve(__dirname, 'client/store'),
    },
    extensions: ['.js', '.jsx', '.css'],
  },
}
