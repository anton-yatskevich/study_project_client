describe('Filter: costAmount', () => {
	let $filter;

	beforeEach(() => {
		angular.mock.module('studyProject');
	});

	beforeEach(inject((_$filter_) => {
		$filter = _$filter_;
	}));

	it('should return filtered array', () => {
		const costAmountFilter = $filter('costAmount');
		const input = [
			{
				repayments: {
					costToYou: {
						amount: 3,
					},
				},
			}, {
				repayments: {
					costToYou: {
						amount: 2,
					},
				},
			}, {
				repayments: {
					costToYou: {
						amount: 1,
					},
				},
			}];
		const correctOutput = [
			{
				repayments: {
					costToYou: {
						amount: 2,
					},
				},
			}, {
				repayments: {
					costToYou: {
						amount: 1,
					},
				},
			}];
		expect(costAmountFilter(input, 2))
			.toEqual(correctOutput);
	});

	it('should return input, if amount is not true', () => {
		const costAmountFilter = $filter('costAmount');
		const input = [
			{
				repayments: {
					costToYou: {
						amount: 3,
					},
				},
			}, {
				repayments: {
					costToYou: {
						amount: 2,
					},
				},
			}, {
				repayments: {
					costToYou: {
						amount: 1,
					},
				},
			}];
		expect(costAmountFilter(input, 0))
			.toEqual(input);
	});
});
