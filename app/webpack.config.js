/**
 * Created by reza on 11/10/16.
 */

var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, '');
var APP_DIR = path.resolve(__dirname, '');
var IMG_DIR = path.resolve(__dirname, '../images');

var config = {
    entry: APP_DIR + '/script.jsx',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?/,
                include: APP_DIR,
                exclude: /node_modules/,
                // loader: 'babel',
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loaders: ["style", "css?sourceMap", "sass?sourceMap"],
            },
            {
                test: /\.svg$/,
                loader: 'url-loader?limit=10000000&mimetype=image/svg+xml'
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                include:IMG_DIR,
                loaders: [
                    'file?hash=sha512&digest=hex&name=[hash].[ext]',
                    'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ]
            }
        ]
    },
};

module.exports = config;

