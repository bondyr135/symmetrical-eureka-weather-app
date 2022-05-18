import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { Typography, ToggleButtonGroup, ToggleButton } from '@mui/material';

import './Header.css';
// const APP_NAME = '/symmetrical-eureka-weather-app/';
// const BASE_URL = process.env.REACT_APP_BASE_URL;

export default function Header() {

  const currCity = useSelector(state => state.currentCity)
  const history = useHistory();
  const [page, setPage] = useState(history.location.pathname);

  // console.log('App: ', history.location.pathname)
  // console.log(page);


  useEffect(() => {
    setPage(history.location.pathname)
  }, [currCity]);


  const handleRouting = (e) => {
    e.preventDefault();
    const routingTarget = e.target.value;
    console.log('history: ', history)
    console.log(routingTarget)
    setPage(routingTarget);
    // setPage(BASE_URL + routingTarget);
    if (routingTarget.endsWith('favorites')) {
      history.replace(routingTarget);
    } else {
      history.replace('/');
    }
  }
  console.log(page)
  console.log(page.includes('favorites'))
  return (
    <header className='header-comp'>
      <Typography variant='h3' className='logo'>So how's the weather?</Typography>
      <ToggleButtonGroup
        className='btn-group'
        color='primary'
        value={[page]}
        onChange={handleRouting}>
        <ToggleButton value='/' className="btn home-btn" disabled={!page.includes('favorites')} style={{ fontSize: '20px' }}>
          Home
        </ToggleButton>
        <ToggleButton value='/favorites' className="btn favorites-btn" disabled={page.includes('favorites')} style={{ fontSize: '18px' }}>
          Favorites
        </ToggleButton>
      </ToggleButtonGroup>
    </header>
  )
}
