import angular from 'angular';
import API_URL from '../../constants/API_URL';
import * as CardFilterActions from '../../actions/CardFiltersActions';
import DeviceTypeAction from '../../actions/DeviceTypeActions';
import CARD_TYPES from '../../constants/CARD_TYPES';
import SORT_TYPES from '../../constants/SORT_TYPES';


const mapStateToThis = (state) => {
	const { cards, isLoading } = state.cards;
	const {
		cardType, sortType,
	} = state.cardFilters;
	const { deviceName } = state.device;
	return {
		cards,
		sortType,
		cardType,
		isLoading,
		deviceName,
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
	}
}

export default AppController;
