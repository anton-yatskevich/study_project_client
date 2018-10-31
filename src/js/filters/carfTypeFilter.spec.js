describe('Filter: cardType', () => {
	let $filter;

	beforeEach(() => {
		angular.mock.module('studyProject');
	});

	beforeEach(inject((_$filter_) => {
		$filter = _$filter_;
	}));

	it('should return filtered array', () => {
		const cardTypeFilter = $filter('cardType');
		const input = [{ type: 1 }, { type: 2 }, { type: 1 }];
		const filterValue = { value: 1 };
		const correctOutput = [{ type: 1 }, { type: 1 }];

		expect(cardTypeFilter(input, filterValue)).toEqual(correctOutput);
	});

	it('should return input, if type is not true', () => {
		const cardTypeFilter = $filter('cardType');
		const input = [{ type: 1 }, { type: 2 }, { type: 1 }];

		expect(cardTypeFilter(input, 0)).toEqual(input);
	});
});