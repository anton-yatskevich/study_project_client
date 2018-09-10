describe('Filter: costInMonth', () => {
	let $filter;

	beforeEach(() => {
		angular.mock.module('studyProject');
	});

	beforeEach(inject((_$filter_) => {
		$filter = _$filter_;
	}));

	it('should return filtered input', () => {
		const costInMonthFilter = $filter('costInMonth');
		const input = [
			{
				repayments: {
					costToYou: {
						month: 3,
					},
				},
			}, {
				repayments: {
					costToYou: {
						month: 2,
					},
				},
			}, {
				repayments: {
					costToYou: {
						month: 1,
					},
				},
			}];
		const correctOutput = [
			{
				repayments: {
					costToYou: {
						month: 3,
					},
				},
			}, {
				repayments: {
					costToYou: {
						month: 2,
					},
				},
			}];
		expect(costInMonthFilter(input, 2))
			.toEqual(correctOutput);
	});

	it('should return input, if month is not true', () => {
		const costInMonthFilter = $filter('costInMonth');
		const input = [
			{
				repayments: {
					costToYou: {
						month: 3,
					},
				},
			}, {
				repayments: {
					costToYou: {
						month: 2,
					},
				},
			}, {
				repayments: {
					costToYou: {
						month: 1,
					},
				},
			}];
		expect(costInMonthFilter(input, 0))
			.toEqual(input);
	});
});
