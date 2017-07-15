import React, { Component } from 'react';
import Segment from 'components/segment';
import Helmet from 'react-helmet';
import Fight from 'components/Fight';

const eventDb = require('assets/data/event.json');

const FIGHT = eventDb.map(fight =>
  <span key={fight.id}>
    <Fight fightID={fight} />
  </span>
);

export default class FightCard extends Component {
  render() {
    return (
      <div>
        <Helmet title="Bet" />
        <Segment>
          {FIGHT}
        </Segment>
      </div>
    );
  }
}
