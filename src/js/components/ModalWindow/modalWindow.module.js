import angular from 'angular';

import ModalWindowTemplate from './modalWindow.html';
import ModalWindowController from './modalWindow.controller';

export default angular.module('studyProject')
	.component('modalWindow', {
		template: ModalWindowTemplate,
		controller: ModalWindowController,
		controllerAs: 'ModalWindowCtrl',
		transclude: true,
		bindings: {
			fillUserInfo: '&',
		},
	});
