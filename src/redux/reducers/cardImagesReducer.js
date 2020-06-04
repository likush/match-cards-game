import { GET_IMAGES_STARTED, GET_IMAGES_SUCCESS } from '../actions';

function cardImagesReducer (state = {images: [], isLoading: false}, action) {
  switch (action.type) {
    case GET_IMAGES_STARTED:
      return {...state, isLoading: true};
    case GET_IMAGES_SUCCESS:
      return {...state, isLoading: false, images: action.data};
    default:
      return state;
  }
}

export default cardImagesReducer;
