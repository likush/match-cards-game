import React from 'react';
import styled, { withTheme } from 'styled-components';
import { useSelector } from 'react-redux';

const UserNameIsExistContent = (props) => {
  const userName = useSelector(state => state.userData.userName);

  return (
    <div>
      <Title>{`Hi, ${userName}`}</Title>
    </div>

  );
};

export default withTheme(UserNameIsExistContent);

const Title = styled.h1`
  font-family: Comfortaa, serif;
  color: ${({theme}) => theme.colors.lavender}
`;
