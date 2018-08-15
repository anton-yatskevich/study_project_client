import template from './index.html';

export default (ngModule) => {
	function CardTypesFn() {
		return {
			restrict: 'E',
			template,
		};
	}
	ngModule.directive('cardTypeSelect', CardTypesFn);
};
