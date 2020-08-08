const path = require("path");
const GasPlugin = require("gas-webpack-plugin");
const glob = require("glob");
const fs = require("fs");

fs.mkdirSync("./dist", { recursive: true });
fs.copyFileSync("./src/gas/index.html", "./dist/index.html");
fs.copyFileSync("./src/gas/css.html", "./dist/css.html");
fs.copyFileSync("./src/gas/js.html", "./dist/js.html");
fs.copyFileSync("./src/gas/appsscript.json", "./dist/appsscript.json");

const entries = {};
glob.sync("./**/*.ts", {
  cwd: "./src/gas"
}).map((fileName) => {
  entries[fileName] = path.resolve("./src/gas", fileName);
});
module.exports = {
  mode: "production",
  context: __dirname,
  entry: entries,
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: '[name].js',
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.[tj]s$/,
        loader: "babel-loader",
      },
      {
        test: /\.(yml)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]"
            }
          }
        ]
      },
    ],
  },
  plugins: [new GasPlugin()],
  resolve: {
    extensions: [".ts", ".json"],
    alias: {
      "@utils": path.resolve(__dirname, "./src/utils"),
      "@src": path.resolve(__dirname, "./src"),
      "@root": path.resolve(__dirname, "./"),
    },
  },
};
