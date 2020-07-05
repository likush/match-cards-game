import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled, { withTheme } from 'styled-components';
import { getCardsImages } from '../../redux/actions/cardsDataActions';
import { getGameFieldParams } from '../../utils/getGameFieldsParams';
import ScreenLoader from '../../components/ScreenLoader';
import Card from '../../components/Card';
import bg from '../../img/bg/game-bg.jpg';
import BaseButton from '../../components/BaseButton';

const GameScreen = () => {
  const dispatch = useDispatch();
  const gameSettings = useSelector(state => state.gameSettings);
  const cardsData = useSelector(state => state.cardsData);
  const {cards, isLoading, clicksNumber} = cardsData;

  useEffect(() => dispatch(getCardsImages()), [dispatch]);

  const fieldParams = getGameFieldParams(gameSettings.level);

  return (
    <Container>
      <ScreenLoader isLoading={isLoading}>
        <GameField>
          {cards.length > 0 && <Cards params={fieldParams}>
            {cards.map((card) => <Card key={card.cardId} {...card}/>)}
          </Cards>}

          <ClicksNumber>{`Кликов: ${clicksNumber}`}</ClicksNumber>
          <BackBtn>К настройкам</BackBtn>
        </GameField>
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
  position: relative;
  height: inherit;
`;

const Cards = styled.div`
  display: grid;
  grid-template-rows: ${({params}) => `repeat(${params.rows}, ${params.size})`};
  grid-template-columns: ${({params}) => `repeat(${params.cols}, ${params.size})`};
  justify-content: center;
  align-content: center;
  gap: 30px;
  height: 100%;
`;

const ClicksNumber = styled.p`
  position: absolute;
  top: 20px;
  right: 50px;
  font-family: Comfortaa, sans-serif;
  margin: 0;
  font-weight: 400;
`;

const BackBtn = styled(BaseButton)`
  position: absolute;
  top: 20px;
  left: 50px;
  font-family: Comfortaa, sans-serif;
`;
