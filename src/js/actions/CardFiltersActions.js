import * as types from '../constants/ActionTypes';

export const setCardType = cardType => ({
	type: types.SET_CARD_TYPE_FILTER,
	payload: cardType,
});

export const setCostAmountFilter = amount => ({
	type: types.SET_COST_AMOUNT_FILTER,
	payload: amount,
});

export const setCostInMonth = month => ({
	type: types.SET_COST_IN_MONTH_FILTER,
	payload: month,
});

export const setSortType = value => ({
	type: types.SET_SORT_TYPE,
	payload: value,
});
