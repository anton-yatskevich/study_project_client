import angular from 'angular';

import CreditCalculatorController from './CreditCalculator.controller';
import CreditCalculatorTemplate from './CreditCalculator.html';

export default angular.module('studyProject')
	.component('creditCalculator', {
		template: CreditCalculatorTemplate,
		controller: CreditCalculatorController,
		controllerAs: 'CreditCalculatorCtrl',
	});
