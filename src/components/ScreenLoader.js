import React from 'react';
import styled from 'styled-components';
import Preloader from './Preloader';

const ScreenLoader = (props) => {
  const {isLoading, children} = props;

  return (
    <Container>
      {isLoading ? <Preloader/> : children}
    </Container>
  );
};

export default ScreenLoader;

const Container = styled.div`
  height: inherit;
`;
