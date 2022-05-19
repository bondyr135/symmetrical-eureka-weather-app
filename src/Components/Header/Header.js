import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { Typography, ToggleButtonGroup, ToggleButton } from '@mui/material';

import './Header.css';

export default function Header() {

  const currCity = useSelector(state => state.currentCity)
  const history = useHistory();
  const [page, setPage] = useState(history.location.pathname);


  // Used to update toggle button's disabled option when routing using a click on a favored city in the favorites component
  useEffect(() => {
    setPage(history.location.pathname)
  }, [currCity]);


  // On toggling the buttons, event is fired, toggling respectively between routes
  const handleRouting = (e) => {
    e.preventDefault();
    const routingTarget = e.target.value;
    setPage(routingTarget);
    if (routingTarget.endsWith('favorites')) {
      history.push(routingTarget); // Actual change of route
    } else {
      history.replace(''); // Actual change of route
    }
  }


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
