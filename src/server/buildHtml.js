const fs = require('fs');
const cheerio = require('cheerio');
require('colors');

/*eslint-disable no-console */

fs.readFile('src/client/index.html', 'utf8', (err, markup) => {
	if (err) {
		return console.log(err);
	}

	const $ = cheerio.load(markup);

	// since a separate spreadsheet is only utilized for the production build, need to dynamically add this here.
	$('head').prepend('<link rel="stylesheet" href="styles.css">');
	fs.writeFile('src/server/dist/index.html', $.html(), 'utf8', function (err) {
		if (err) { 
			return console.log(err);
		}
		console.log('index.html written to /dist'.green);
	});
});
