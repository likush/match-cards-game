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
      <Inner>
        <UserContent>
          {userName ? <UserNameIsExistContent/> : <UserNameIsNotExistContent/>}
        </UserContent>

        <SelectSettingsContent/>

        <BaseLink to={'settings'} color={colors.green}>
          <NextBtn onClick={() => console.log('click')}>
            Start game
          </NextBtn>
        </BaseLink>
      </Inner>
    </Container>
  );
};

export default withTheme(WelcomeScreen);

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({theme}) => theme.colors.lightgray};
  background-image:url(${bg});
  background-size: cover;
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
  border-color: ${({theme}) => theme.colors.tangerine};
  background-color:  ${({theme}) => theme.colors.tangerine};
  color: white;

  &:hover {
    transform: scale(1.1);
    background-color:  ${({theme}) => theme.colors.coral};
    border-color: ${({theme}) => theme.colors.coral};
  }
`;

