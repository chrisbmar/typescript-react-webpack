const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = (env) => {
  const devMode = env.NODE_ENV !== "production";

  return {
    mode: env.NODE_ENV,
    entry: "./src/client/index.tsx",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: devMode ? "bundle.js" : "[hash].bundle.js",
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: "awesome-typescript-loader",
          exclude: /node_modules/,
        },
        {
          test: /\.js$/,
          loader: "source-map-loader",
          enforce: "pre",
        },
        {
          test: /\.scss$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                hmr: env.NODE_ENV !== "production",
              },
            },
            {
              loader: "css-loader",
              options: {
                modules: {
                  localIdentName: devMode
                    ? "[path]-[local]--[hash:base64:5]"
                    : "[hash:base64:5]",
                },
              },
            },
            "sass-loader",
          ],
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: "./src/client/index.html",
      }),
      new MiniCssExtractPlugin({
        filename: devMode ? "[name].css" : "[name].[hash].css",
        chunkFilename: devMode ? "[id].css" : "[id].[hash].css",
      }),
    ],
    devtool: "source-map",
    devServer: {
      contentBase: "./dist",
      port: 3000,
      overlay: {
        warnings: true,
        errors: true,
      },
    },
    resolve: {
      extensions: [".js", ".ts", ".tsx", ".scss"],
    },
  };
};
