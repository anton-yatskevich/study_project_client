describe('Directive: resize', () => {
	let $compile;
	let $rootScope;
	let $window;
	let scope;
	let ctrl;
	let element;

	beforeEach(() => {
		angular.mock.module('studyProject');
	});

	beforeEach(inject((_$rootScope_, _$compile_, _$window_) => {
		$rootScope = _$rootScope_;
		$compile = _$compile_;
		$window = _$window_;

		element = angular.element('<div resize />');
		scope = $rootScope.$new();
		element = $compile(element)(scope);
		ctrl = element.controller('resize');
	}));

	it('should call callback on resize window', () => {
		spyOn(ctrl, 'onResize');
		$window.innerWidth = -Infinity;
		angular.element($window).triggerHandler('resize');

		expect(ctrl.onResize).toHaveBeenCalled();

		$window.innerWidth = +Infinity;
		angular.element($window).triggerHandler('resize');

		expect(ctrl.onResize.calls.count()).toEqual(2);

		$window.innerWidth = 900;
		angular.element($window).triggerHandler('resize');

		expect(ctrl.onResize.calls.count()).toEqual(3);
	});
});
