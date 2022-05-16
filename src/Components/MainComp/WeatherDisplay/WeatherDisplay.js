import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { Typography, Card, CardContent } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';

import ForcastDay from '../ForcastDay/ForcastDay';
import LikesUnit from '../LikesUnit/LikesUnit'
// import mockWeather from '../../../mock/mockJSLM';
import './WeatherDisplay.css';
import { openModal } from '../../../actions';
// import key from '../../../key';

const DAY_OF_WEEK = [
  'Sun',
  'Mon',
  'Tue',
  'Wed',
  'Thu',
  'Fri',
  'Sat'
];

const BASE_URL = 'http://dataservice.accuweather.com';
const API_KEY = process.env.REACT_APP_API_KEY;


export default function WeatherDisplay() {
  const currCity = useSelector(state => state.currentCity);
  const dispatch = useDispatch();
  const [forecast, setForecast] = useState([]);


  useEffect(() => {
    // console.log('FETCH')
    async function fetchForecast() {
      try {
        const forecastResponse = await fetch(BASE_URL +
          `/forecasts/v1/daily/5day/${currCity.key}?apikey=${API_KEY}&metric=true`);
        const forecastData = await forecastResponse.json();

        const parsedForecast = forecastData.DailyForecasts.map(day => {
          return {
            dayOfWeek: DAY_OF_WEEK[(new Date(day.Date)).getDay()],
            maxTemp: Math.round(day.Temperature.Maximum.Value),
            minTemp: Math.round(day.Temperature.Minimum.Value)
          }
        });
        setForecast(parsedForecast);
      } catch (e) {
        console.log('error in forecast')
        dispatch(openModal('Something went wrong with fetching this city\'s forecast... Just stay home!'))
      }
    }
    fetchForecast();
  }, [currCity]);

  return (
    <Box className='weather-display'>
      <div className='display-top'>
        <Card className='current-weather-card'>
          <CardContent className="current-weather-content">
            <Typography variant='h5' className="current-weather-detail">{currCity.currentWeather}</Typography>
            <Typography variant='h5' className="current-weather-detail">
              {currCity.currentTemp}
              <span>&deg;</span>
            </Typography>
          </CardContent>
        </Card>
        <Typography className='city-name' variant='h3'>{currCity.name}</Typography>
        <LikesUnit className='city-like' />
      </div>
      <div className='display-bottom'>
        {
          forecast.map((day, i) => {
            return <ForcastDay key={day.dayOfWeek} day={day} />
          })
        }
      </div>
    </Box>
  )
}
