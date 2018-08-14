import angular from 'angular';

import Components from './components/index';
import availableCardTypes from './constants/cardTypes';
import availableSortTypes from './constants/sortTypes';

import './components/CardListItem/index.scss'

const studyProject = angular.module('studyProject', []);

studyProject.controller('CardsFieldController', function CardsFieldController($scope, $http){

    $http.get('http://localhost:3000/')
        .then(function(response) {
            $scope.cards = response.data;
        }, function(error) {
            console.log(error)
        });

    $scope.cardTypes = {
        selectedCardType: availableCardTypes[0],
        availableCardTypes: availableCardTypes
    };

    $scope.sortTypes = {    
        selectedSortType: availableSortTypes[0],    
        availableSortTypes: availableSortTypes,
    };   
    
});

Components(studyProject);