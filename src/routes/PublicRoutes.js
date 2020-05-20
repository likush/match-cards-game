import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import WelcomeScreen from "../screens/WelcomeScreen/WelcomeScreen";

const PublicRoutes = () => {


  return (
    <Switch>
      <Route path='/' exact component={WelcomeScreen}/>
      <Redirect to='/'/>
    </Switch>
  );
};

export default PublicRoutes;
