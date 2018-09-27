import angular from 'angular';
import API_URL from '../constants/API_URL';

class UserAddressService {
	constructor($http) {
		this.$http = $http;
	}

	getAdresses(postcode) {
		return this.$http.get(`${API_URL}postcode/${postcode}`)
			.then((response) => {
				const addresses = this.checkResponse(response.data, postcode);
				return addresses;
			})
			.catch((error) => {
				throw Error(error);
			});
	}

	checkResponse(addresses, postcode) {
		if(Array.isArray(addresses)) {
			const addressesWithPostcode = addresses.map(address => `${address}, ${postcode.toUpperCase()}`);
			return addressesWithPostcode
		} else {
			return null;
		}
	}
}

export default angular.module('studyProject')
	.service('userAddressService', UserAddressService);
