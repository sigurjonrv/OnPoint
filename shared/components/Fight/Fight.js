import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Request from 'superagent';


//var fighters_db = require('assets/data/fighters.json');

export default class Fight extends Component {

  static propTypes = {
    children: PropTypes.node,
    fightID: PropTypes.object,
  };

  render() {

    const { children, fightID } = this.props;
    return (
      <div>
        <div className="panel panel-default">
          <div className="panel-body">
            <div className="row">
              <div className="col-xs-6">
                <div className="row">
                  <div className="col-xs-6">
                    <h3>{fightID.fighter1_first_name} {fightID.fighter1_last_name}</h3>
                    <h2><strong>{fightID.fighter1_nickname}&nbsp;</strong></h2>
                    <img src={fightID.fighter1_full_body_image} alt="fighter1" />
                  </div>
                  <div className="col-xs-6">
                    <ul>
                      <li><strong>Wins: </strong>{fightID.fighter1_wins}</li>
                      <li><strong>Losses: </strong>{fightID.fighter1_losses}</li>
                      <li><strong>Draws: </strong>{fightID.fighter1_draws}</li>
                      <li><strong>Rank: </strong>{fightID.fighter1_rank}&nbsp;</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xs-6">
                <div className="row">
                  <div className="col-xs-6">
                    <ul>
                      <li><strong>Wins: </strong>{fightID.fighter2_wins}</li>
                      <li><strong>Losses: </strong>{fightID.fighter2_losses}</li>
                      <li><strong>Draws: </strong>{fightID.fighter2_draws}</li>
                      <li><strong>Rank: </strong>{fightID.fighter2_rank}&nbsp;</li>
                    </ul>
                  </div>
                  <div className="col-xs-6">
                    <h3>{fightID.fighter2_first_name} {fightID.fighter2_last_name}</h3>
                    <h2><strong>{fightID.fighter2_nickname}&nbsp;</strong></h2>
                    <img src={fightID.fighter2_full_body_image} alt="fighter2" />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-6">
                <p><br /><button type="button" className="btn btn-defult btn-lg btn-block">{fightID.fighter1_first_name} {fightID.fighter1_last_name}</button></p>
              </div>
              <div className="col-xs-6">
                <p><br /><button type="button" className="btn btn-defult btn-lg btn-block">{fightID.fighter2_first_name} {fightID.fighter2_last_name}</button></p>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-4">
                <p><br /><button type="button" className="btn btn-defult btn-lg btn-block">KO/TKO</button></p>
              </div>
              <div className="col-xs-4">
                <p><br /><button type="button" className="btn btn-defult btn-lg btn-block">SUB</button></p>
              </div>
              <div className="col-xs-4">
                <p><br /><button type="button" className="btn btn-defult btn-lg btn-block">DEC</button></p>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-xs-offset-1">
                <div className="row">
                  <div className="col-xs-2">
                    <p><br /><button type="button" className="btn btn-defult btn-lg btn-block">RD 1</button></p>
                  </div>
                  <div className="col-xs-2">
                    <p><br /><button type="button" className="btn btn-defult btn-lg btn-block">RD 2</button></p>
                  </div>
                  <div className="col-xs-2">
                    <p><br /><button type="button" className="btn btn-defult btn-lg btn-block">RD 3</button></p>
                  </div>
                  <div className="col-xs-2">
                    <p><br /><button type="button" className="btn btn-defult btn-lg btn-block">RD 4</button></p>
                  </div>
                  <div className="col-xs-2">
                    <p><br /><button type="button" className="btn btn-defult btn-lg btn-block">RD 5</button></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
