const express =  require('express');
const webpack = require('webpack');
const path = require('path');
const config = require('./webpack.config.dev');
const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(express.json());

//This allows development mode to use self signed certificates
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

/* eslint-disable no-console */

app.use(require('webpack-dev-middleware')(compiler, {
	noInfo: true,
	publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));


app.get('*', function(req, res) {
	res.sendFile(path.join( __dirname, '../client/index.html'));
});

app.listen(port, function(err) {
	if (err) {
		console.log(err);
	}
});