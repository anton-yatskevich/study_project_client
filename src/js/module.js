import angular from 'angular';
import ngRedux from 'ng-redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import reducer from './reducers';
import FetchCardsService from './actions/FetchCardsService';

const logger = createLogger({
	collapsed: true,
});

const studyProject = angular.module('studyProject', [ngRedux])
	.config(($ngReduxProvider) => {
		$ngReduxProvider.createStoreWith(reducer, [thunk, logger]);
	})
	.service('FetchCards', FetchCardsService);

export default studyProject;
