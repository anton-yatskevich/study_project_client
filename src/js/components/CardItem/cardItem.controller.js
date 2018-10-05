class CardItemController {
	isTablet() {
		return this.device === 'tablet';
	}

	isMobile() {
		return this.device === 'mobile';
	}

	isDesktop() {
		return this.device === 'desktop';
	}

	isBalanceFeeSortOrder() {
		return this.sortOrderField.split('.').indexOf('balanceFee') > -1;
	}

	isCostToYouSortOrder() {
		return this.sortOrderField.split('.').indexOf('costToYou') > -1;
	}

	isActualFeeOrder() {
		return this.sortOrderField.split('.').indexOf('actualFee') > -1;
	}

	calcSavings() {
		const potentialSavings = this.card.repayments.costToYou.amount * 2 - this.annualIncome / 12;
		return potentialSavings > 0 ? potentialSavings : this.card.repayments.costToYou.amount / 2;
	}

	get cardToJSON() {
		return JSON.stringify(this.card);
	}
}

export default CardItemController;
