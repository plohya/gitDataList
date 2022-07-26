const path = require('path'); //либа позволяет указать путь к папке
const {CleanWebpackPlugin} = require('clean-webpack-plugin'); // для очищения неиспользуемых бандлов
const HTMLWebpackPlugin = require('html-webpack-plugin'); // переносит html шаблон в папку билда и импортирует в него все js бандлы
module.exports = {
    mode: 'development',    // разработка -> выходные файлы джс не надо сжимать
    entry: [
        "@babel/polyfill",
        './src/index.jsx'
    ], // путь к файлу, который является входной точкой в приложение
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[hash].js' // имя файлов js + избавляемся от пробелм хэширования при разработке, чтобы отслеживать измененные js файлы и делать бандлы с уникальными названиями
    }, // куда вебпак будет собирать файлы
    devServer: {
        port: 3001
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins : [
        new HTMLWebpackPlugin({template: './src/index.html'}), // темплейт - путь к html
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.(css|scss)$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(jpg|jpeg|png|svg)/,
                use: ['file-loader']
            },
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-react", "@babel/preset-env"
                        ]
                    }
                }
            }
        ]
    }
}