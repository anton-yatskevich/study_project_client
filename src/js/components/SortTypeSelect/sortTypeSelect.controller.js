import sortTypes from '../../constants/SORT_TYPES';
import { setSortType } from '../../actions/CardFiltersActions';

const mapStateToThis = (state) => {
	const { sortType } = state.cardFilters;
	return {
		sortType,
	};
};

class SortTypeSelectController {
	constructor($ngRedux, $scope) {
		const unsubscribe = $ngRedux.connect(mapStateToThis, { setSortType })(this);
		$scope.$on('$destroy', unsubscribe);
		this.sortTypes = sortTypes;
	}

	$onInit() {
		this.type = this.sortType;
	}

	changeType() {
		this.setSortType(this.type);
	}
}

export default SortTypeSelectController;
