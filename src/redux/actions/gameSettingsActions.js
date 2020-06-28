export const SELECT_LEVEL = 'SELECT_LEVEL';
export const SELECT_THEME = 'SELECT_THEME';
export const SELECT_SHIRT = 'SELECT_SHIRT';

export const selectLevel = (level) => ({type: SELECT_LEVEL, level});
export const selectTheme = (theme) => ({type: SELECT_THEME, theme});
export const selectShirt = (shirt) => ({type: SELECT_SHIRT, shirt});
