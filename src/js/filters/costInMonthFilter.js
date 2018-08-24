import angular from 'angular';

export default angular.module('studyProject').filter('costInMonth', () => (cards, month) => {
	const filteredCards = [];
	if (!month || !cards) {
		return cards;
	}
	for (let i = 0; i < cards.length; i += 1) {
		if (cards[i].repayments.costToYou.month >= month) {
			filteredCards.push(cards[i]);
		}
	}
	return filteredCards;
});
