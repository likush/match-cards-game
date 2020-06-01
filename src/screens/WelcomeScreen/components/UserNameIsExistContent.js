import React from 'react';
import { useSelector } from 'react-redux';

const UserNameIsExistContent = (props) => {
  const userName = useSelector(state => state.userData.userName);

  return (
    <div>
      <h1>{`Hi, ${userName}`}</h1>
    </div>

  );
};

export default UserNameIsExistContent;
