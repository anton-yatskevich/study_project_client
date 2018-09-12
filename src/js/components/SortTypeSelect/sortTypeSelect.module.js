import angular from 'angular';

import SortTypeController from './sortTypeSelect.controller';
import SortTypeTemplate from './sortTypeSelect.html';

export default angular.module('studyProject')
	.component('sortTypeSelect', {
		template: SortTypeTemplate,
		controller: SortTypeController,
		controllerAs: 'SortTypeCtrl',
		bindings: {
			types: '<',
			selectedType: '<',
			onChange: '&',
		},
	});
