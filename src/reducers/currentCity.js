
const INITIAL_STATE = {
  name: 'Tel Aviv',
  key: '215854'
}

/*
  Holds the city currently displayed.
  Default city: Tel Aviv
*/

const currentCityReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_CURRENT_CITY':
      return state = action.payload;
    default:
      return state;
  }
}

export default currentCityReducer;