import { SET_DEVICE_TYPE } from '../constants/ActionTypes';
import DEVICES_WIDTH from '../constants/DEVICES_WIDTH';

const selectDevice = (value) => {
	const { length } = DEVICES_WIDTH;
	let device = DEVICES_WIDTH[0];
	for (let i = 0; i < length; i += 1) {
		const { minWidth, maxWidth } = DEVICES_WIDTH[i];
		if (value >= minWidth && value < maxWidth) {
			device = DEVICES_WIDTH[i];
		}
	}
	return {
		type: SET_DEVICE_TYPE,
		payload: device,
	};
};

const setDeviceType = value => ((dispatch, getState) => {
	const { minWidth, maxWidth } = getState().device;
	if (value < minWidth || value >= maxWidth) {
		dispatch(selectDevice(value));
	}
});

export default { setDeviceType };
