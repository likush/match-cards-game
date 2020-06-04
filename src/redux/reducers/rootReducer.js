import { combineReducers } from 'redux';
import cardImagesReducer from './cardImagesReducer';
import userDataReducer from './userDataReducer';
import gameSettingsReducer from './gameSettingsReducer';


const rootReducer = combineReducers({
  userData: userDataReducer,
  gameSettings: gameSettingsReducer,
  cardImages: cardImagesReducer
});

export default rootReducer;
