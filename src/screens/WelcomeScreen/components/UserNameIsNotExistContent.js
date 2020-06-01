import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { setUserName } from '../../../redux/actions';
import BaseButton from '../../../components/BaseButton';

const UserNameIsNotExistContent = () => {
  const dispatch = useDispatch();
  const [inputValue, changeInputValue] = useState('');

  return (
    <Content>
      <Title>Hi</Title>
      <InputWrapper>
        <Input onChange={(ev) => changeInputValue(ev.target.value)}
               placeholder={'Enter your name'}/>
        <SaveBtn onClick={() => dispatch(setUserName(inputValue))}
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
  padding: 10px;
  margin-right: 10px;
  width: 300px;
  border: none;
  border-bottom: ${({theme}) => `1px solid ${theme.colors.lavender}`};
  transition: 0.3s ease all;
  background-color: transparent;
  
  &:focus {
    outline: none;
  }
`;

const SaveBtnText = styled.span`
  color: ${({theme}) => theme.colors.lavender};
  transition: 0.3s ease all;
`;

const SaveBtn = styled(BaseButton)`
  padding: 0 20px;
  border-color: ${({theme}) => theme.colors.lavender};
  
  &:hover {
    background-color: ${({theme}) => theme.colors.lavender};
  }
  
  &:hover ${SaveBtnText} {
    color: white;
  }
`;

const GoToSettingsBtnText = styled.span`
  color: ${({theme}) => theme.colors.green};
`;

const GoToSettingsBtn = styled(BaseButton)`
  width: 150px;
  padding: 10px 0;
  border-color:  ${({theme}) => theme.colors.green};
  
  &:hover {
    background-color: ${({theme}) => theme.colors.green};
  }
  
  &:hover ${GoToSettingsBtnText} {
    color: white;
  }
`;
