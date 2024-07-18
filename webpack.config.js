// webpack.config.js

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js", // Entry point of your application
  output: {
    filename: "bundle.js", // Output bundle file name
    path: path.resolve(__dirname, "dist"), // Output directory (absolute path)
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html", // Path to your HTML file in src
      filename: "index.html", // Output HTML file name
      // Other options if needed
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader", // Inject styles into DOM
          "css-loader", // Turns CSS into CommonJS modules
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader"],
      },
    ],
  },
};
