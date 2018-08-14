import template from './index.html'

export default ngModule => {
    ngModule.directive('sortTypeSelect', SortTypeSelectFn);
    function SortTypeSelectFn() {
        return {
            restrict: 'E',
            template: template
        }
    }
}