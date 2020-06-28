import { GET_IMAGES_STARTED, GET_IMAGES_SUCCESS } from '../actions/cardsDataActions';

const initialState = {
  cards: [],
  isLoading: false,
};

function cardsDataReducer (state = initialState, action) {
  switch (action.type) {
    case GET_IMAGES_STARTED:
      return {...state, isLoading: true};
    case GET_IMAGES_SUCCESS:
      return {...state, isLoading: false, cards: action.data};
    default:
      return state;
  }
}

export default cardsDataReducer;
