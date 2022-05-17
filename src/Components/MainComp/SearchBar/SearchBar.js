import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { currentCity, openModal } from '../../../actions/index';
import ErrorModal from '../../ErrorModal/ErrorModal'

import { Paper, InputBase } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

import './SearchBar.css';


// import * as Jerusalem from '../../../mock/mockJSLM'
// import key from '../../../key';
const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = 'http://dataservice.accuweather.com';

export default function SearchBar() {

  const defaultCity = useSelector(state => state.currentCity);
  const dispatch = useDispatch();
  const [searchString, setSearchString] = useState("");
  let presentedString = "";


  const getCityKey = async () => {
    try {
      const city = {};
      const searchResponse = await fetch(BASE_URL +
        `/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${searchString}`);
      console.log(searchResponse)
      const dsearchData = await searchResponse.json();
      if (dsearchData !== []) {
        city.name = dsearchData[0].LocalizedName;
        city.key = dsearchData[0].Key;
      }

      return city;
    } catch (e) {
      dispatch(openModal("Something went wrong with the search... \n Are you sure of your spelling?"));
    }
  };


  const getCityCurrentWeather = async (city) => {
    try {
      const weatherResponse = await fetch(BASE_URL +
        `/currentconditions/v1/${city.key}?apikey=${API_KEY}&metric=true`);
      const weatherData = await weatherResponse.json();

      city.weather = weatherData[0].WeatherText;
      city.temp = Math.round(weatherData[0].Temperature.Metric.Value);

      dispatch(currentCity(city))
    } catch (e) {
      dispatch(openModal("Something went wrong with the search... \n Are you sure of your spelling?"));
    }
  };


  const getCityInfo = async () => {
    const city = await getCityKey();

    await getCityCurrentWeather(city);
  };


  useEffect(() => {
    getCityCurrentWeather(defaultCity)
  }, []);


  const typingString = (e) => {
    let value = e.target.value;
    const ascii = value.charCodeAt(value.length - 1);
    if ((65 <= ascii && ascii <= 90) || (97 <= ascii && ascii <= 122) || ascii === 32) {
    } else {
      value = value.slice(0, -1);
    }
    setSearchString(value)
  }


  const keyPressed = async (e) => {
    if (e.keyCode === 13 || e.type === 'click') {
      e.preventDefault();
      if (searchString !== '') {
        getCityInfo();
        setSearchString('')
      }
    }
  }


  return (
    <Paper className="search-comp" sx={{ width: '250px' }}>
      <InputBase variant='filled' sx={{ width: '100%' }} className="search-input" placeholder="Type a city's name..." onChange={typingString} value={searchString} onKeyDown={keyPressed} color='primary' />
      <IconButton sx={{ p: '10px' }} onClick={keyPressed}>
        <SearchIcon />
      </IconButton>
      {/* </TextField> */}
      {presentedString}
      <ErrorModal />
    </Paper >
  )
}
