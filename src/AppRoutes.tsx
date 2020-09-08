import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from './containers/Home';

export const AppRoutes: React.FC = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact={true} path='/' component={Home} />
      </Switch>
    </BrowserRouter>
  );
};
