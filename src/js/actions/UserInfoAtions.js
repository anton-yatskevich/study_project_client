import { SHOW_MODAL_WINDOW, FILL_USER_INFO } from '../constants/ActionTypes';

export const showModalWindow = boolean => ({
	type: SHOW_MODAL_WINDOW,
	payload: boolean,
});

export const setUserInfo = user => ({
	type: FILL_USER_INFO,
	payload: user,
});
