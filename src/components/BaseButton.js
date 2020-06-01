import React from 'react';
import styled, { css } from 'styled-components';

const BaseButton = (props) => {
  const {onClick, children, className, disabled} = props;

  return (
    <Btn onClick={onClick} className={className} disabled={disabled}>
      {children}
    </Btn>
  );
};

export default BaseButton;

const Btn = styled.button`
  border: 1px solid transparent;
  border-radius: 3px;
  transition: 0.3s ease all;
  cursor: pointer;
  background-color: transparent;
  
  ${({ disabled, theme: {colors} }) =>
  disabled &&
  css`
      border-color: ${colors.gray} !important;
      color:  ${colors.gray} !important;
      
      &:hover {
        background-color: transparent !important;
        color: ${colors.gray} !important;
      }
      
    `}
  
  &:focus {
    outline: none;
  }
`;
