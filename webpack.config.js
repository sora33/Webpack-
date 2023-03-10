const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { loader } = require('mini-css-extract-plugin');
module.exports = {
    entry : './src/jsvascripts/main.js',
    output : {
        path: path.resolve(__dirname, './dist'),
        filename: './javascripts/main.js'
    },
    module: {
        rules: [
            {
                test:/\.css/,
                use: [
                    {
                        // loader : 'style-loader'
                        loader : MiniCssExtractPlugin.loader
                    },
                    {
                        loader:'css-loader'
                    }
                ]
            },
            {
                test: /\.png|\.jpg/,
                type: 'asset/resource',
                generator: {
                    filename: 'images/[name][ext]'
                },
                use: [
                    
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: './stylesheets/main.css'
        }),
        new HtmlWebpackPlugin({
            template: './src/templates/index.html'
        }),
        new CleanWebpackPlugin(),
    ]
}