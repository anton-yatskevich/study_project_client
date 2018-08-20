import angular from 'angular';

const cardTypeSelect = angular.module('cardTypeSelect', []);

cardTypeSelect.component('cardTypeSelect', {
	template: '<h1> Card Type </h1>',
});

export default cardTypeSelect;
