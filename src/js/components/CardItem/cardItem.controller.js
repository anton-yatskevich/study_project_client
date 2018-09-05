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
}

export default CardItemController;
