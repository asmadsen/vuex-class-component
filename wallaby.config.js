module.exports = function () {

	return {
		files: [
			'tsconfig.json', // <--
			'src/**/*.ts',
			'package.json',
			'jest.config.js'
		],

		tests: ['test/**/*.spec.ts'],

		env: {
			type: 'node',
			runner: 'node'
		},
		testFramework: 'jest',

		setup: function (wallaby) {
			const jestConfig = require('./jest.config');
			// for example:
			// jestConfig.globals = { "__DEV__": true };
			wallaby.testFramework.configure(jestConfig);
		},
		debug: true,
	}
}
