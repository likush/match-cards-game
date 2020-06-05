import { combineReducers } from 'redux';
import cardImagesDataReducer from './cardImagesDataReducer';
import userDataReducer from './userDataReducer';
import gameSettingsReducer from './gameSettingsReducer';


const rootReducer = combineReducers({
  userData: userDataReducer,
  gameSettings: gameSettingsReducer,
  cardImagesData: cardImagesDataReducer
});

export default rootReducer;
