// const tlv = {
//   name: 'Tel Aviv',
//   key: '215854',
//   currentWeather: 'nice',
//   currentTemp: 25
// }

// const jslm = {
//   name: 'Jerusalem',
//   key: 12,
//   currentWeather: 'bad',
//   currentTemp: 12
// }

// const rishon = {
//   name: 'Rishon le\'Zion',
//   key: 13,
//   currentWeather: 'nu',
//   currentTemp: 10
// }

// const rishon2 = {
//   name: 'Sheni le\'Zion',
//   key: 15,
//   currentWeather: 'nu',
//   currentTemp: 10
// }

// const rishon3 = {
//   name: 'Shlishi le\'Zion',
//   key: 14,
//   currentWeather: 'nu',
//   currentTemp: 10
// }

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