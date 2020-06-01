import React from 'react';
import styled, { withTheme } from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import BaseButton from '../../../components/BaseButton';
import peachShirt from '../../../img/card-shirts/peach-shirt.jpg';
import greenShirt from '../../../img/card-shirts/lightgreen-shirt.jpg';
import whiteShirt from '../../../img/card-shirts/white-shirt.jpg';

const shirts = [{name: 'peach', bg: peachShirt}, {name: 'green', bg: greenShirt}, {name: 'white', bg: whiteShirt}];

const SelectSettingsContent = (props) => {

  return (
    <Container>
      <Title>Select:</Title>

      <div>
        <SettingItem>
          <Subtitle>shirt</Subtitle>
          <SelectBtnWrap>
            {shirts.map(({name, bg}, index) => <ShirtBtn bg={bg} key={name + index}/>)}
          </SelectBtnWrap>
        </SettingItem>


        <SettingsWrap>
          <SettingItem>
            <Subtitle>difficulty</Subtitle>
            <SelectBtnWrap>
              <SelectBtn>3 ✕ 4</SelectBtn>
              <SelectBtn>4 ✕ 4</SelectBtn>
              <SelectBtn>4 ✕ 5</SelectBtn>
            </SelectBtnWrap>
          </SettingItem>

          <SettingItem>
            <Subtitle>theme</Subtitle>
            <SelectBtnWrap>
              <SelectBtn>Nature</SelectBtn>
              <SelectBtn>City</SelectBtn>
              <SelectBtn>Cats</SelectBtn>
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
`;

const ShirtBtn = styled(BaseButton)`
  margin: 0 20px;
  background-image: ${({bg}) => `url(${bg})`};
  width: 100px;
  height: 100px;
  border-radius: 6px;
  background-size: cover;
  box-shadow: 0 0 10px rgba(104, 93, 115, 0.6);
  transition: 0.3s ease all;
  
  &:hover {
      box-shadow: 0 0 20px rgba(104, 93, 115, 0.8);
  }
`;
