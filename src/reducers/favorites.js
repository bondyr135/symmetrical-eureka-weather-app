
/*
  Holds all the favored cities.
  No default values.
  WILL REFRESH on re-load
*/
const favoritesReducer = (state = [], action) => {

  switch (action.type) {
    case 'ADD_FAVORITE':
      if (state.every(city => city.key !== action.payload.key)) {
        state.push(action.payload);
      }
      return state;
    case 'REMOVE_FAVORITE':
      const filteredState = state.filter(city => city.key !== action.payload.key);
      return filteredState;
    default: return state;
  }
}

export default favoritesReducer;