import angular from 'angular';

import CardItemDetailsTemplate from './cardItemDetails.html';
import CardItemDetailsController from './cardItemdetails.controller';

export default angular.module('studyProject')
	.component('cardItemDetails', {
		template: CardItemDetailsTemplate,
		controller: CardItemDetailsController,
		controllerAs: 'CardItemDetailsCtrl',
		bindings: {
			card: '<'
		},
	});
