import { SET_DEVICE_TYPE } from '../constants/ActionTypes';
import DEVICES_WIDTH from '../constants/DEVICES_WIDTH';

export const setDeviceType = value => {
	let i = 0;
	let length = DEVICES_WIDTH.length;
	let device = DEVICES_WIDTH[0];
	for(i; i < length; i++) {
		let { minWidth, maxWidth } = DEVICES_WIDTH[i];
		if (value >= minWidth && value < maxWidth) {
			device = DEVICES_WIDTH[i];
		}
	};
	return {
		type: SET_DEVICE_TYPE,
		payload: device,
	}
};
