const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js", 
  output: {
    filename: "main.js", 
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
    
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    
      {
        test: /\.s[ac]ss$/,
        use: [
          MiniCssExtractPlugin.loader, 
          "css-loader",                 
          "sass-loader",                
        ],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"], 
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html", 
    }),
    new MiniCssExtractPlugin({
      filename: "styles.css", 
    }),
  ],
};
