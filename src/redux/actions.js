import Unsplash from 'unsplash-js';
import store from './store';
const accessKey = 'ce9ac8116b5a943a4f1251c058525b1c78f76b585b72510fe36113aee9a6e42c';

// user data actions
export const SET_USERNAME = 'GET_USERNAME';
export const SELECT_LANG = 'SELECT_LANG';

// game settings actions
export const SELECT_LEVEL = 'SELECT_LEVEL';
export const SELECT_THEME = 'SELECT_THEME';
export const SELECT_SHIRT = 'SELECT_SHIRT';

// card images actions
export const GET_IMAGES_STARTED = 'GET_IMAGES_STARTED';
export const GET_IMAGES_SUCCESS = 'GET_IMAGES_SUCCESS';
export const GET_IMAGES_FAILED = 'GET_IMAGES_FAILED';


// user data action creators
export const setUserName = (value) => ({type: SET_USERNAME, value});
// export const selectLang = (lang) => ({type: SELECT_LANG, lang});

// game settings action creators
export const selectLevel = (level) => ({type: SELECT_LEVEL, level});
export const selectTheme = (theme) => ({type: SELECT_THEME, theme});
export const selectShirt = (shirt) => ({type: SELECT_SHIRT, shirt});

// card images action creators
export const getImages = () => {
  return dispatch => {
    dispatch(getImagesStarted());

    const unsplash = new Unsplash({accessKey});
    const gameSettings = store.getState().gameSettings;
    const numberOfImages = gameSettings.level / 2;

    const getData = async () => {
      const response = await unsplash.search.photos(gameSettings.theme, 1, numberOfImages, {orientation: "portrait"});

      if (response.ok) {
        const data = await response.json();
        const temp = data.results.map(image => ({id: image.id, url: image.urls.small}));
        const images = [...temp, ...temp].sort(() => Math.random() - 0.5);
        dispatch(getImagesSuccess(images));
      }
    };

    getData();
  };
};

const getImagesStarted = () => ({type: GET_IMAGES_STARTED});

const getImagesSuccess = data => ({type: GET_IMAGES_SUCCESS, data});

// const getImagesFailed = error => ({type: GET_IMAGES_FAILED, payload: {error}});
