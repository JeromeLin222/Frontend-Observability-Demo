const path = require('path')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const FaroSourceMapUploaderPlugin = require('@grafana/faro-webpack-plugin')
const Dotenv = require('dotenv')

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
    mode: 'development',
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
            appName: 'Faro Demo',
            endpoint: process.env.GRAFANA_API_ENDPOINT,
            appId: '91',
            stackId: '356074',
            apiKey: process.env.SOURCE_MAP_UPLOAD_ACCESS_KEY,
            gzipContents: false,
            bundleId: 'test',
            verbose: true,
            keepSourcemaps: true,
        }),
    ],
}
