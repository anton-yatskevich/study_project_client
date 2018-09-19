import angular from 'angular';

import NotificationTemplate from './notification.html';
import NotificationController from './notification.controller';

export default angular.module('studyProject')
	.component('notification', {
		template: NotificationTemplate,
		controller: NotificationController,
		controllerAs: 'NotificationCtrl',
		bindings: {
			closedByApp: '<',
			showModalWindow: '&',
		},
	});
