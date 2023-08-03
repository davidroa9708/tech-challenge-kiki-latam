const webpack = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const mode = 'production';
const devtool = false;
module.exports = {
    entry: [
        './src/main.ts',
    ],
    optimization: {
        minimize: false,
    },
    target: 'node',
    mode,
    devtool,
    externals: [
        nodeExternals({
            whitelist: [],
        }),
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                options: {
                  transpileOnly: true
                },
                exclude: /node_modules/,
              }
]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.WatchIgnorePlugin([/\.js$/, /\.d\.ts$/]),
        new ForkTsCheckerWebpackPlugin({
            tslint: true
        }),
        new webpack.DefinePlugin(
            {
                CONFIG: JSON.stringify(require("config"))
            }
        ),
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'server.js',
    },
};
