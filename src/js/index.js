import angular from 'angular';
import appContainer from './components/App/app.module';

const studyProject = angular.module('studyProject', [
	appContainer,
]);

// studyProject.component('initComp', {
// 	template: '<h1>hello</h1>',
// });

export default studyProject;


// import createComponents from './components/index';
// import availableCardTypes from './constants/cardTypes';
// import availableSortTypes from './constants/sortTypes';

// import './components/CardListItem/index.scss';

// const studyProject = angular.module('studyProject', []);

// studyProject.controller('CardsFieldController', ($scope, $http) => {
// 	$http.get('http://localhost:3000/')
// 		.then((response) => {
// 			$scope.cards = response.data;
// 		}, (error) => {
// 			console.log(error);
// 		});
// 	$scope.cardTypes = {
// 		selectedCardType: availableCardTypes[0],
// 		availableCardTypes,
// 	};
// 	$scope.sortTypes = {
// 		selectedSortType: availableSortTypes[0],
// 		availableSortTypes,
// 	};
// });

// createComponents(studyProject);
