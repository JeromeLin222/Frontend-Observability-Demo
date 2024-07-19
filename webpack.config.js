const path = require('path')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const FaroSourceMapUploaderPlugin = require('@grafana/faro-webpack-plugin')
const Dotenv = require('dotenv')
const webpack = require('webpack')

Dotenv.config()

module.exports = {
    entry: './public/javascripts/faro.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public/dist'),
        sourceMapFilename: 'bundle.js.map'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    }
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js'],
    },
    mode: 'production',
    devtool: 'source-map',
    optimization: {
        minimize: true,
        minimizer: [new TerserWebpackPlugin({
            terserOptions: {
                format: {
                    comments: false,
                },
                sourceMap: true, // 在這裡設置 sourceMap 屬性
            },
            extractComments: false,
        })],
    },
    // Faro Source Map Upload config
    plugins: [
        new FaroSourceMapUploaderPlugin({
            appName: process.env.APP_NAME,
            endpoint: process.env.GRAFANA_API_ENDPOINT,
            appId: process.env.APP_ID,
            stackId: process.env.STACK_ID,
            apiKey: process.env.SOURCE_MAP_UPLOAD_ACCESS_KEY,
            gzipContents: false,
            bundleId: process.env.BUNDLE_ID || undefined,
            verbose: true,
            keepSourcemaps: true,
        }),
        new webpack.DefinePlugin({
            'process.env.FARO_COLLECTOR_URL': JSON.stringify(process.env.FARO_COLLECTOR_URL),
            'process.env.APP_NAME': JSON.stringify(process.env.APP_NAME),
        })
    ],
}
