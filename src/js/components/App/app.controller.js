import angular from 'angular';
import API_URL from '../../constants/API_URL';
import * as CardFilterActions from '../../actions/CardFiltersActions';
import * as DeviceTypeAction from '../../actions/DeviceTypeActions';
import CARD_TYPES from '../../constants/CARD_TYPES';
import SORT_TYPES from '../../constants/SORT_TYPES';


const mapStateToThis = (state) => {
	const { cards, isLoading } = state.cards;
	const {
		cardType, costAmount, costInMonth, sortType,
	} = state.cardFilters;
	const { minWidth, maxWidth } = state.device;
	return {
		cards,
		costAmount,
		costInMonth,
		sortType,
		cardType,
		isLoading,
		minWidth,
		maxWidth,
	};
};

class AppController {
	constructor($ngRedux, $scope, $window, FetchCards) {
		this.window = $window;
		this.$ngRedux = $ngRedux;
		this.FetchService = FetchCards;
		this.cardTypes = CARD_TYPES;
		this.sortTypes = SORT_TYPES;
		const unsubscribe = this.$ngRedux.connect(
			mapStateToThis,
			Object.assign({}, DeviceTypeAction, CardFilterActions),
		)(this);
		$scope.$on('$destroy', unsubscribe);
	}

	$onInit() {
		this.$ngRedux.dispatch(this.FetchService.fetchCards(API_URL));
		this.setDeviceType(this.window.innerWidth);
		angular.element(this.window).on('resize', () => this.onResize());
	}

	onResize() {
		const width = this.window.innerWidth;
		if (width < this.minWidth || width > this.maxWidth) {
			this.setDeviceType(width);
		}
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
