var path = require("path")

module.exports = {
  mode: 'development',
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
    publicPath: "/"
  },
  devServer: {
    filename: 'main.js'
  },
  devtool: 'inline-source-map',
  module:{
    test:/.css$/,
    use:[
      'style-loader',
      'css-loader'
    ]
  }
}