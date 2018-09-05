import angular from 'angular';

import CardListTemplate from './cardList.html';
import CardListController from './cardList.controller';

export default angular.module('studyProject')
	.component('cardList', {
		template: CardListTemplate,
		controller: CardListController,
		controllerAs: 'CardListCtrl',
		bindings: {
			costInMonth: '<',
			costAmount: '<',
			cardType: '<',
			sortType: '<',
			cards: '<',
			device: '<',
		},
	});
