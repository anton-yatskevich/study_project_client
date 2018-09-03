import API_URL from '../../constants/API_URL';
import * as CardFilterActions from '../../actions/CardFiltersActions';
import CARD_TYPES from '../../constants/CARD_TYPES';
import SORT_TYPES from '../../constants/SORT_TYPES';

const mapStateToThis = (state) => {
	const { cards, isLoading } = state.cards;
	const {
		cardType, costAmount, costInMonth, sortType,
	} = state.cardFilters;
	return {
		cards,
		costAmount,
		costInMonth,
		sortType,
		cardType,
		isLoading,
	};
};

class AppController {
	constructor($ngRedux, $scope, FetchCards) {
		this.$ngRedux = $ngRedux;
		this.FetchService = FetchCards;
		this.cardTypes = CARD_TYPES;
		this.sortTypes = SORT_TYPES;
		const unsubscribe = this.$ngRedux.connect(mapStateToThis, CardFilterActions)(this);
		$scope.$on('$destroy', unsubscribe);
	}

	$onInit() {
		this.$ngRedux.dispatch(this.FetchService.fetchCards(API_URL));
	}

	setCardType(type) {
		this.setCardType(type);
	}

	setSortType(value) {
		this.setSortType(value);
	}

	setBalanceFee(value) {
		this.setCostAmountFilter(value);
	}

	setCostInMonth(value) {
		this.setCostInMonth(value);
	}
}

export default AppController;
