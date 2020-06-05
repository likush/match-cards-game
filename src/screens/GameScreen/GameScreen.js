import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled, { withTheme } from 'styled-components';
import { getImages, SELECT_LEVEL, SELECT_SHIRT, SELECT_THEME } from '../../redux/actions';
import Card from '../../components/Card';
import bg from '../../img/bg/game-bg.jpg';


const GameScreen = () => {
  const dispatch = useDispatch();
  const gameSettings = useSelector(state => state.gameSettings);
  const {level} = gameSettings;
  const imagesData = useSelector(state => state.cardImagesData);
  const {images} = imagesData;

  useEffect(() => dispatch(getImages()), [dispatch]);

  const getGameFieldParams = () => {
    if (level === 12) {
      return {cols: 4, rows: 3};
    } else if (level === 16) {
      return {cols: 4, rows: 4};
    } else if (level === 20) {
      return {cols: 5, rows: 4};
    }
  };

  const fieldParams = getGameFieldParams();

  return (
    <Container>
      {images.length > 0 &&
      <GameField params={fieldParams}>
        {images.map((image, index) => <Card key={image.id + index}/>)}
      </GameField>}
    </Container>
  );
};

export default withTheme(GameScreen);

const Container = styled.div`
    background-image:url(${bg});
    width: 100%;
    height: 100vh;
`;

const GameField = styled.div`
  display: grid;
  grid-template-rows: ${({params}) => `repeat(${params.rows}, 100px)`};
  grid-template-columns: ${({params}) => `repeat(${params.cols}, 100px)`};
  justify-content: center;
  align-content: center;
  gap: 10px;
  height: 100%;
`;
