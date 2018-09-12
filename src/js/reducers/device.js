import { SET_DEVICE_TYPE } from '../constants/ActionTypes';

const device = (state = {}, action) => {
	switch (action.type) {
	case SET_DEVICE_TYPE:
		return action.payload;
	default:
		return state;
	}
};

export default device;
