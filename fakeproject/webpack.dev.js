require('dotenv').config()
const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');


module.exports = merge(common, {
    devServer: {
//        compress: true,
//        publicPath: 'http://192.168.1.80:7654/assets/bundles/',
        allowedHosts: ['*'],
        host: '0.0.0.0',
        port: 7654,
        headers: { "Access-Control-Allow-Origin": "*" },
        writeToDisk: (filePath) => /\.json$/.test(filePath),  // save a copy of the manifest JSON file to disk
    },
    devtool: 'cheap-module-source-map',
    output: {
        path: path.resolve(__dirname, 'build/dev_bundles/'),
        publicPath: `http://${process.env.PUBLIC_HOST}:7654/assets/bundles/`
    },
    plugins: [
        // let Django know where bundles are saved
        // and save the file one directory above from 'output.path'
        new WebpackManifestPlugin({fileName:'../manifest.dev.json'}),

        // delete all files in 'build/dev_bundles/' dir automatically
        new CleanWebpackPlugin(),
    ],
});