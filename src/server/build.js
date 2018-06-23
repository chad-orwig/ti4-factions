/*eslint-disable no-console */
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.dist');
require('colors');

process.env.NODE_ENV = 'production'; // this assures the Babel dev config (for hot reloading) doesn't apply.

console.log('Generating minified bundle for production via Webpack. This will take a moment...'.blue);

webpack(webpackConfig).run((err, stats) => {
	if (err) { // so a fatal error occurred. Stop here.
		console.log(err.bold.red);
		return 1;
	}

	const jsonStats = stats.toJson();

    console.log(`Webpack stats: ${stats}`);

	if (jsonStats.warnings.length) {
		console.log('Webpack generated the following warnings: '.bold.yellow);
		jsonStats.warnings.map(warning => console.log(warning.yellow));
	}

    if (jsonStats.errors.length) {
        return jsonStats.errors.map(error => console.log(error.red));
    }

	// if we got this far, the build succeeded.
	console.log('The app has been written to /dist.'.green);

	return 0;
});