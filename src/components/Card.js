import React from 'react';
import styled, { withTheme } from 'styled-components';

const Card = () => {
  return (
    <Container>1</Container>
  );
};

export default withTheme(Card);

const Container = styled.div`
  background: lightpink;
  width: 100px;
  height: 100px;
`;

