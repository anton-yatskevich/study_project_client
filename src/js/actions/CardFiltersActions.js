import { SET_CARD_TYPE_FILTER, SET_SORT_TYPE } from '../constants/ActionTypes';

export const setCardType = cardType => ({
	type: SET_CARD_TYPE_FILTER,
	payload: cardType,
});

export const setSortType = value => ({
	type: SET_SORT_TYPE,
	payload: value,
});
