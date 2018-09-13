import * as types from '../constants/ActionTypes';

export const showModalWindow = boolean => ({
	type: types.SHOW_MODAL_WINDOW,
	payload: boolean,
});

export const fillUserInfo = () => ({
	type: types.FILL_USER_INFO,
	payload: true,
});
