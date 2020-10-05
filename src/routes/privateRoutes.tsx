import React, { VFC } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Header from '../components/header';
import Home from '../views/home';

const AuthRoutes: VFC = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="*">
          <Redirect to="/home" />
        </Route>
      </Switch>
    </>
  );
};

export default AuthRoutes;
