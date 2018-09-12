describe('Component: cardItem', () => {
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

		element = angular.element('<card-item></card-item>');
		scope = $rootScope.$new();
		element = $compile(element)(scope);
		ctrl = element.controller('cardItem');
	}));

	it('should controller exist', () => {
		expect(ctrl).toBeDefined();
	});

	it('should confirm that device type is mobile', () => {
		ctrl.device = 'mobile';
		expect(ctrl.isMobile()).toBe(true);
		expect(ctrl.isTablet()).toBe(false);
	});

	it('should confirm that device type is tablet', () => {
		ctrl.device = 'tablet';
		expect(ctrl.isTablet()).toBe(true);
		expect(ctrl.isMobile()).toBe(false);
	});

	it('should confirm that device type is desktop', () => {
		ctrl.device = 'desktop';
		expect(ctrl.isTablet()).toBe(false);
		expect(ctrl.isDesktop()).toBe(true);
	});
});
