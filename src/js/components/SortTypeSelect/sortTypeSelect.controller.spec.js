describe('Component: sortTypeSelect', () => {
	let $compile;
	let $rootScope;
	let scope;
	let ctrl;
	let element;

	beforeEach(() => {
		angular.mock.module('studyProject');
	});

	beforeEach(inject((_$rootScope_, _$compile_) => {
		$compile = _$compile_;
		$rootScope = _$rootScope_;

		element = angular.element('<sort-type-select></sort-type-select>');
		scope = $rootScope.$new();
		element = $compile(element)(scope);
		ctrl = element.controller('sortTypeSelect');
	}));

	it('should controller exist', () => {
		expect(ctrl).toBeDefined();
	});

	it('should call event handler on change select element', () => {
		spyOn(ctrl, 'onChange');
		element.find('select').triggerHandler('change');
		expect(ctrl.onChange).toHaveBeenCalled();
	});
});
