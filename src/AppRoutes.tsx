import React from 'react';
import { Route, Switch, BrowserRouter, RouteComponentProps, withRouter } from 'react-router-dom';

import Home from './containers/Home';
import Projects from './containers/Projects';
import Writings from './containers/Writings';
import Photography from './containers/Photography';
import Resume from './containers/Resume';
import Contact from './containers/Contact';

const ScrollToTop = withRouter(({ history }: RouteComponentProps) => {
  React.useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    }
  }, []);

  return (null);
});

export const AppRoutes: React.FC = () => {
  return(
    <BrowserRouter>
      <ScrollToTop />
      <Switch>
        <Route exact={true} path='/' component={Home} />
        <Route exact={true} path='/projects' component={Projects} />
        <Route exact={true} path='/writings' component={Writings} />
        <Route exact={true} path='/photography' component={Photography} />
        <Route exact={true} path='/resume' component={Resume} />
        <Route exact={true} path='/contact-me' component={Contact} />
      </Switch>
    </BrowserRouter>
  );
};
