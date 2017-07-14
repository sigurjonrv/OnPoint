import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';
import Fighters from './list';


const FightersRoutes = ({ match }) => (
  <div>
    <Switch>
      <Route exact path={`${match.url}`} component={Fighters} />
      <Redirect to={`${match.url}/page/1`} />
    </Switch>
  </div>
);

FightersRoutes.propTypes = {
  match: PropTypes.object,
};

export default FightersRoutes;
