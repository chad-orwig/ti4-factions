const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');
module.exports = {
    mode: 'production',
    devtool: 'source-map',
    entry: './src/index',
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
        })
    ],
    module : {
        rules : [
            { test: /\.js$/, include: path.join(__dirname, 'src'), loader: 'jsx-loader?insertPragma=React.DOM&harmony'},
            { test: /(\.scss)$|(\.css)$/, loaders: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'] }
        ]
    }
};