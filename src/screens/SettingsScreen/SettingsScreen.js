import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getImages } from '../../redux/actions';


const SettingsScreen = () => {
  const gameSettings = useSelector(state => state.gameSettings);
  const dispatch = useDispatch();

  const images = useSelector(state => state.cardImages);


  useEffect(() => {
    dispatch(getImages());
  }, []);



  return (
    <div><p>settings</p></div>
  );
};

export default SettingsScreen;
