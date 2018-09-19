class ModalWindowController {
	constructor($scope) {
		this.$scope = $scope;
	}

	onSubmitUserForm() {
		if (this.$scope.userForm.$valid) {
			const user = {
				name: this.userName,
				age: this.userAge,
				annualIncome: this.userAnnualIncome,
			};
			this.fillUserInfo({ user });
		}
	}
}

export default ModalWindowController;
