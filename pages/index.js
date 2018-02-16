import React, { Component } from 'react'
import Router from 'next/router'

// Analytics
import ReactGA from 'react-ga';

// FontAwesome
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import solid from '@fortawesome/fontawesome-free-solid'

import styled from 'react-emotion'
import { Container, Button } from "../styles/base/components";

import moment from 'moment-timezone'

import { Navigation } from "../components/sections/navigation";

const FullScreen = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 132px 1fr;
  
  ${props => props.backgroundImage && `
    position: relative;
    
    &:after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: rgba(15,15,15,0.5);
  `}
`;

const H5 = styled.h5`
  margin-top: 15px;
  text-transform: uppercase;
  
  a {
    color: #fff;
    text-transform: uppercase;
    font-weight: 500;
    letter-spacing: 0.5px;
    text-decoration: none;
       
    &:hover {
      color: #fff;
    }
    
    &:before {
      content: '';
      display: block;
      height: 1px;
      width: 75px;
      margin: 20px auto 10px;
      background-color: rgba(255,255,255,0.75);
    }
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

  componentWillMount = () => {
    const estTime = moment(moment.tz("America/New_York").format('HH:mm'))._i;

    if (moment().day() === 0 && (estTime >= '10:50' && estTime <= '11:55')) {
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
        <FullScreen
          backgroundImage
          className="vc_row wpb_row section vc_row-fluid"
          style={{
            backgroundImage: 'url("https://d120pbh18rvtk.cloudfront.net/perrynoble/perry_preaching.jpg")',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            textAlign: 'center'
          }}
        >
          <Navigation isLive={this.state.isLive} />
          <div>
              <Container center>
                <div
                    style={{
                      color: '#FFF',
                      zIndex: 10,
                      padding: 20
                    }}
                >
                  <h1
                      style={{
                        fontSize: '2.5em',
                        letterSpacing: '0.5px',
                        textTransform: 'capitalize',
                        marginBottom: '15px',
                        display: 'block'
                      }}
                  >
                    A church for people who need a second chance.
                  </h1>
                  <h3
                      style={{ lineHeight: '1em' }}
                  >
                    Sundays @ 11am Online
                  </h3>
                  {this.state.isLive &&
                  <Button
                      href="http://live.mysecondchancechurch.com"
                      target="_blank"
                      rel="noopener"
                  >
                    Watch Live
                  </Button>
                  }

                  <div>
                    <H5>
                      <a
                          href="//facebook.com/mysecondchancechurch"
                          target="_blank"
                          rel="noopener"
                      >
                        Follow Us On Facebook <FontAwesomeIcon icon={["fas", "chevron-right"]} style={{ paddingLeft: 5 }} />
                      </a>
                    </H5>
                  </div>

                </div>
              </Container>
          </div>
        </FullScreen>
    );
  }
}
