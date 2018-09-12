import angular from 'angular';

import HeaderTemplate from './header.html';
import HeaderController from './header.controller';

export default angular.module('studyProject')
	.component('appHeader', {
		template: HeaderTemplate,
		controller: HeaderController,
		controllerAs: 'HeaderCtrl',
	});
