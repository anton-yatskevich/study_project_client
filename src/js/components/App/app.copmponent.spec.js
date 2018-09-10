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
		element = angular.element('<app-container></app-container>');
		element = $compile(element)(scope);
	}));

	it('should controller exist', () => {
		ctrl = element.controller('appContainer');
		expect(ctrl).toBeDefined();
	});
});
