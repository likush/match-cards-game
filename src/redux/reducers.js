import { combineReducers } from 'redux';
import { SET_USERNAME } from './actions';

const userName = localStorage.getItem('userName');
const userDataInitialState = {userName, isUserNameExists: false};

function userData(state = userDataInitialState, action) {

  switch (action.type) {
    case SET_USERNAME:
      return {...state, userName: action.value};
    default:
      return state;
  }
}


const gameApp = combineReducers({
  userData
});

export default gameApp;
