const webpackConfig = require('./webpack.config.js');

module.exports = (config) => {
	config.set({
		files: [
			'node_modules/angular/angular.js',
			'node_modules/angular-mocks/angular-mocks.js',
			'src/js/*.js',
			'src/js/**/*.js',
			'src/js/**/**/*.js',
		],

		preprocessors: {
			'src/js/*.js': ['webpack'],
			'src/js/**/*.js': ['webpack'],
			'src/js/**/**/*.js': ['webpack'],
		},

		plugins: [
			'karma-webpack',
			'karma-jasmine',
			'karma-phantomjs-launcher',
			'karma-chrome-launcher',
		],

		port: 9876,

		colors: true,

		logLevel: config.LOG_INFO,

		autoWatch: true,

		browsers: [
			'PhantomJS',
			'Chrome',
		],

		frameworks: ['jasmine'],

		webpack: webpackConfig,

		webpackMiddleware: {
			noInfo: true,
			stats: 'errors-only',
		},
	});
};
