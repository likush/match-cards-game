import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import WelcomeScreen from "../screens/WelcomeScreen/WelcomeScreen";
import GameScreen from "../screens/GameScreen/GameScreen";

const PrivateRoutes = () => {
  return (
    <Switch>
      <Route path='/' exact component={WelcomeScreen}/>
      <Route path='/settings' exact component={GameScreen}/>
      <Redirect to='/'/>
    </Switch>
  );
};

export default PrivateRoutes;
