import React from 'react';
import styled, { withTheme, css } from 'styled-components';
import { getCardShirt } from '../utils/getCardShirt';
import { useSelector, useDispatch } from 'react-redux';
import { checkIsCardOpen } from '../redux/actions/cardsDataActions';

const Card = (props) => {
  const {cardId, imageId, url, isMatched} = props;
  const dispatch = useDispatch();
  const shirtName = useSelector(state => state.gameSettings.shirt);
  const shirt = getCardShirt(shirtName);
  const openedCards = useSelector(state => state.cardsData.openedCards);
  const isOpened = openedCards[cardId] === imageId;
  const isCardDisabled = Object.keys(openedCards).length === 2;


  return (
    <CardContainer onClick={() => dispatch(checkIsCardOpen(cardId, imageId))} isMatched={isMatched}
                   disabled={isCardDisabled}>
      <CardInner isOpened={isOpened}>
        <CardFront shirt={shirt}/>

        <CardBack>
          <CardImage src={url}/>
        </CardBack>
      </CardInner>
    </CardContainer>
  );
};

export default withTheme(Card);


const CardInner = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  cursor: pointer;

  ${({isOpened}) =>
  isOpened &&
  css`
      transform: rotateY(180deg);
    `}
  }
`;

const CardContainer = styled.div`
  perspective: 1000px;
  transition: 0.3s ease all;
  pointer-events: ${({disabled}) => disabled ? 'none' : 'all'};

  ${({isMatched}) =>
  isMatched &&
  css`
      opacity: 0;
    `}
  }
`;

const CardSide = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
  border-radius: 6px;
  box-shadow: 0 0 10px rgba(128, 128, 128, 0.6);
  
   &:hover {
      box-shadow: 0 0 10px rgba(128, 128, 128, 0.8);
  }
`;

const CardFront = styled(CardSide)`
  background-image: ${({shirt}) => `url(${shirt})`};
  background-size: cover;
`;

const CardBack = styled(CardSide)`
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotateY(180deg);
  background-color: #e5e5e5;
`;

const CardImage = styled.img`
  border-radius: 50%;
  width: 80%;
  height: 80%;
  object-fit: cover;
  object-position: unset;
`;
