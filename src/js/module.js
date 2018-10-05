import angular from 'angular';
import ngRedux from 'ng-redux';
import ngMessages from 'angular-messages';
import UIRouter from 'angular-ui-router';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import reducer from './reducers';
import FetchCardsService from './actions/FetchCardsService';

const logger = createLogger({
	collapsed: true,
});

const studyProject = angular.module('studyProject', [ngRedux, ngMessages, UIRouter])
	.config(($locationProvider, $stateProvider, $ngReduxProvider) => {
		$locationProvider.html5Mode({
            enabled : true,
            requireBase : false
		}).hashPrefix('');

		$stateProvider
			.state('results', {
				url: '/',
				component: 'appContainer'
			})
			.state('cardDetails', {
				url: '/details?{Id}',
				params: {
					card: null
				},
				component: 'cardItemDetails',
				resolve: {
					card: function($transition$) {
						return JSON.parse($transition$.params().card);
					}
				}
			}) 

		$ngReduxProvider.createStoreWith(reducer, [thunk, logger]);
	})
	
	.service('FetchCards', FetchCardsService);

export default studyProject;
