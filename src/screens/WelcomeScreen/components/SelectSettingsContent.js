import React from 'react';
import styled, { withTheme, css } from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { selectTheme, selectDifficulty, selectShirt } from '../../../redux/actions';
import BaseButton from '../../../components/BaseButton';
import peachShirt from '../../../img/card-shirts/peach-shirt.jpg';
import greenShirt from '../../../img/card-shirts/green-shirt.jpg';
import whiteShirt from '../../../img/card-shirts/white-shirt.jpg';

const shirts = [{value: 'peach', bg: peachShirt}, {value: 'green', bg: greenShirt}, {value: 'white', bg: whiteShirt}];
const themes = [{title: 'Cats', value: 'cats'}, {title: 'Nature', value: 'nature'}, {title: 'City', value: 'city'}];
const levels = [{title: '3 ✕ 4', value: 12}, {title: '4 ✕ 4', value: 16}, {title: '4 ✕ 5', value: 20},];

const SelectSettingsContent = (props) => {

  const gameSettings = useSelector(state => state.gameSettings);
  const {difficulty, shirt, theme} = gameSettings;
  const dispatch = useDispatch();

  console.log(gameSettings);

  return (
    <Container>
      <Title>Select:</Title>

      <div>
        <SettingItem>
          <Subtitle>shirt</Subtitle>
          <SelectBtnWrap>
            {shirts.map(({value, bg}, index) =>
              <ShirtBtn onClick={() => dispatch(selectShirt(value))}
                        selected={shirt === value} bg={bg} key={value + index}/>)}
          </SelectBtnWrap>
        </SettingItem>


        <SettingsWrap>
          <SettingItem>
            <Subtitle>difficulty</Subtitle>
            <SelectBtnWrap>
              {levels.map(({title, value}, index) =>
                <SelectBtn
                  onClick={() => dispatch(selectDifficulty(value))}
                  selected={difficulty === value}
                  key={value + index}>
                  {title}
                </SelectBtn>)}
            </SelectBtnWrap>
          </SettingItem>

          <SettingItem>
            <Subtitle>theme</Subtitle>
            <SelectBtnWrap>
              {themes.map(({title, value}, index) =>
                <SelectBtn onClick={() => dispatch(selectTheme(value))}
                           selected={theme === value} key={value + index}>
                  {title}
                </SelectBtn>)}
            </SelectBtnWrap>
          </SettingItem>
        </SettingsWrap>
      </div>

    </Container>

  );
};

export default withTheme(SelectSettingsContent);

const Container = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
`;

const Title = styled.div` 
  font-family: Comfortaa, serif;
  margin: 0 0 15px 0;
  color: ${({theme}) => theme.colors.lavender};
  font-size: 1.6rem;
  text-align: center;`;

const Subtitle = styled.h3`
  margin: 0 0 20px 0;
  color: ${({theme}) => theme.colors.green};
`;

const SettingsWrap = styled.div`
  display: flex;
`;

const SettingItem = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
  
  &:last-child {
    margin-left: 30px;
  }
`;

const SelectBtnWrap = styled.div`
  display: flex;
`;

const SelectBtn = styled(BaseButton)`
  margin: 0 10px;
  padding: 10px 20px;
  border-color: ${({theme}) => theme.colors.green};
  color: ${({theme}) => theme.colors.green};
  
  ${({selected, theme: {colors}}) =>
  selected &&
  css`
     background-color:  ${colors.purple};
     border-color:  ${colors.purple};
     color:  white;
     transform: scale(1.1);
    `}
  
  &:hover {
    background-color: ${({theme}) => theme.colors.green};
    color: white;   
    
   ${({selected, theme: {colors}}) =>
  selected &&
  css`
     background-color:  ${colors.lavender};
     border-color:  ${colors.lavender};
  `}
  }
`;

const ShirtBtn = styled(BaseButton)`
  margin: 0 20px;
  background-image: ${({bg}) => `url(${bg})`};
  width: 100px;
  height: 100px;
  border-radius: 6px;
  background-size: cover;
  box-shadow: 0 0 10px rgba(128, 128, 128, 0.8);
  transition: 0.3s ease all;
  
  ${({selected, theme: {colors}}) =>
  selected &&
  css`
     box-shadow: 0 0 20px rgba(181, 117, 129, 1);
     transform: scale(1.1);
  `}
  
  &:hover {
    box-shadow: 0 0 20px rgba(128, 128, 128, 1);
      
  ${({selected, theme: {colors}}) =>
  selected &&
  css`
      box-shadow: 0 0 20px rgba(104, 93, 115, 1);
      transform: scale(1.1);
        `}
      }
`;
