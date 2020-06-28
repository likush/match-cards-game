import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled, { withTheme } from 'styled-components';
import { getCardsImages } from '../../redux/actions/cardsDataActions';
import { getGameFieldParams } from '../../utils/getGameFieldsParams';
import ScreenLoader from '../../components/ScreenLoader';
import Card from '../../components/Card';
import bg from '../../img/bg/game-bg.jpg';

const GameScreen = () => {
  const dispatch = useDispatch();
  const gameSettings = useSelector(state => state.gameSettings);
  const cardsData = useSelector(state => state.cardsData);
  const {cards, isLoading} = cardsData;

  useEffect(() => dispatch(getCardsImages()), [dispatch]);
  const fieldParams = getGameFieldParams(gameSettings.level);

  return (
    <Container>
      <ScreenLoader isLoading={isLoading}>
        {cards.length > 0 &&
        <GameField params={fieldParams}>
          {cards.map((card) => <Card key={card.cardId} {...card}/>)}
        </GameField>}
      </ScreenLoader>
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
  grid-template-rows: ${({params}) => `repeat(${params.rows}, 160px)`};
  grid-template-columns: ${({params}) => `repeat(${params.cols}, 160px)`};
  justify-content: center;
  align-content: center;
  gap: 30px;
  height: 100%;
`;
