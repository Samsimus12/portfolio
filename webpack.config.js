const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        app: path.join(__dirname,'src/app.js')
    },
    devtool: 'inline-source-map',
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({ filename: 'styles.css' }),
        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            template: './src/index.html',
            filename: 'index.html'
        })
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js'
        }
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(html)$/,
                use: {
                    loader: 'html-loader',
                    options: {
                        attrs: [':data-src']
                    }
                }
            },
            {
                test: /\.(css|scss)$/,
                use:  [  'style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|svg|jpg|JPG|gif|woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    }
};