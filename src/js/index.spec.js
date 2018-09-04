// describe('Sample test', () => {
// 	it('Condition is true', () => {
// 		expect('AngularJS').toBe('AngularJS');
// 	});
// });

// describe('Fake controller', () => {
// 	beforeEach(() => {
// 		angular.mock.module('studyProject');
// 	});

// 	it('name', inject(($controller) => {
// 		const name = 'John Doe';
// 		const controller = $controller('nameFormatterCtrl');
// 		controller.name = name;

// 		expect(controller.getFormattedName()).toEqual(`Name: ${name}`);
// 	}));
// });

// describe('card type filter', () => {
// 	let $filter;

// 	beforeEach(() => {
// 		angular.mock.module('studyProject');
// 	});

// 	beforeEach(inject((_$filter_) => {
// 		$filter = _$filter_;
// 	}));

// 	it('returns the correct value when given a string of chars', () => {
// 		const cardType = $filter('cardType');
// 		expect(cardType([{ type: 1 }, { type: 2 }, { type: 1 }], { value: 1 }))
// 			.toEqual([{ type: 1 }, { type: 1 }]);
// 	});
// });


describe('Component: appContainer', () => {
	let $compile;
	let scope;
	let ctrl;
	let element;

	beforeEach(() => {
		angular.mock.module('studyProject');
	});

	beforeEach(inject(($rootScope, _$compile_) => {
		scope = $rootScope.$new();
		$compile = _$compile_;
		element = angular.element(`<app-container></app-container>`);
		element = $compile(element)(scope);
	}));

	it('should display name', () => {
		ctrl = element.controller('appContainer');
		scope.$digest();
		console.log(element);
		expect(ctrl).toBeDefined();
	});
});

describe('Component: nameFormatter', () => {
	let $compile;
	let scope;
	let ctrl;
	let element;

	beforeEach(() => {
		angular.mock.module('studyProject');
	});

	beforeEach(inject(($rootScope, _$compile_) => {
		scope = $rootScope.$new();
		$compile = _$compile_;
		element = angular.element(`<name-formatter></name-formatter>`);
		element = $compile(element)(scope);
	}));

	it('should display name', () => {
		ctrl = element.controller('nameFormatter');
		scope.$digest();
		console.log(element);
		expect(ctrl).toBeDefined();
	});
});
