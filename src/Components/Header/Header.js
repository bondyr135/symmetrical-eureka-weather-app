import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { Typography, ToggleButtonGroup, ToggleButton } from '@mui/material';

import './Header.css';

export default function Header() {

  const currCity = useSelector(state => state.currentCity)
  const history = useHistory();
  const [page, setPage] = useState(history.location.pathname);


  useEffect(() => {
    setPage(history.location.pathname)
  }, [currCity]);


  const handleRouting = (e) => {
    e.preventDefault();
    const routingTarget = e.target.value;
    setPage(routingTarget);
    if (routingTarget === 'favorites') {
      history.replace('/' + routingTarget);
    } else {
      history.replace('/');
    }
  }


  return (
    <header className='header-comp'>
      {/* <img src ={logo} className='logo' /> */}
      <Typography variant='h3' className='logo'>So how's the weather?</Typography>
      <ToggleButtonGroup
        className='btn-group'
        color='primary'
        value={page === '/' ? '/' : 'favorites'}
        onChange={handleRouting}>
        <ToggleButton value='/' className="btn home-btn" disabled={page === '/'} style={{ fontSize: '20px' }}>
          Home
        </ToggleButton>
        <ToggleButton value='favorites' className="btn favorites-btn" disabled={page === 'favorites'} style={{ fontSize: '18px' }}>
          Favorites
        </ToggleButton>
      </ToggleButtonGroup>
    </header>
  )
}
