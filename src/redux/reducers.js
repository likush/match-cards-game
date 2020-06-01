import { combineReducers } from 'redux';
import { SET_USERNAME, SELECT_SHIRT, SELECT_THEME, SELECT_DIFFICULTY, SELECT_LANG} from './actions';

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
  difficulty: 12,
  shirt: '',
  theme: 'flowers'
};

function gameSettings (state = initialGameSettings, action) {
  switch (action.type) {
    case SELECT_DIFFICULTY:
      return {...state, difficulty: action.difficulty};
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
