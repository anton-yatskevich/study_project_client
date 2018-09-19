class NotificationController {
	constructor() {
		this.closedByUser = false;
	}

	isClosed() {
		return this.closedByUser || this.closedByApp;
	}

	closeNotification() {
		this.closedByUser = true;
	}
}

export default NotificationController;
