import React, { Component } from 'react';
import Segment from 'components/segment';
import Helmet from 'react-helmet';
import Fight from 'components/Fight';

export default class Bet extends Component {
  render() {
    return (
      <div>
        <Helmet title="Bet" />
        <Segment>
          <h1>Bet</h1>
          <Fight />
        </Segment>
      </div>
    );
  }
}
