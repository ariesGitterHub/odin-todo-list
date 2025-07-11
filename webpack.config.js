// webpack.config.js

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development", // or 'production' via scripts
  entry: "./src/index.js", // Entry point of your application
  output: {
    filename: "bundle.js", // Output bundle file name
    path: path.resolve(__dirname, "dist"), // Output directory
    clean: true, // Optional: cleans /dist folder on build
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"), // Serve files from /dist
    },
    port: 8080, // Change this to 3000 or any free port if needed
    open: true, // Opens the browser automatically
    hot: true, // Enables hot module replacement
    compress: true, // Optional: enables gzip compression
    client: {
      overlay: true, // Show errors in the browser overlay
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html", // HTML template
      favicon: path.resolve(__dirname, "public", "favIcon.svg"),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"], // Handle CSS files
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[contenthash].[ext]",
              outputPath: "images/",
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        use: ["file-loader"],
      },
      {
        test: /\.mp3$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "assets/",
              publicPath: "assets/",
            },
          },
        ],
      },
    ],
  },
};
