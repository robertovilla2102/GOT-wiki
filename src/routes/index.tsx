import React, { VFC, useState, useEffect } from 'react';
import { Switch, BrowserRouter } from 'react-router-dom';

// import { useSelector } from 'react-redux';
// import axios from 'axios';

import PrivateRoutesComponent from './utils/RouteComponent';
import PrivateRoutes from './privateRoutes';
import AccountRoutes from './accountRoutes';

const RoutesContainer: VFC = () => {
  const [loading, setLoading] = useState(true);

  // const token = useSelector(
  //   (state: { credentials: { userLogueado: { token: string } } }) => state.credentials.userLogueado.token,
  // );

  const token: boolean = true;

  useEffect(() => {
    setLoading(false);
  }, [token]);

  if (loading) return null;

  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Switch>
        <PrivateRoutesComponent pathnameRedirect="/private/user" isAuth={!token} component={AccountRoutes} path="/account" />
        <PrivateRoutesComponent pathnameRedirect="/account/login" isAuth={token} component={PrivateRoutes} path="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default RoutesContainer;
