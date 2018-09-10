const webpackConfig = require('./webpack.config');

module.exports = (config) => {
	config.set({
		basePath: '',
		frameworks: ['jasmine'],

		files: [
			'node_modules/angular/angular.js',
			'node_modules/angular-mocks/angular-mocks.js',
			'node_modules/phantomjs-polyfill-object-assign/object-assign-polyfill.js',

			'src/js/index.js',
			'src/js/index.spec.js',
		],

		preprocessors: {
			'src/js/index.js': ['webpack', 'sourcemap'],
			'src/js/index.spec.js': ['webpack'],
		},

		webpack: webpackConfig,
		webpackMiddlewnare: {
			noInfo: true,
			stats: 'errors-only',
		},

		plugins: [
			'karma-webpack',
			'karma-jasmine',
			'karma-coverage',
			'istanbul-instrumenter-loader',
			'karma-phantomjs-launcher',
			'karma-sourcemap-loader',
		],

		reporters: ['progress', 'coverage'],
		port: 9876,
		colors: true,
		logLevel: config.LOG_INFO,
		autoWatch: true,
		browsers: ['PhantomJS'],
		singleRun: false,
		concurrency: Infinity,
		coverageReporter: {
			dir: 'coverage',
			type: 'html',
		},
	});
};
