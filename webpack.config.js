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
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.scss$/,
        use: [
            "style-loader", 
            "css-loader", 
            "sass-loader"
        ]
    }
    ]
  }
}