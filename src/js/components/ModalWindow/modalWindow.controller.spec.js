describe('Component: modalWindow', () => {
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

		element = angular.element('<modal-window></modal-window>');
		scope = $rootScope.$new();
		element = $compile(element)(scope);
		ctrl = element.controller('modalWindow');
		scope.$digest();
	}));

	it('should controller exist', () => {
		expect(ctrl).toBeDefined();
	});

	it('should valid userName input', () => {
		ctrl.$scope.userForm.userName.$setViewValue('a');
		ctrl.$scope.userForm.userName.$commitViewValue();

		expect(ctrl.$scope.userForm.userName.$valid).toBe(false);

		ctrl.$scope.userForm.userName.$setViewValue('valid');
		ctrl.$scope.userForm.userName.$commitViewValue();

		expect(ctrl.$scope.userForm.userName.$valid).toBe(true);
	});

	it('should valid user age input', () => {
		const currentDate = new Date();
		const currentYear = currentDate.getFullYear();
		const currentMonth = currentDate.getMonth() + 1;
		const currentDay = currentDate.getDate();

		ctrl.$scope.userForm.userAge.$setViewValue('1/2/3');
		ctrl.$scope.userForm.userAge.$commitViewValue();

		expect(ctrl.$scope.userForm.userAge.$valid).toBe(false);

		ctrl.$scope.userForm.userAge.$setViewValue('1/1/1900');
		ctrl.$scope.userForm.userAge.$commitViewValue();

		expect(ctrl.$scope.userForm.userAge.$valid).toBe(false);

		ctrl.$scope.userForm.userAge.$setViewValue(`31/12/${currentYear - 20}`);
		ctrl.$scope.userForm.userAge.$commitViewValue();

		expect(ctrl.$scope.userForm.userAge.$valid).toBe(true);
		expect(ctrl.userAge).toEqual(19);

		ctrl.$scope.userForm.userAge.$setViewValue(`1/1/${currentYear - 20}`);
		ctrl.$scope.userForm.userAge.$commitViewValue();

		expect(ctrl.userAge).toEqual(20);

		ctrl.$scope.userForm.userAge.$setViewValue(`${currentDay + 1}/${currentMonth}/${currentYear - 20}`);
		ctrl.$scope.userForm.userAge.$commitViewValue();

		expect(ctrl.userAge).toEqual(19);
	});

	it('should valid annual income input', () => {
		ctrl.$scope.userForm.userAnnualIncome.$setViewValue('one');
		ctrl.$scope.userForm.userAnnualIncome.$commitViewValue();

		expect(ctrl.$scope.userForm.userAnnualIncome.$valid).toBe(false);

		ctrl.$scope.userForm.userAnnualIncome.$setViewValue(1);
		ctrl.$scope.userForm.userAnnualIncome.$commitViewValue();

		expect(ctrl.$scope.userForm.userAnnualIncome.$valid).toBe(true);

		ctrl.$scope.userForm.userAnnualIncome.$setViewValue(999999);
		ctrl.$scope.userForm.userAnnualIncome.$commitViewValue();

		expect(ctrl.$scope.userForm.userAnnualIncome.$valid).toBe(false);
	});

	it('should submit form', () => {
		spyOn(ctrl, 'fillUserInfo');

		ctrl.onSubmitUserForm();

		expect(ctrl.$scope.userForm.$valid).toBe(false);
		expect(ctrl.fillUserInfo.calls.count()).toEqual(0);

		ctrl.$scope.userForm.userName.$setViewValue('valid');
		ctrl.$scope.userForm.userName.$commitViewValue();
		ctrl.$scope.userForm.userAge.$setViewValue('1/1/1990');
		ctrl.$scope.userForm.userAge.$commitViewValue();
		ctrl.$scope.userForm.userAnnualIncome.$setViewValue(1);
		ctrl.$scope.userForm.userAnnualIncome.$commitViewValue();

		ctrl.onSubmitUserForm();

		expect(ctrl.$scope.userForm.$valid).toBe(true);
		expect(ctrl.fillUserInfo).toHaveBeenCalled();
	});
});
