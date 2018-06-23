const express = require('express');
const path = require('path');
const compression = require('compression');
/*eslint-disable no-console */

const port = process.env.PORT || 3000;
const app = express();

//still waiting on a valid cert
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

app.use(compression());
app.use(express.static('dist'));


app.get('*', function(req, res) {
	res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(port, function(err) {
	if (err) {
		console.log(err);
	} 
	else {
		console.log(`server is litening on port ${port}`);
	}
});