import {
  GET_IMAGES_STARTED,
  GET_IMAGES_SUCCESS,
  MARK_CARD_AS_MATCHED,
  ADD_CARD_ID,
  CLEAR_OPENED_CARDS,
  COUNT_CLICK
} from '../actions/cardsDataActions';

const initialState = {
  cards: [],
  isLoading: false,
  openedCards: {},
  matchedCards: [],
  clicksNumber: 0
};

function cardsDataReducer (state = initialState, action) {
  switch (action.type) {
    case GET_IMAGES_STARTED:
      return {...state, isLoading: true};
    case GET_IMAGES_SUCCESS:
      return {...state, isLoading: false, cards: action.data};
    case MARK_CARD_AS_MATCHED:
      const {openedCards, cards} = state;
      const newCards = cards.map(card => {
        if (openedCards[card.cardId]) {
          return {...card, isMatched: true};
        } else {
          return card;
        }
      });

      return {...state, cards: newCards};
    case ADD_CARD_ID:
      return {...state, openedCards: {...state.openedCards, [action.cardId]: action.imageId}};
    case CLEAR_OPENED_CARDS:
      return {...state, openedCards: {}};
    case COUNT_CLICK:
      const newClicksNumber = ++state.clicksNumber;
      return {...state, clicksNumber: newClicksNumber};
    default:
      return state;
  }
}

export default cardsDataReducer;
