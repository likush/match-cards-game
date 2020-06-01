import React from 'react';
import { useSelector } from 'react-redux';
import PrivateRoutes from './routes/PrivateRoutes';
import PublicRoutes from './routes/PublicRoutes';

const App = () => {
  const userData = useSelector(state => state.userData);

  return (
    <PrivateRoutes/>
    // <div>
    //   {userData.userName ? <PrivateRoutes/> : <PublicRoutes/>}
    // </div>
  );
};

export default App;
