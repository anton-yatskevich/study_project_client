import * as types from '../constants/ActionTypes';

export const setCardType = cardType => ({
	type: types.SET_CARD_TYPE_FILTER,
	payload: cardType,
});

export const setSortType = value => ({
	type: types.SET_SORT_TYPE,
	payload: value,
});
