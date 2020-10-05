import React, { FC } from 'react';
import { Route, Redirect } from 'react-router-dom';

interface RouteProps {
  isAuth?: number | boolean;
  pathnameRedirect: string;
  path: string;
  component: FC;
}

const privateRouteComponent: FC<RouteProps> = ({ isAuth, pathnameRedirect, path, component: Component, ...rest }) => (
  <Route {...rest} exact path={path} render={() => (isAuth ? <Component /> : <Redirect to={pathnameRedirect} />)} />
);

export default privateRouteComponent;
