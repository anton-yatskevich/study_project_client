import angular from 'angular';

import CardItemTemplate from './cardItem.html';
import CardItemController from './cardItem.controller';

export default angular.module('studyProject')
	.component('cardItem', {
		template: CardItemTemplate,
		controller: CardItemController,
		controllerAs: 'CardItemCtrl',
		bindings: {
			card: '<',
		},
	});
