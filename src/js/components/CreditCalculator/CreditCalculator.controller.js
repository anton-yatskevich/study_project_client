import { setCostAmountFilter, setCostInMonth } from '../../actions/CardFiltersActions';

const mapStateToThis = (state) => {
	const { costAmount, costInMonth } = state.cardFilters;
	return {
		costAmount,
		costInMonth,
	};
};

class CreditCalculatorController {
	constructor($ngRedux, $scope) {
		const unsubscribe = $ngRedux.connect(
			mapStateToThis,
			{ setCostAmountFilter, setCostInMonth },
		)(this);
		$scope.$on('$destroy', unsubscribe);
	}

	$onInit() {
		this.month = this.costInMonth;
		this.balance = this.costAmount;
	}

	changeCostInMonth() {
		this.setCostInMonth(this.month);
	}

	changeBalanceFee() {
		this.setCostAmountFilter(this.balance);
	}
}

export default CreditCalculatorController;
