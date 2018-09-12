class SortTypeSelectController {
	$onInit() {
		this.type = this.selectedType;
	}

	changeType() {
		this.onChange({ type: this.type });
	}
}

export default SortTypeSelectController;
