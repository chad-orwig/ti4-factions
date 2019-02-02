const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
    mode: 'production',
    devtool: 'source-map',
    entry: './src/client/index.jsx',
    target : 'web',
    output: {
        path       : __dirname + '/dist',
        publicPath : '/',
        filename   : "bundle.js"
    },
    devServer : {
        contentBase : './dist'
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "styles.css"
        }),
        new CopyWebpackPlugin([
            {from : './src/client/assets/static', to: __dirname + '/dist'}
        ])
    ],
    module : {
        rules : [
            { test: /\.jsx$/, loader: 'jsx-loader?insertPragma=React.DOM&harmony'},
            { test: /\.png/, loader: 'file-loader'},
            { test: /\.(eot|svg|ttf|woff|woff2)$/, loader: 'file-loader?name=public/fonts/[name].[ext]'},
            { test: /(\.scss)$|(\.css)$/, loaders: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'] }
        ]
    }
};