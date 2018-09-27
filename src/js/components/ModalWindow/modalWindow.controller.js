class ModalWindowController {
	constructor($scope, userAddressService) {
		this.$scope = $scope;
		this.userAddressService = userAddressService;
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

	findAddress(postcode) {
		this.userAddressService.getAdresses(postcode)
			.then((data) => {
				if (data) {
					this.invalidPostcode = false;
					this.addresses = data;
					this.showAddressSelect(true);
				} else {
					this.invalidPostcode = true;
				}
			});
	}

	showAddressSelect(boolean) {
		this.visibleAddressSelect = boolean;
	}

	submitUserAddress(address) {
		this.showAddressSelect(false);
		this.userAddress = address;
		this.editableAddress = false;
	}

	editAddress() {
		this.editableAddress = true;
	}
}

export default ModalWindowController;
