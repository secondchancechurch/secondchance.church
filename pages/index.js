import React, { Component } from 'react'

// Analytics
import ReactGA from 'react-ga';

// FontAwesome
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import solid from '@fortawesome/fontawesome-free-solid'
import brands from '@fortawesome/fontawesome-free-brands'

import styled from 'react-emotion'
import { darken } from 'polished'
import { colors } from "../styles/vars";
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

const Card = styled('div')`
  display: grid;
  grid-template-columns: 2fr 3fr;
  color: ${colors.darkPrimary};
  max-width: 60%;
  margin: 60px auto 0;
  
  @media (max-width: 768px) {
    max-width: 80%;
    grid-template-columns: 1fr;
    margin-bottom: 60px;
    
    .image {
      grid-row: 1;
      padding-top: 50%;
    }
    
    .content {
      grid-row: 2;
    }
  }

  .image {
    background-image: url("/static/bleckley_station.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;    
  }
  
  .content {
    text-align: left;
    padding: 40px;
    background-color: ${colors.lightPrimary};
    
    ${Button} { 
      margin-top: 15px;
      
      &:hover {
        background-color: ${darken(0.1, '#B11E23')};
        color: ${colors.lightPrimary};
      }
    }
    
    h4 {
      text-transform: uppercase;
    }
     
    ul {
      padding: 0;
      font-weight: 400;
      list-style-position: inside;
      list-style: none;
      
      li:not(:last-of-type) {
        margin-bottom: 10px;
      }
    }
  }
`

const TextButton = styled('a')`
  display: block;
  text-decoration: none;
  color: #B11E23;
  font-weight: 600;
  margin-top: 30px;
  transition: all 0.3s ease-in-out;
  
  svg {
    transition: all 0.3s ease-in-out;
    position: relative;
    top: 1px;
  } 
  
  &:hover {
    color: ${darken(0.1, '#B11E23')};
    transition: all 0.3s ease-in-out;
    
    svg {
      margin-left: 4px;
      transition: all 0.3s ease-in-out;
    }
  }
`

const Connect = styled('div')`
  z-index: 10;
  
  ul {
    list-style: none;
    padding: 0;
    
    li {
      display: inline-block;
      
        h4 {
          color: ${colors.lightPrimary};
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottomn: 0;
        }
      
        a {
        color: ${colors.lightPrimary};
        padding: 10px;
        transition: all 0.3s ease-in-out;
        
        &:hover {
          color: ${darken(0.1, '#B11E23')};
          transition: all 0.3s ease-in-out;
        }
      }
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
                  {/*<H5>*/}
                    {/*<a*/}
                        {/*href="//facebook.com/mysecondchancechurch"*/}
                        {/*target="_blank"*/}
                        {/*rel="noopener"*/}
                    {/*>*/}
                      {/*Follow Us On Facebook <FontAwesomeIcon icon={["fas", "chevron-right"]} style={{ paddingLeft: 5 }} />*/}
                    {/*</a>*/}
                  {/*</H5>*/}

                  <Card>
                    <div className={"image"}/>
                    <div className="content">
                      <h2>Easter @ Second Chance</h2>
                      <h4>Service Times</h4>
                      <ul>
                        <li>March 31st @ 4pm (EST)</li>
                        <li>March 31st @ 6pm (EST)</li>
                        <li>April 1st @ 9:15am (EST)</li>
                        <li>April 1st @ 11:15am (EST)</li>
                      </ul>
                      <h4>Location</h4>
                      <p>
                        Bleckley Station<br/>
                        310 S Main St<br/>
                        Anderson, SC 29624
                      </p>
                      <Button
                        href="http://easter.mysecondchancechurch.com"
                        target="_blank"
                      >
                        Get Tickets
                      </Button>
                      {/*<TextButton*/}
                        {/*href="http://rock.mysecondchancechurch.com/easter/volunteer"*/}
                        {/*target="_blank"*/}
                      {/*>*/}
                        {/*Volunteer <FontAwesomeIcon icon={["fas", "chevron-right"]} size="xs" />*/}
                      {/*</TextButton>*/}
                    </div>
                  </Card>
                </div>

                </div>
              </Container>
          </div>
          <Connect>
            <ul>
              <li>
                <h4>
                  Connect With Us:
                </h4>
              </li>
              <li>
                <a
                  href="https://facebook.com/mysecondchancechurch"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={["fab", "facebook"]} size="lg" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/channel/UCCpz1dcwossIIP8hW61DOqw"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={["fab", "youtube"]} size="lg" />
                </a>
              </li>
              <li>
                <a
                    href="https://itunes.apple.com/us/podcast/second-chance-church-podcast/id1339776817?mt=2"
                    target="_blank"
                >
                  <FontAwesomeIcon icon={["fas", "podcast"]} size="lg" />
                </a>
              </li>
            </ul>
          </Connect>
        </FullScreen>
    );
  }
}
