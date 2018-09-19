describe('Component: appContainer', () => {
	let $compile;
	let $rootScope;
	let $httpBackend;
	let $window;
	let scope;
	let ctrl;
	let element;

	beforeEach(() => {
		angular.mock.module('studyProject');
	});

	beforeEach(inject((_$rootScope_, _$compile_, _$httpBackend_, _$window_) => {
		$rootScope = _$rootScope_;
		$compile = _$compile_;
		$httpBackend = _$httpBackend_;
		$window = _$window_;

		element = angular.element('<app-container></app-container>');
		scope = $rootScope.$new();
		element = $compile(element)(scope);
		ctrl = element.controller('appContainer');

		$httpBackend.whenGET('http://localhost:3000/').respond([{ card: 1 }, { card: 2 }]);
	}));

	it('should controller exist', () => {
		expect(ctrl).toBeDefined();
	});

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
});
