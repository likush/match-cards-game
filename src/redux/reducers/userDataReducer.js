import { SELECT_LANG, SET_USERNAME } from '../actions/userDataActions';


const userName = localStorage.getItem('userName') || '';
const initialState = {userName, lang: 'en'};

function userDataReducer (state = initialState, action) {
  switch (action.type) {
    case SET_USERNAME:
      return {...state, userName: action.value};
    case SELECT_LANG:
      return {...state, lang: action.lang};
    default:
      return state;
  }
}

export default userDataReducer;
