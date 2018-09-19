import angular from 'angular';

const userAge = angular.module('studyProject')
	.directive('userAge', () => ({
		require: 'ngModel',
		link: (scope, elm, attrs, ctrl) => {
			ctrl.$parsers.unshift((viewValue) => {
				let age;
				const regex = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
				if (!regex.test(viewValue)) {
					ctrl.$setValidity('validDateFormat', false);
				} else {
					ctrl.$setValidity('validDateFormat', true);
					const dateArr = viewValue.split('/');
					const [day, month, year] = dateArr;
					const currentDate = new Date();
					const currentYear = currentDate.getFullYear();
					const currentMonth = currentDate.getMonth() + 1;
					const currentDay = currentDate.getDate();
					age = currentYear - year;
					if (month > currentMonth) {
						age -= 1;
					} else if (Number(month) === Number(currentMonth) && day > currentDay) {
						age -= 1;
					}
					if (age >= 18 && age < 100) {
						ctrl.$setValidity('validAge', true);
					} else {
						ctrl.$setValidity('validAge', false);
					}
				}
				return age || viewValue;
			});
		},
	}));

export default userAge;
