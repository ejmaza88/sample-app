const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');


const HOST = '192.168.1.80'

module.exports = merge(common, {
    devServer: {
//        compress: true,
        allowedHosts: ['*'],
//        publicPath: 'http://192.168.1.80:7654/assets/bundles/',
//        host: '0.0.0.0',
        host: HOST,
        port: 7654,
        headers: { "Access-Control-Allow-Origin": "*" },
        writeToDisk: (filePath) => /\.json$/.test(filePath),  // save a copy of the manifest JSON file to disk
    },
    devtool: 'cheap-module-source-map',
    output: {
        path: path.resolve(__dirname, 'build/dev_bundles/'),
        publicPath: `http://${HOST}:7654/assets/bundles/`
    },
    plugins: [
        // let Django know where bundles are
        // save the file one directory above from 'output.path'
        new WebpackManifestPlugin({fileName:'../manifest.dev.json'}),

        // delete all files in 'build/dev_bundles/' dir automatically
        new CleanWebpackPlugin(),
    ],
});