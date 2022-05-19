import React, { useEffect, useState } from 'react';
import { Typography, Card, CardContent, Box } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';

import ForcastDay from '../ForcastDay/ForcastDay';
import LikesUnit from '../LikesUnit/LikesUnit'
import './WeatherDisplay.css';
import { openModal } from '../../../actions';

const DAY_OF_WEEK = [
  'Sun',
  'Mon',
  'Tue',
  'Wed',
  'Thu',
  'Fri',
  'Sat'
];

const SERVICE_URL = 'https://dataservice.accuweather.com';
const API_KEY = process.env.REACT_APP_API_KEY;


export default function WeatherDisplay() {
  const { currentTemp, currentWeather, name, key } = useSelector(state => state.currentCity);
  const dispatch = useDispatch();
  const [forecast, setForecast] = useState([]);

  // FETCHES DATA AUTOMATICALLY ON LOAD. DEFAULT LOCATION: TEL-AVIV
  useEffect(() => {
    async function fetchForecast() {
      try {
        const forecastResponse = await fetch(SERVICE_URL +
          `/forecasts/v1/daily/5day/${key}?apikey=${API_KEY}&metric=true`);
        const forecastData = await forecastResponse.json();

        const parsedForecast = forecastData.DailyForecasts.map(day => {
          /*
            Three values for each desplyed day on the forecast:
              1) Day;  2) Max temp;  3) Min temp
          */
          return {
            dayOfWeek: DAY_OF_WEEK[(new Date(day.Date)).getDay()],
            maxTemp: Math.round(day.Temperature.Maximum.Value),
            minTemp: Math.round(day.Temperature.Minimum.Value)
          }
        });
        // Sets parsed data to state
        setForecast(parsedForecast);
      } catch (e) {
        console.log('error in forecast')
        // Opens dialog on error
        dispatch(openModal('Something went wrong with fetching this city\'s forecast... Just stay home!'))
      }
    }

    // Calls (async) function from above
    fetchForecast();
  }, [name]);

  return (
    <Box className='weather-display'>
      <div className='display-top'>
        {currentTemp && <Card className='current-weather-card'>
          <CardContent className="current-weather-content">
            <Typography variant='h5' className="current-weather-detail">
              {currentWeather}
            </Typography>
            <Typography variant='h5' className="current-weather-detail">
              {currentTemp}
              <span>&deg;</span>
            </Typography>
          </CardContent>
        </Card>}
        {currentTemp ?
          <Typography className='city-name' variant='h3'>{name}</Typography>
          : <Typography className='city-name city-err' variant='h3'>Sorry, something went wrong...</Typography>}
        <LikesUnit className='city-like' isCityDisplayed={!!currentTemp} />
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
