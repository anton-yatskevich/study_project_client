import defaultFilters from '../constants/defaultFilters';
import {
	SET_CARD_TYPE_FILTER,
	SET_COST_AMOUNT_FILTER,
	SET_COST_IN_MONTH_FILTER,
	SET_SORT_TYPE,
} from '../constants/ActionTypes';

const cardFilters = (state = defaultFilters, action) => {
	switch (action.type) {
	case SET_CARD_TYPE_FILTER:
		return Object.assign({}, state, { cardType: action.payload });
	case SET_COST_AMOUNT_FILTER:
		return Object.assign({}, state, { costAmount: action.payload });
	case SET_COST_IN_MONTH_FILTER:
		return Object.assign({}, state, { costInMonth: action.payload });
	case SET_SORT_TYPE:
		return Object.assign({}, state, { sortType: action.payload });
	default:
		return state;
	}
};

export default cardFilters;
