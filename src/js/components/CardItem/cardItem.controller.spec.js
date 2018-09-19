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

	it('should confirm that sort order is Balance fee', () => {
		ctrl.sortOrderField = 'balanceFee';
		expect(ctrl.isBalanceFeeSortOrder()).toBe(true);
		expect(ctrl.isCostToYouSortOrder()).toBe(false);
	});

	it('should confirm that sort order is Actual fee', () => {
		ctrl.sortOrderField = 'actualFee';
		expect(ctrl.isActualFeeOrder()).toBe(true);
		expect(ctrl.isCostToYouSortOrder()).toBe(false);
	});

	it('should confirm that sort order is Cost To You', () => {
		ctrl.sortOrderField = 'costToYou';
		expect(ctrl.isCostToYouSortOrder()).toBe(true);
		expect(ctrl.isBalanceFeeSortOrder()).toBe(false);
	});

	it('should calculate correct user savings', () => {
		ctrl.card = { repayments: { costToYou: { amount: 1 } } };
		expect(ctrl.calcSavings()).toEqual(ctrl.card.repayments.costToYou.amount / 2);

		ctrl.annualIncome = 0;
		expect(ctrl.calcSavings()).toEqual(ctrl.card.repayments.costToYou.amount * 2);
	});
});
