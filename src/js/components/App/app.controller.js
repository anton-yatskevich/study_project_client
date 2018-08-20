import cardTypes from '../../constants/cardTypes';
import sortTypes from '../../constants/sortTypes';

export default class {
	constructor() {
		this.cardTypes = cardTypes;
		[this.cardType] = cardTypes;
		[this.sortType] = sortTypes;
		this.balance = 10;
		this.costInMonth = 3;
	}

	selectCardType(value) {
		this.cardType = value;
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
