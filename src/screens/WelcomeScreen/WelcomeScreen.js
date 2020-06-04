import React from 'react';
import { useSelector } from 'react-redux';
import styled, { withTheme } from 'styled-components';
import UserNameIsNotExistContent from './components/UserNameIsNotExistContent';
import UserNameIsExistContent from './components/UserNameIsExistContent';
import BaseButton from '../../components/BaseButton';
import BaseLink from '../../components/BaseLink';
import SelectSettingsContent from './components/SelectSettingsContent';
import bg from '../../img/bg/welcome-screen-bg.jpg';

const WelcomeScreen = (props) => {
  const {theme: {colors}} = props;
  const userName = useSelector(state => state.userData.userName);

  return (
    <Container>
      <Wrapper>
        <Inner>
          <UserContent>
            {userName ? <UserNameIsExistContent/> : <UserNameIsNotExistContent/>}
          </UserContent>

          <SelectSettingsContent/>

          <BaseLink to={'settings'} color={colors.green}>
            <NextBtn disabled={!userName}>
              Start game
            </NextBtn>
          </BaseLink>
        </Inner>
      </Wrapper>
    </Container>
  );
};

export default withTheme(WelcomeScreen);

const Container = styled.div`
  height: 100vh;
  
  background-color: ${({theme}) => theme.colors.lightgray};
  background-image:url(${bg});
  background-size: cover;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(255, 246, 246, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  `;

const UserContent = styled.div`
  margin-bottom: 40px;
`;

const Inner = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
`;

const NextBtn = styled(BaseButton)`
  padding: 20px 30px;
  border-color: ${({theme}) => theme.colors.coral};
  background-color:  ${({theme}) => theme.colors.coral};
  color: white;

  &:hover {
    transform: scale(1.1);
    background-color:  ${({theme}) => theme.colors.darkcoral};

  }
`;

