import { combineReducers } from 'redux';

import cardFilters from './cardFilters';
import cards from './cards';
import device from './device';

const reducer = combineReducers({
	cardFilters,
	cards,
	device,
});

export default reducer;
