const path = require('path');
const webpack = require('webpack');

const libraryName = 'sifCalculator';
const outputFile = libraryName + '.js';

module.exports = {
    entry: path.resolve(__dirname, 'index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: outputFile,
        library: libraryName,
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    module: {
        loaders: [{
            test: /\.(js)$/,
            loader: 'babel-loader',
            exclude: /(node_modules|bower_components)/
        }]
    },
    plugins: [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: true
            },
            beautify: false,
            comments: false
        }),
    ],
    resolve: { extensions: ['', '.js'] }
}
