import cardTypes from '../../constants/cardTypes';
import sortTypes from '../../constants/sortTypes';

export default class {
	constructor() {
		this.cardTypes = cardTypes;
		this.sortTypes = sortTypes;
		this.balance = 10;
		this.costInMonth = 3;
	}

	$onInit() {
		[this.cardType] = cardTypes;
		[this.sortType] = sortTypes;
	}

	selectCardType(type) {
		this.cardType = type;
	}

	selectSortType(value) {
		this.sortType = value;
	}

	selectBalance(value) {
		this.balance = value;
	}

	selectCostInMonth(value) {
		this.costInMonth = value;
	}
}
