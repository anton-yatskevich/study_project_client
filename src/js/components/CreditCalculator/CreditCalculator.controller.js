class CreditCalculatorController {
	$onInit() {
		this.costInMonth = this.month;
		this.balanceFee = this.balance;
	}

	changeCostInMonth() {
		this.onUpdateMonth({ month: this.costInMonth });
	}

	changeBalanceFee() {
		this.onUpdateBalanceFee({ balance: this.balanceFee });
	}
}

export default CreditCalculatorController;
