import { SELECT_LEVEL, SELECT_SHIRT, SELECT_THEME } from '../actions/gameSettingsActions';

const initialState = {
  level: 20,
  theme: 'city',
  shirt: 'green',
};

function gameSettingsReducer (state = initialState, action) {
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

export default gameSettingsReducer;
