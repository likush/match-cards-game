// user data actions name
export const SET_USERNAME = 'GET_USERNAME';
export const SELECT_LANG = 'SELECT_LANG';

// game settings actions name
export const SELECT_DIFFICULTY = 'SELECT_DIFFICULTY';
export const SELECT_THEME = 'SELECT_THEME';
export const SELECT_SHIRT = 'SELECT_SHIRT';


// user data action creators
export const setUserName = (value) => ({type: SET_USERNAME, value});
export const selectLang = (lang) => ({type: SELECT_LANG, lang});

// game settings action creators
export const selectDifficulty = (difficulty) => ({type: SELECT_DIFFICULTY, difficulty});
export const selectTheme = (theme) => ({type: SELECT_THEME, theme});
export const selectShirt = (shirt) => ({type: SELECT_SHIRT, shirt});
