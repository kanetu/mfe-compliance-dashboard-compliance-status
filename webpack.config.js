const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  devServer: {
    port: 3002,
  },
  output: {
    publicPath: "auto",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react"],
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "complianceStatus",
      filename: "remoteEntry.js",
      exposes: {
        "./ComplianceStatus": "./src/ComplianceStatus.js",
      },
      shared: {
        react: { singleton: true, requiredVersion: "^19.1.0", eager: false },
        "react-dom": {
          singleton: true,
          requiredVersion: "^19.1.0",
          eager: false,
        },
        "chart.js": {
          singleton: true,
          requiredVersion: "^4.4.8",
          eager: false,
        },
        "react-chartjs-2": {
          singleton: true,
          requiredVersion: "^5.3.0",
          eager: false,
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
