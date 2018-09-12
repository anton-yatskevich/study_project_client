import angular from 'angular';

class ResizeDirectiveCtrl {
	constructor($window) {
		this.window = $window;
	}

	$onInit() {
		const width = this.window.innerWidth;
		this.setDeviceType({ width });
		angular.element(this.window).on('resize', () => this.onResize());
	}

	onResize() {
		const width = this.window.innerWidth;
		this.setDeviceType({ width });
	}
}

export default angular.module('studyProject')
	.directive('resize', () => ({
		restrict: 'A',
		scope: {
			setDeviceType: '&resize',
		},
		controller: ResizeDirectiveCtrl,
		bindToController: true,
	}));
