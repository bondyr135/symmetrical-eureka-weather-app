import currentCityReducer from './currentCity';
import favoritesReducer from './favorites';
import modalReducer from './modal';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  favorites: favoritesReducer,
  currentCity: currentCityReducer,
  modal: modalReducer
})

export default rootReducer;