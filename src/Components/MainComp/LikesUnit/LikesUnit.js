
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addFavorite, removeFavorite, openModal } from '../../../actions/index'

import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import './LikesUnit.css';

export default function LikesUnit({ isCityDisplayed }) {
  const dispatch = useDispatch();

  const currCity = useSelector(state => {
    return state.currentCity
  });
  const savedFavs = useSelector(state => state.favorites);
  const [isLiked, setIsLiked] = useState(savedFavs.findIndex(city => city.key === currCity.key) > -1);

  useEffect(() => {
    const didLikeChange = savedFavs.findIndex(city => city.key === currCity.key);
    setIsLiked(didLikeChange > -1)
  }, [currCity, isLiked])




  const toggleLike = () => {
    if (isLiked) {
      dispatch(removeFavorite(currCity));
    } else {
      if (savedFavs.length === 10) {
        dispatch(openModal('One can only have so much love... 10 cities are plenty'))
      } else {
        dispatch(addFavorite(currCity));
      }
    }
    setIsLiked(!isLiked);
  }

  if (!isCityDisplayed) return null;

  return (
    <div className='like-unit-comp'>
      {isLiked ? <FavoriteIcon sx={{ 'fontSize': '54px' }} className='heart-icon like' onClick={toggleLike} />
        : <FavoriteBorderIcon sx={{ 'fontSize': '54px' }} className='heart-icon unlike' onClick={toggleLike} />}
    </div>
  )
}
