export const SET_USERNAME = 'GET_USERNAME';
export const SELECT_LANG = 'SELECT_LANG';

export const setUserName = (value) => ({type: SET_USERNAME, value});
export const selectLang = (lang) => ({type: SELECT_LANG, lang});
