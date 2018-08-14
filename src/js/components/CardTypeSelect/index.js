import template from './index.html'

export default ngModule => {
    ngModule.directive('cardTypeSelect', CardTypesFn);
    function CardTypesFn() {
        return {
            restrict: 'E',
            template: template
        }
    }
}