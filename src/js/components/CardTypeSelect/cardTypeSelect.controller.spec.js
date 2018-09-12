describe('Component: cardTypeSelect', () => {
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

		scope = $rootScope.$new();
		element = angular.element('<card-type-select></card-type-select>');
		element = $compile(element)(scope);
		ctrl = element.controller('cardTypeSelect');
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
