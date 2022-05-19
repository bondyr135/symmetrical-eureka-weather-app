import React from 'react';

import './ForcastDay.css';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function ForcastDay({ day }) {

  // Dispaly-only component
  return (
    <Card className='forcast_card'>
      <CardContent className="forcast-content">
        <Typography variant="h4" className='day-details'>{day.dayOfWeek}</Typography>
        <Typography variant="h5" className='day-details temp'>
          {day.maxTemp}
          <span>&deg; -</span>
          {day.minTemp}
          <span>&deg;</span>
        </Typography>
      </CardContent>
    </Card>
  )
}
