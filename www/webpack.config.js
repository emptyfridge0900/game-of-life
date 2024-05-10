const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const WasmPackPlugin = require("@wasm-tool/wasm-pack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
    },
    plugins: [
        new CopyWebpackPlugin({patterns:[{from:'./index.html',to:"."}]}),
        // new HtmlWebpackPlugin({
        //     template: "index.html"
        // }),
        new WasmPackPlugin({
            crateDirectory: path.resolve(__dirname,".."),//__dirname is www
            outDir: path.resolve("../pkg"),
            outName:"game-of-life",
            //args: '--log-level warn'
        })
    ],
    mode: 'development',
    experiments: {
        asyncWebAssembly: true
   }
};
