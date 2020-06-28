import { combineReducers } from 'redux';
import cardsDataReducer from './cardsDataReducer';
import userDataReducer from './userDataReducer';
import gameSettingsReducer from './gameSettingsReducer';
import currentGameDataReducer from './currentGameDataReducer';

const rootReducer = combineReducers({
  userData: userDataReducer,
  gameSettings: gameSettingsReducer,
  cardsData: cardsDataReducer,
  currentGameData: currentGameDataReducer
});

export default rootReducer;
