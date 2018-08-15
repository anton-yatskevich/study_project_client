import template from './index.html';

export default (ngModule) => {
	function SortTypeSelectFn() {
		return {
			restrict: 'E',
			template,
		};
	}
	ngModule.directive('sortTypeSelect', SortTypeSelectFn);
};
