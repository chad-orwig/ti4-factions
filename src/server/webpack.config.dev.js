const webpack = require('webpack');
module.exports = {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'webpack-hot-middleware/client?reload=true',
        './src/client/index.jsx'
    ],
    target : 'web',
    output: {
        path       : __dirname + '/build',
        publicPath : '/',
        filename   : "bundle.js"
    },
    devServer : {
        contentBase : './src',
        hot : true
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    module : {
        rules : [
            { test: /\.jsx$/, loader: 'jsx-loader?insertPragma=React.DOM&harmony'},
            { test: /\.png/, loader: 'file-loader'},
            { test: /(\.scss)$|(\.css)$/, loaders: ['style-loader', 'css-loader', 'sass-loader'] },
            { test: /\.(eot|svg|ttf|woff|woff2)$/, loader: 'file-loader?name=public/fonts/[name].[ext]'}
        ]
    }
};