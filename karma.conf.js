const webpackConfig = require('./webpack.config');

module.exports = (config) => {
	config.set({
		basePath: '',
		frameworks: ['jasmine'],

		files: [
			'src/js/index.test.js',
		],

		preprocessors: {
			'src/js/index.test.js': ['webpack'],
		},

		webpack: webpackConfig,
		webpackMiddlewnare: {
			noInfo: true,
			stats: 'errors-only',
		},

		reporters: ['progress'],
		port: 9876,
		colors: true,
		logLevel: config.LOG_INFO,
		autoWatch: true,
		browsers: ['PhantomJS'],
		singleRun: false,
		concurrency: Infinity,
	});
};
