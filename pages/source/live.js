import React, { Component } from 'react'

// Analytics
import ReactGA from 'react-ga';

import styled from 'react-emotion'
import { colors } from "../../styles/vars";

const EmbedContainer = styled('div')`
  max-width: 1640px;
  margin: auto;
   
  iframe,
  object,
  embed {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  } 
`

ReactGA.initialize('UA-2471373-60');

export default class Index extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLive: false,
    }
  }

  componentDidMount = () => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  render() {
    return (
      <EmbedContainer className="embed-container">
        <iframe
          frameborder="0"
          src="https://yourstreamlive.com/embed/iframe/live/5761?&responsive=yes&aspect_ratio=16:9"
          marginheight="0"
          marginwidth="0"
          scrolling="auto"
          allowFullScreen="yes"
          allowtransparency="yes"
          name="live"
          id="live"
        />
      </EmbedContainer>
    )
  }
}
