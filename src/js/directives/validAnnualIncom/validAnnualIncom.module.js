import angular from 'angular';

const validAnnualIncome = angular.module('studyProject')
	.directive('validAnnualIncome', () => ({
		require: 'ngModel',
		link: (scope, elm, attrs, ctrl) => {
			ctrl.$parsers.unshift((viewValue) => {
				let value;
				const regex = /^[0-9]+$/;
				if (!regex.test(viewValue)) {
					ctrl.$setValidity('onlyNumbersValid', false);
				} else {
					ctrl.$setValidity('onlyNumbersValid', true);
					value = Number(viewValue);
					if (value <= 100000 && value > 0) {
						ctrl.$setValidity('validValue', true);
					} else {
						ctrl.$setValidity('validValue', false);
					}
				}
				return value || viewValue;
			});
		},
	}));

export default validAnnualIncome;
