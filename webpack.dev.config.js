const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const webpack = require('webpack')
module.exports = {
    entry: {
        main: './main.js',
        // plan: './main.js',
    }, // 指定入口文件
    output: {
        path: path.resolve(__dirname, './dist'), // 指定出口文件的路径目录
        //publicPath: '/assets/',
        filename: '[name].[hash:7].js' // 制定出口文件的名称
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
              },
            //   {
            //     test: /\.js$/,
            //     loader: 'babel-loader',
            //     exclude: '/node_modules/'
            //   },
            // {
            //     test: /\.css$/,
            //     loader: 'style-loader!css-loader',
            // },
            {

                test: /\.css$/,
                use: ExtractTextPlugin.extract(['css-loader', 'postcss-loader']),
                // exclude:path.resolve(__dirname, 'node_modules')

            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 100,
                    name: path.posix.join('static', 'img/[name].[hash:7].[ext]')
                }
            },

        ]
    },
    // watch:true,
    plugins: [
        new HtmlWebpackPlugin({
            // filename:'index1.html',
            template: 'index.html',
            inject: true,
            minify: {
                // removeComments: true,
                // collapseWhitespace: true,
                // removeAttributeQuotes: true
                // more options:
                // https://github.com/kangax/html-minifier#options-quick-reference
            },
            // necessary to consistently work with multiple chunks via CommonsChunkPlugin
            //   chunksSortMode: 'dependency'
        }),
        new ExtractTextPlugin({
            filename: path.posix.join('static', 'css/[name].[contenthash].css'),
            allChunks: true,
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        // contentBase: './dist',
        host: '127.0.0.1',
        inline: true,
        hot: true,
        port: 8080,
        open: true,
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
          'vue$': 'vue/dist/vue.js',
        }
      },
}
