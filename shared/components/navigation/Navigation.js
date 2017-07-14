import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import PropTypes from 'prop-types';
import s from './Navigation.scss';
import { nav } from 'react-bootstrap';

export default class Navigation extends Component {

  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    return (
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">TipOnint!</a>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li><Link to="/bet">Bet</Link></li>
              <li><Link to="/">home </Link></li>
              <li><Link to="/planets">Planets</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
          </div>
        </div>
      </nav>
      /*<nav className={s.navigation}>
        <ul className={s.navigation__list}>
          {React.Children.map(this.props.children, component => (
            <li className={s.navigation__item}>
              {React.cloneElement(component, {
                className: s.navigation__link,
              })}
            </li>
          ))}
        </ul>
      </nav>*/
    );
  }
}
