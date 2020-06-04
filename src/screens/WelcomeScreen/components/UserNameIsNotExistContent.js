import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { setUserName } from '../../../redux/actions';
import BaseButton from '../../../components/BaseButton';

const UserNameIsNotExistContent = () => {
  const dispatch = useDispatch();
  const [inputValue, changeInputValue] = useState('');

  const saveUserName = () => {
    localStorage.setItem('userName', inputValue);
    dispatch(setUserName(inputValue));
  };

  return (
    <Content>
      <Title>Hi</Title>
      <InputWrapper>
        <Input onChange={(ev) => changeInputValue(ev.target.value)}
               placeholder={'Enter your name'}/>
        <SaveBtn onClick={saveUserName}
                 disabled={!inputValue}>Save</SaveBtn>
      </InputWrapper>
    </Content>
  );
};

export default UserNameIsNotExistContent;

const Content = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  font-family: Comfortaa, serif;
  margin: 0 0 20px 0;
  color: ${({theme}) => theme.colors.lavender};
  font-size: 1.8rem;
  text-align: center;
`;

const InputWrapper = styled.div`
  display:flex;
  margin-bottom: 20px;
`;

const Input = styled.input`
  padding: 10px 0;
  margin-right: 10px;
  width: 300px;
  border: none;
  border-bottom: ${({theme}) => `1px solid ${theme.colors.lavender}`};
  transition: 0.3s ease all;
  background-color: transparent;
  color: ${({theme}) => theme.colors.lavender}}
  
  &:focus {
    outline: none;
  }
`;

const SaveBtn = styled(BaseButton)`
  padding: 0 20px;
  border-color: ${({theme}) => theme.colors.lavender};
  color: ${({theme}) => theme.colors.lavender};
  
  &:hover {
    background-color: ${({theme}) => theme.colors.lavender};
    color: white;
  }
`;
