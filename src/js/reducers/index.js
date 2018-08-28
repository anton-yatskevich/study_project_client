import { combineReducers } from 'redux';

import cardFilters from './cardFilters';
import cards from './cards';


const reducer = combineReducers({
	cardFilters,
	cards,
});

export default reducer;
