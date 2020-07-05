import Unsplash from 'unsplash-js';
import createArrayOfCards from '../../utils/createArrayOfCards';

const accessKey = 'ce9ac8116b5a943a4f1251c058525b1c78f76b585b72510fe36113aee9a6e42c';

export const GET_IMAGES_STARTED = 'GET_IMAGES_STARTED';
export const GET_IMAGES_SUCCESS = 'GET_IMAGES_SUCCESS';
export const GET_IMAGES_FAILED = 'GET_IMAGES_FAILED';

export const MARK_CARD_AS_MATCHED = 'MARK_CARD_AS_MATCHED';
export const CLEAR_OPENED_CARDS = 'CLEAR_OPENED_CARDS';
export const ADD_CARD_ID = 'ADD_CARD_ID';

export const COUNT_CLICK = 'COUNT_CLICK';

export const getCardsImages = () => {
  return (dispatch, getStore) => {
    dispatch(getImagesStarted());

    const unsplash = new Unsplash({accessKey});
    const gameSettings = getStore().gameSettings;
    const numberOfImages = gameSettings.level / 2;

    const getData = async () => {
      const response = await unsplash.search.photos(gameSettings.theme, 1, numberOfImages, {orientation: "portrait"});

      if (response.ok) {
        const data = await response.json();
        const cardsData = createArrayOfCards(data);
        dispatch(getImagesSuccess(cardsData));
      } else {
        dispatch(getImagesFailed('Something went wrong'));
      }
    };

    getData();
  };
};

export const checkIsCardOpen = (cardId, imageId) => {
  return (dispatch, getState) => {
    dispatch(countClick());

    const openedCards = getState().cardsData.openedCards;
    if (openedCards[cardId]) {
      dispatch(clearOpenedCards());
    } else {
      dispatch(openCard(cardId, imageId));
    }
  };
};

export const openCard = (cardId, imageId) => {
  return (dispatch, getState) => {
    const cardsData = getState().cardsData;
    const openedImagesCount = Object.keys(cardsData.openedCards).length;


    if (openedImagesCount === 1) {
      dispatch(addCardId(cardId, imageId));
      dispatch(checkCardsImages());
    }
    dispatch(addCardId(cardId, imageId));
  };
};

export const checkCardsImages = () => {
  return (dispatch, getState) => {
    const openedImages = Object.values(getState().cardsData.openedCards);
    const isCardsSame = openedImages[0] === openedImages[1];
    if (isCardsSame) {
      setTimeout(() => {
        dispatch(markCardAsMatched());
      }, 1000);
      setTimeout(() => dispatch(clearOpenedCards()), 1500);
    } else {
      setTimeout(() => dispatch(clearOpenedCards()), 1000);
    }
  };
};

const getImagesStarted = () => ({type: GET_IMAGES_STARTED});
const getImagesSuccess = data => ({type: GET_IMAGES_SUCCESS, data});
const getImagesFailed = error => ({type: GET_IMAGES_FAILED, error});

export const addCardId = (cardId, imageId) => ({type: ADD_CARD_ID, cardId, imageId});
export const markCardAsMatched = () => ({type: MARK_CARD_AS_MATCHED});
export const clearOpenedCards = () => ({type: CLEAR_OPENED_CARDS});

export const countClick = () => ({type: COUNT_CLICK});
