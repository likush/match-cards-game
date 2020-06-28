import { CLEAR_OPENED_CARDS, ADD_CARD_ID } from '../actions/currentGameDataActions';

const initialState = {
  openedCards: {}
};

function currentGameDataReducer (state = initialState, action) {
  switch (action.type) {
    case ADD_CARD_ID:
      return {...state, openedCards: {...state.openedCards, [action.cardId]: action.imageId}};
    case CLEAR_OPENED_CARDS:
      return {...state, openedCards: {}};
    default:
      return state;
  }
}

export default currentGameDataReducer;
