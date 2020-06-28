export const CLEAR_OPENED_CARDS = 'CLEAR_OPENED_CARDS';
export const ADD_CARD_ID = 'ADD_CARD_ID';

export const openCard = (cardId, imageId) => {
  return (dispatch, getState) => {

    const openedImagesCount = Object.keys(getState().currentGameData.openedCards).length;

    if (openedImagesCount === 2) {
      dispatch(clearOpenedCards());
    }

    dispatch(addCardId(cardId, imageId));
  };
};

export const clearOpenedCards = () => ({type: CLEAR_OPENED_CARDS});
export const addCardId = (cardId, imageId) => ({type: ADD_CARD_ID, cardId, imageId});
