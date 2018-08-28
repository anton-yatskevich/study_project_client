import { RECEIVE_CARDS, REQUEST_CARDS } from '../constants/ActionTypes';

const initialState = {
	cards: [],
	isLoading: false,
};

const cards = (state = initialState, action) => {
	switch (action.type) {
	case REQUEST_CARDS:
		return Object.assign({}, state, { isLoading: action.payload });
	case RECEIVE_CARDS:
		return Object.assign({}, state, { cards: action.payload });
	default:
		return state;
	}
};

export default cards;
