import * as types from '../constants/ActionTypes';

export const showModalWindow = boolean => ({
	type: types.SHOW_MODAL_WINDOW,
	payload: boolean,
});

export const setUserInfo = user => ({
	type: types.FILL_USER_INFO,
	payload: user,
});
