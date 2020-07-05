import { combineReducers } from 'redux';
import cardsDataReducer from './cardsDataReducer';
import userDataReducer from './userDataReducer';
import gameSettingsReducer from './gameSettingsReducer';

const rootReducer = combineReducers({
  userData: userDataReducer,
  gameSettings: gameSettingsReducer,
  cardsData: cardsDataReducer,
});

export default rootReducer;
