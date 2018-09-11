describe('Component: creditCalculator', () => {
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

		element = angular.element('<credit-calculator></credit-calculator>');
		scope = $rootScope.$new();
		element = $compile(element)(scope);
		ctrl = element.controller('creditCalculator');
	}));

	it('should controller exist', () => {
		expect(ctrl).toBeDefined();
	});

	it('should call event handler on change month input', () => {
		spyOn(ctrl, 'onUpdateMonth');
		element.find('input').triggerHandler('change');
		expect(ctrl.onUpdateMonth).toHaveBeenCalled();
	});

	it('should call event handler on change costAmount input', () => {
		spyOn(ctrl, 'onUpdateBalanceFee');
		element.find('input').triggerHandler('change');
		expect(ctrl.onUpdateBalanceFee).toHaveBeenCalled();
	});
});
