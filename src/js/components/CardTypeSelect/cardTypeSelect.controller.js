import cardTypes from '../../constants/CARD_TYPES';
import { setCardType } from '../../actions/CardFiltersActions';

const mapStateToThis = (state) => {
	const { cardType } = state.cardFilters;
	return {
		cardType,
	};
};

class CardTypeSelectController {
	constructor($ngRedux, $scope) {
		const unsubscribe = $ngRedux.connect(mapStateToThis, { setCardType })(this);
		$scope.$on('$destroy', unsubscribe);
		this.cardTypes = cardTypes;
	}

	$onInit() {
		this.type = this.cardType;
	}

	changeType() {
		this.setCardType(this.type);
	}
}

export default CardTypeSelectController;
