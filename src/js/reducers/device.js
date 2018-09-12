import { SET_DEVICE_TYPE } from '../constants/ActionTypes';
import DEVICES from '../constants/DEVICES_WIDTH';

const device = (state = DEVICES[0], action) => {
	switch (action.type) {
	case SET_DEVICE_TYPE:
		return action.payload;
	default:
		return state;
	}
};

export default device;
