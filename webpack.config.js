const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require("webpack");
require('dotenv').config({ path: './.env' });
module.exports = {
    mode: 'development',
    entry: {
        '/js/home': './src/assets/js/home.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: require('sass')
                        }
                    }
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/pages/home/home.html",
            filename: "home.html",
            inject: 'body',
            chunks: ["/js/home"]
        }),
        new webpack.DefinePlugin({
            "process.env": JSON.stringify(process.env)
        })
    ]
};
