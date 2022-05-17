import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { currentCity } from '../../../actions/index'
import { useHistory } from 'react-router-dom';


import {
  Box,
  Paper,
  Card,
  CardContent,
  Typography
} from '@mui/material';

import './Favorites.css';

export default function Favorites() {

  const dispatch = useDispatch()
  let history = useHistory();
  const favedCities = useSelector(state => state.favorites);

  const choseFavorite = (city) => {
    const chosenCity = {
      key: city.key,
      name: city.name
    };

    dispatch(currentCity(chosenCity));
    history.replace('/');
  }

  return (
    <Box className='favorites-comp'>
      <Paper className='favorites-group' sx={{ "backgroundColor": "#f5f5f5" }}>
        {favedCities.map(city => {
          return (
            <Card key={city.name} value={city.key} onClick={() => choseFavorite(city)} className='faved-city-card'>
              <CardContent className='faved-city-content'>
                <Typography className='faved-city city-name' variant='h4'>{city.name}</Typography>
                <Typography className='faved-city city-temp' variant='h5'>
                  {city.currentTemp}
                  <span>&deg;</span>
                </Typography>
                <Typography className='faved-city city-weather' variant='h5'>{city.currentWeather}</Typography>
              </CardContent>
            </Card>
          )
        })}
      </Paper>
    </Box>
  )
}
