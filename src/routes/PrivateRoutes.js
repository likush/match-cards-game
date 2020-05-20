import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import WelcomeScreen from "../screens/WelcomeScreen/WelcomeScreen";
import SettingsScreen from "../screens/SettingsScreen/SettingsScreen";

const PrivateRoutes = () => {
  return (
    <Switch>
      <Route path='/' exact component={WelcomeScreen}/>
      <Route path='/settings' exact component={SettingsScreen}/>
      <Redirect to='/'/>
    </Switch>
  );
};

export default PrivateRoutes;
