import React, { VFC } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Login from '../views/login';

const AuthRoutes: VFC = () => {
  return (
    <>
      <Switch>
        <Route path="/account/login" component={Login} />
        <Route path="*">
          <Redirect to="/user" />
        </Route>
      </Switch>
    </>
  );
};

export default AuthRoutes;
