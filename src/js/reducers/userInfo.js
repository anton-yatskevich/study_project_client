import { SHOW_MODAL_WINDOW, FILL_USER_INFO } from '../constants/ActionTypes';

const initialState = {
	isVisibleForm: false,
	isFilledForm: false,
	name: '',
	age: 0,
	annualIncome: 0,
};

const userInfo = (state = initialState, action) => {
	switch (action.type) {
	case SHOW_MODAL_WINDOW:
		return Object.assign({}, state, { isVisibleForm: action.payload });
	case FILL_USER_INFO:
		return Object.assign({}, state, {
			isFilledForm: true,
			isVisibleForm: false,
			name: action.payload.name,
			age: action.payload.age,
			annualIncome: action.payload.annualIncome,
		});
	default:
		return state;
	}
};

export default userInfo;
