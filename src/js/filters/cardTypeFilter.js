import angular from 'angular';

export default angular.module('studyProject')
	.filter('cardType', () => (cards, type) => {
		const filteredCards = [];
		if (!type.value || !cards) {
			return cards;
		}
		for (let i = 0; i < cards.length; i += 1) {
			if (cards[i].type === type.value) {
				filteredCards.push(cards[i]);
			}
		}
		return filteredCards;
	});
