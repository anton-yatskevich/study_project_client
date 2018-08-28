import API_URL from '../../constants/API_URL';

const mapStateToThis = (state) => {
	const { cards, isLoading } = state.cards;
	const { cardType } = state.cardFilters;
	return {
		cards,
		cardType,
		isLoading,
	};
};

class AppController {
	constructor($ngRedux, $scope, FetchCards) {
		const unsubscribe = $ngRedux.connect(mapStateToThis, FetchCards)(this);
		$scope.$on('$destroy', unsubscribe);
	}

	$onInit() {
		this.fetchCards(API_URL);
	}
}

export default AppController;
