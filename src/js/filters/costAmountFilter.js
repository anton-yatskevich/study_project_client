import angular from 'angular';

export default angular.module('studyProject').filter('costAmount', () => (cards, amount) => {
	const filteredCards = [];
	if (!amount || !cards) {
		return cards;
	}
	for (let i = 0; i < cards.length; i += 1) {
		if (cards[i].repayments.costToYou.amount <= amount) {
			filteredCards.push(cards[i]);
		}
	}
	return filteredCards;
});
