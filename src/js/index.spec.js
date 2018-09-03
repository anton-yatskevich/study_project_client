describe('Sample test', () => {
	it('Condition is true', () => {
		expect('AngularJS').toBe('AngularJS');
	});
});

describe('Fake controller', () => {
	beforeEach(() => {
		angular.mock.module('studyProject');
	});

	it('name', inject(($controller) => {
		const name = 'John Doe';
		const controller = $controller('nameFormatterCtrl');
		controller.name = name;

		expect(controller.getFormattedName()).toEqual(`Name: ${name}`);
	}));
});

describe('card type filter', () => {
	let $filter;

	beforeEach(() => {
		angular.mock.module('studyProject');
	});

	beforeEach(inject((_$filter_) => {
		$filter = _$filter_;
	}));

	it('returns the correct value when given a string of chars', () => {
		const cardType = $filter('cardType');
		expect(cardType([{ type: 1 }, { type: 2 }, { type: 1 }], { value: 1 }))
			.toEqual([{ type: 1 }, { type: 1 }]);
	});
});

describe('aComponent', () => {
	let ctrl;

	beforeEach(angular.mock.module('studyProject'));
	
	beforeEach(inject(($componentController) => {
		ctrl = $componentController('nameFormatter');
	}));

    it('should instantiate the ctrl', () => {
        expect(ctrl).toBeDefined();
    });
});
