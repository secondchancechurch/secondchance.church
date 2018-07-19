import React, { Component } from 'react'
import NoSSR from 'react-no-ssr'

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
        <NoSSR>
          <div>
            <div id="la1-video-player" data-embed-id="dfe7098b-68f1-43ec-9e61-58927d9194ad" />
            <div dangerouslySetInnerHTML={{ __html: `<script type="application/javascript" data-main="//control.livingasone.com/webplayer/loader.js" src="//control.livingasone.com/webplayer/require.js"></script>`}} />
          </div>
        </NoSSR>
      </EmbedContainer>
    )
  }
}
