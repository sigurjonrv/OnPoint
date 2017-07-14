import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Segment from 'components/segment';
import { Button } from 'react-bootstrap';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Helmet title="Home" />

        <Segment>
          <h1>Nothing feels like ::ffff!</h1>
        </Segment>

        <Segment>
          <Button id="something-btn" type="button" className="btn btn-success btn-bg">
            Something
          </Button>
          <Button href="http://ueno.co">Ueno.co</Button>
          <Button to="/about">About</Button>
        </Segment>
      </div>
    );
  }
}
