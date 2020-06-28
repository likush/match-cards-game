import Unsplash from 'unsplash-js';
import createArrayOfCards from '../../utils/createArrayOfCards';

const accessKey = 'ce9ac8116b5a943a4f1251c058525b1c78f76b585b72510fe36113aee9a6e42c';

export const GET_IMAGES_STARTED = 'GET_IMAGES_STARTED';
export const GET_IMAGES_SUCCESS = 'GET_IMAGES_SUCCESS';
export const GET_IMAGES_FAILED = 'GET_IMAGES_FAILED';

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

const getImagesStarted = () => ({type: GET_IMAGES_STARTED});

const getImagesSuccess = data => ({type: GET_IMAGES_SUCCESS, data});

const getImagesFailed = error => ({type: GET_IMAGES_FAILED, error});
