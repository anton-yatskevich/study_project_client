describe('Component: notification', () => {
	let $compile;
	let $rootScope;
	let scope;
	let ctrl;
	let element;

	beforeEach(() => {
		angular.mock.module('studyProject');
	});

	beforeEach(inject((_$rootScope_, _$compile_, _$window_) => {
		$rootScope = _$rootScope_;
		$compile = _$compile_;

		element = angular.element('<notification></notification>');
		scope = $rootScope.$new();
		element = $compile(element)(scope);
		ctrl = element.controller('notification');
	}));

	it('should turn closedByUser to true', () => {
		ctrl.closeNotification();

		expect(ctrl.closedByUser).toBeTruthy();
	});
});
