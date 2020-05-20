import React from 'react';
import { useSelector } from 'react-redux';
import styled, { withTheme } from 'styled-components';
import bg from '../../img/bg/welcome-screen-bg.jpg';


const WelcomeScreen = (props) => {
  const userName = useSelector(state => state.userData.userName);

  return (
    <Container>
      <Inner>
        <Content>
          <Title>Welcome</Title>
          <Input placeholder={'Введите имя'}/>
        </Content>
      </Inner>
    </Container>
  );
};

export default withTheme(WelcomeScreen);

const Container = styled.div`
  height: 100vh;
  background-color: ${({theme}) => theme.colors.lightgray};
  background-image:url(${bg});
  background-size: cover;
  background-position: bottom;
`;

const Inner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: rgba(33, 47, 60, .5);
`;

const Content = styled.div`

`;

const Title = styled.p`
  margin: 0 0 20px 0;
  color: white;
  font-size: 1.8rem;
  text-align: center;
`;

const Input = styled.input`
  padding: 10px;
  width: 300px;
  border-radius: 8px;
  border: 1px solid white;
  background-color: rgba(255, 255, 255, 0.4);
  transition: 0.3s ease all;
  
  
  &:focus {
    outline: none;
    background-color: rgba(255, 255, 255, 0.8);
  }
`;

