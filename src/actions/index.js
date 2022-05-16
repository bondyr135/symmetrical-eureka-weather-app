// import currentCityReducer from "../reducers/currentCity"

export const addFavorite = (city) => {
  return {
    type: 'ADD_FAVORITE',
    payload: {
      name: city.name,
      key: city.key,
      currentWeather: city.currentWeather,
      currentTemp: city.currentTemp
    }
  }
}

export const removeFavorite = (city) => {
  return {
    type: 'REMOVE_FAVORITE',
    payload: {
      name: city.name,
      key: city.key
    }
  }
}

export const currentCity = (city) => {
  return {
    type: 'SET_CURRENT_CITY',
    payload: {
      name: city.name,
      key: city.key,
      currentWeather: city.weather,
      currentTemp: city.temp
    }
  }
}

export const openModal = (reason) => {
  return {
    type: 'OPEN_MODAL',
    payload: {
      msg: reason
    }
  }
}

export const closeModal = () => {
  return {
    type: 'CLOSE_MODAL'
  }
}