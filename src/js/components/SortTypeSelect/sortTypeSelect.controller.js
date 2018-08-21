export default class {
	$onInit() {
		this.type = this.selectedType;
	}

	changeType() {
		this.onChange({ type: this.type });
	}
}
