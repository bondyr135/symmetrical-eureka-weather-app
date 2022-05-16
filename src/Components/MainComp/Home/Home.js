import React from 'react';

import SearchBar from '../SearchBar/SearchBar';
import WeatherDisplay from '../WeatherDisplay/WeatherDisplay';
import './Home.css';

export default function Home() {
  return (
    <main className='home-comp'>
      <SearchBar className='search-in-home' />
      <WeatherDisplay className='weather-display-in-home' />
    </main>
  )
}
