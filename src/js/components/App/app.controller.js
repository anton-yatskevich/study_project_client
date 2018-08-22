import cardTypes from '../../constants/cardTypes';
import sortTypes from '../../constants/sortTypes';

export default class {
	constructor($http) {
		this.http = $http;
		this.cardTypes = cardTypes;
		this.sortTypes = sortTypes;
		[this.cardType] = cardTypes;
		[this.sortType] = sortTypes;
		this.balanceFee = 10;
		this.costInMonth = 3;
	}

	$onInit() {
		this.getAllCards();
	}

	getAllCards() {
		this.http.get('http://localhost:3000/')
			.then((response) => {
				this.cards = response.data;
			}, (error) => {
				console.log(error);
			});
	}

	selectCardType(type) {
		this.cardType = type;
	}

	selectSortType(value) {
		this.sortType = value;
	}

	setBalanceFee(value) {
		this.balanceFee = value;
	}

	setCostInMonth(value) {
		this.costInMonth = value;
	}
}
