import angular from 'angular';

import AppController from './app.controller';
import appTemplate from './app.template.html';

export default angular.module('studyProject').component('appContainer', {
	template: appTemplate,
	controller: AppController,
	controllerAs: 'AppCtrl',
});
