import angular from 'angular';

import CardTypeController from './cardTypeSelect.controller';
import CardTypeTemplate from './cardTypeSelect.html';

export default angular.module('studyProject').component('cardTypeSelect', {
	template: CardTypeTemplate,
	controller: CardTypeController,
	controllerAs: 'CardTypeCtrl',
	bindings: {
		types: '<',
		selectedType: '<',
		onChange: '&',
	},
});
