import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Request from 'superagent';


var fighters_db = require('assets/data/fighters.json');
console.log(fighters_db.find(x => x.id == 1161).nickname.toString());

var fight = {
  rounds: 3,
  fighters: {
    fighter1:{
      name: fighters_db.find(x => x.id == 1161).last_name.toString() + ' ' + fighters_db.find(x => x.id == 1161).first_name.toString(),
      nickname: fighters_db.find(x => x.id == 1161).nickname.toString(),
      img: fighters_db.find(x => x.id == 1161).left_full_body_image.toString(),
      odds: 1.3,
      wins: fighters_db.find(x => x.id == 1161).wins.toString(),
      losses: fighters_db.find(x => x.id == 1161).losses.toString(),
      draws: fighters_db.find(x => x.id == 1161).draws.toString(),
      rank: fighters_db.find(x => x.id == 1161).rank.toString(),

    },
    fighter2:{
      name: fighters_db.find(x => x.id == 1161).last_name.toString() + ' ' + fighters_db.find(x => x.id == 1161).first_name.toString(),
      nickname: fighters_db.find(x => x.id == 512243).nickname.toString(),
      img: fighters_db.find(x => x.id == 512243).right_full_body_image.toString(),
      odds: 2,
      wins: fighters_db.find(x => x.id == 512243).wins.toString(),
      losses: fighters_db.find(x => x.id == 512243).losses.toString(),
      draws: fighters_db.find(x => x.id == 512243).draws.toString(),
      rank: fighters_db.find(x => x.id == 512243).rank.toString(),
    }
  }
};

export default class Fight extends Component {

  static propTypes = {
    children: PropTypes.node,
  };


  componentWillMount(){

  }

  render() {

    return (
      <div>
        <div className="panel panel-default">
          <div className="panel-body">
              <div className="row">
                <div className="col-xs-6">
                  <div className="row">
                    <div className="col-xs-6">
                      <h3>{fight.fighters.fighter1.name}</h3>
                      <h2><strong>{fight.fighters.fighter1.nickname}</strong></h2>
                      <img src={fight.fighters.fighter1.img}/>
                    </div>
                    <div className="col-xs-6">
                      <ul>
                        <li><strong>Wind: </strong>{fight.fighters.fighter1.wins}</li>
                        <li><strong>Losses: </strong>{fight.fighters.fighter1.losses}</li>
                        <li><strong>Draws: </strong>{fight.fighters.fighter1.draws}</li>
                        <li><strong>Rank: </strong>{fight.fighters.fighter1.rank}</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xs-6">
                  <div className="row">
                    <div className="col-xs-6">
                      <ul>
                        <li><strong>Wind: </strong>{fight.fighters.fighter2.wins}</li>
                        <li><strong>Losses: </strong>{fight.fighters.fighter2.losses}</li>
                        <li><strong>Draws: </strong>{fight.fighters.fighter2.draws}</li>
                        <li><strong>Rank: </strong>{fight.fighters.fighter2.rank}</li>
                      </ul>
                    </div>
                    <div className="col-xs-6">
                      <h3>{fight.fighters.fighter2.name}</h3>
                      <h2><strong>{fight.fighters.fighter2.nickname}</strong></h2>
                      <img src={fight.fighters.fighter2.img}/>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-6">
                  <p><br/><button type="button" className="btn btn-defult btn-lg btn-block">{fight.fighters.fighter1.nickname}</button></p>
                </div>
                <div className="col-xs-6">
                  <p><br/><button type="button" className="btn btn-defult btn-lg btn-block">{fight.fighters.fighter2.nickname}</button></p>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-4">
                  <p><br/><button type="button" className="btn btn-defult btn-lg btn-block">KO/TKO</button></p>
                </div>
                <div className="col-xs-4">
                  <p><br/><button type="button" className="btn btn-defult btn-lg btn-block">SUB</button></p>
                </div>
                <div className="col-xs-4">
                  <p><br/><button type="button" className="btn btn-defult btn-lg btn-block">DEC</button></p>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12 col-xs-offset-1">
                  <div className="row">
                    <div className="col-xs-2">
                      <p><br/><button type="button" className="btn btn-defult btn-lg btn-block">RD 1</button></p>
                    </div>
                    <div className="col-xs-2">
                      <p><br/><button type="button" className="btn btn-defult btn-lg btn-block">RD 2</button></p>
                    </div>
                    <div className="col-xs-2">
                      <p><br/><button type="button" className="btn btn-defult btn-lg btn-block">RD 3</button></p>
                    </div>
                    <div className="col-xs-2">
                      <p><br/><button type="button" className="btn btn-defult btn-lg btn-block">RD 4</button></p>
                    </div>
                    <div className="col-xs-2">
                      <p><br/><button type="button" className="btn btn-defult btn-lg btn-block">RD 5</button></p>
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
