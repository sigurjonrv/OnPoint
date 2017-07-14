import React from 'react';
import Helmet from 'react-helmet';
import { Switch, Route, Link } from 'react-router-dom';
import config from 'utils/config';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

// Layout
import AppLayout, { Content } from 'components/app-layout';
import Header from 'components/header';
import Navigation from 'components/navigation';
import DevTools from 'components/devtools';
import { NavItem } from 'react-bootstrap';

// Routes
import Home from './routes/home';
import About from './routes/about';
import Planets from './routes/planets';
import Fighters from './routes/fighters';
import NotFound from './routes/not-found';
import Bet from './routes/bet';

export default function App() {
  return (
    <AppLayout>
      <Helmet {...config('helmet')} />

      <Navigation/>

      <Content>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route path="/planets" component={Planets} />
          <Route path="/fighters" component={Fighters}/>
          <Route path="/bet" component={Bet} />
          <Route component={NotFound} />
        </Switch>
        <DevTools />
      </Content>
    </AppLayout>
  );
}
