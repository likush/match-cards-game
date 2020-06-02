import { combineReducers } from 'redux';
import { SET_USERNAME, SELECT_SHIRT, SELECT_THEME, SELECT_LEVEL, SELECT_LANG} from './actions';

const userName = localStorage.getItem('userName') || '';
const userDataInitialState = {userName, lang: 'en'};

function userData (state = userDataInitialState, action) {
  switch (action.type) {
    case SET_USERNAME:
      return {...state, userName: action.value};
    case SELECT_LANG:
      return {...state, lang: action.lang};
    default:
      return state;
  }
}

const initialGameSettings = {
  level: 12,
  theme: 'cats',
  shirt: 'peach',
};

function gameSettings (state = initialGameSettings, action) {
  switch (action.type) {
    case SELECT_LEVEL:
      return {...state, level: action.level};
    case SELECT_SHIRT:
      return {...state, shirt: action.shirt};
    case SELECT_THEME:
      return {...state, theme: action.theme};
    default:
      return state;
  }
}


const gameApp = combineReducers({
  userData,
  gameSettings
});

export default gameApp;
