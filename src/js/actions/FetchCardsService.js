import * as types from '../constants/ActionTypes';

const cardsIsLoading = bool => ({
	type: types.REQUEST_CARDS,
	payload: bool,
});

const receiveCards = cards => ({
	type: types.RECEIVE_CARDS,
	payload: cards,
});

export default function asyncService($http) {
	function fetchCards(url) {
		return (dispatch) => {
			dispatch(cardsIsLoading(true));
			return $http.get(url)
				.then((response) => {
					dispatch(cardsIsLoading(false));
					dispatch(receiveCards(response.data));
				})
				.catch((error) => {
					throw Error(error);
				});
		};
	}
	return {
		fetchCards,
	};
}
