import { combineReducers } from 'redux';

import cardFilters from './cardFilters';
import cards from './cards';
import device from './device';
import userInfo from './userInfo';

const reducer = combineReducers({
	cardFilters,
	cards,
	device,
	userInfo,
});

export default reducer;
