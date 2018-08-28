const mapStateToThis = (state) => {
	const { costInMonth, costAmount, cardType } = state.cardFilters;
	const sortType = state.cardFilters.sortType.sortField;
	const { cards } = state.cards;
	return {
		costInMonth,
		costAmount,
		cardType,
		sortType,
		cards,
	};
};

class CardListController {
	constructor($ngRedux, $scope, $http) {
		this.http = $http;
		const unsubscribe = $ngRedux.connect(mapStateToThis)(this);
		$scope.$on('$destroy', unsubscribe);
	}
}

export default CardListController;
