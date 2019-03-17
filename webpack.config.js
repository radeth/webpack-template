var path = require("path")
var MiniCssExtractPlugin = require("mini-css-extract-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
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
        test: /\.(css|scss)$/,
        use: [
            process.env.NODE_ENV === 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
            "css-loader",
            "sass-loader"
        ]
    },
    {
      test: /\.(html)$/,
      use: {
        loader: 'html-loader'
      }
    },
    {
      test: /\.(png|jpg|gif|svg)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name:'[name].[ext]',
            outputPath:'img/',
            publicPath:'img/'
          },
        },
      ],
    },
    {
      test:/\.html$/,
      loader:'file-loader',
      options:{
        name: '[name].[ext]'
      },
      exclude: path.resolve(__dirname,'src/index.html')
    }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
        filename: "main.css"
    }),
    new HtmlWebpackPlugin({
      template:'src/index.html'
    })
]
}