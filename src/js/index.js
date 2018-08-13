import angular from 'angular'

const studyProject = angular.module('studyProject', []);

studyProject.controller('CardsFieldController', function CardsFieldController($scope, $http){
    $scope.title = 'CARDS';
    
    $http.get('http://localhost:3000/')
        .then(function(response) {
            $scope.cards = response.data;
        }, function(error) {
            console.log(error)
        });
});