describe('Component: appContainer', () => {
	let $compile;
	let $rootScope;
	let $httpBackend;
	let scope;
	let ctrl;
	let element;

	beforeEach(() => {
		angular.mock.module('studyProject');
	});

	beforeEach(inject((_$rootScope_, _$compile_, _$httpBackend_) => {
		$rootScope = _$rootScope_;
		$compile = _$compile_;
		$httpBackend = _$httpBackend_;

		element = angular.element('<app-container></app-container>');
		scope = $rootScope.$new();
		element = $compile(element)(scope);
		ctrl = element.controller('appContainer');

		$httpBackend.whenGET('http://localhost:3000/').respond([{ card: 1 }, { card: 2 }]);
	}));

	it('shoul fetch cards', () => {
		expect(ctrl.cards).toEqual([]);
		expect(ctrl.isLoading).toBe(true);

		$httpBackend.flush();

		expect(ctrl.cards).toEqual([{ card: 1 }, { card: 2 }]);
		expect(ctrl.isLoading).toBe(false);
	});

	it('should throw error, when request send to wrong url', () => {
		$httpBackend.whenGET('http://localhost:1000/').respond(400, '');
		const fetch = () => {
			ctrl.$ngRedux.dispatch(ctrl.FetchService.fetchCards('http://localhost:1000/'));
			$httpBackend.flush();
		};

		expect(fetch).toThrow();
	});

	it('should set card type', () => {
		ctrl.setCardType('balanceFee');
		expect(ctrl.cardType).toEqual('balanceFee');
	});

	it('should set sort type', () => {
		ctrl.setSortType('type');

		expect(ctrl.sortType).toEqual('type');
	});

	it('should show modal window with form', () => {
		expect(ctrl.isVisibleForm).toBe(false);

		ctrl.$ngRedux.dispatch(ctrl.showModalWindow(true));

		expect(ctrl.isVisibleForm).toBe(true);
	});

	it('should fill user info', () => {
		expect(ctrl.isFilledForm).toBe(false);

		const user = {
			name: 'name',
			age: 20,
			annualIncome: 1000,
		};
		ctrl.$ngRedux.dispatch(ctrl.setUserInfo(user));

		expect(ctrl.isFilledForm).toBe(true);
	});
});
