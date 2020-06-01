import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const BaseLink = (props) => {
  const {to, children, color} = props;
  return (
    <StyledLink to={to} color={color}>{children}</StyledLink>
  );
};

export default BaseLink;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({color}) => color};
  transition: 0.3s ease all;
`;
