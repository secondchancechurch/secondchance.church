import React, { Component } from 'react'

// Analytics
import ReactGA from 'react-ga';

import moment from 'moment-timezone'

import { Navigation } from "../components/sections/navigation";

import styled from 'react-emotion'

ReactGA.initialize('UA-2471373-60');

const LayoutStyles = styled('div')`
 header {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }
`

export class Layout extends Component {

  constructor() {
    super();
    this.state = {
      isLive: false,
    }
  }

  componentWillMount = () => {
    const estTime = moment(moment.tz("America/New_York").format('HH:mm'))._i;

    if (moment().day() === 0 && ((estTime >= '10:50' && estTime <= '11:55') || (estTime >= '14:50' && estTime <= '15:35') || (estTime >= '16:50' && estTime <= '17:35') || (estTime >= '18:50' && estTime <= '19:35'))) {
      this.setState({
        isLive: true,
      })
    }
  }

  componentDidMount = () => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  render() {
    return (
      <LayoutStyles>
        <Navigation isLive={this.state.isLive}/>
        {React.cloneElement(
          this.props.children, {isLive: this.state.isLive}
        )}
      </LayoutStyles>
    );
  }
}
