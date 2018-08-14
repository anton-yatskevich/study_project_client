import angular from 'angular'
import CardTypeSelect from './components/index'

const studyProject = angular.module('studyProject', []);

studyProject.controller('CardsFieldController', function CardsFieldController($scope, $http){
    $scope.title = 'CARDS';

    $scope.cardTypes = {
        selectedCardType: 'Balance transfer',
        availableCardTypes: [
            {
                name: 'Balance transfer'
            },
            {
                name: 'Purchase',
            },
            {
                name: 'Spend abroad',
            },
        ]
    }
    
    // $scope.selectedCardType = $scope.cardTypes.selectedCardType;
    $http.get('http://localhost:3000/')
        .then(function(response) {
            $scope.cards = response.data;
        }, function(error) {
            console.log(error)
        });
});

CardTypeSelect(studyProject);