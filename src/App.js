import React, { Component } from 'react';
import { Icon } from 'react-font-awesome-5';
import ReactGA from 'react-ga';

import './styles/responsive.css';
import './styles/style_dynamic.css'
import './styles/style_dynamic_responsive.css'
import './styles/print.css'
import './styles/timetable-schedule-responsive.css'
import './styles/timetable-schedule.css'
import './styles/custom_css.css';
import './styles/stylesheet.min.css'

import lightLogo from './logo/SCC-logo_white.png'
import logo from './logo/SCC-logo.png'

import styled from 'styled-components'

import moment from 'moment-timezone'

const FullScreen = styled.div`
  height: 100vh;
  
  @media (max-width: 768px) {
    height: ${props => props.mobileHeight ? props.mobileHeight : '100vh'};
  }
  
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

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  max-width: 1640px;
  margin-left: auto;
  margin-right: auto;
  
  ${props => props.center && (`
    height: 100%;
    align-items: center;
    justify-content: center;
    `)}
`;

const H5 = styled.h5`
  margin-top: 15px;
  text-transform: uppercase;
  
  a {
    color: #fff;
    text-transform: uppercase;
    font-weight: 500;
    letter-spacing: 0.5px;
       
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

const Logo = styled.div`
  width: 25%;
  
  @media (max-width: 768px) {
    width: 50%;
  }
  
  .desktop {
    display: none;
     
    @media (min-width: 769px) {
      display: block;
      width: 200px;
      height: auto;
    }
  }
  
  .mobile {
    display: block;
    width: 150px;
    height: auto;
    
    @media (min-width: 769px) {
      display: none;
    }
  }
`;

const Header = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
`;

const Button = styled.a`
  background-color: #B11E23;
  border-radius: 4px;
  padding: 15px 30px;
  transition: all 0.15s ease-in-out;
  display: inline-block;
  margin-top: 30px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 16px;
  line-height: 1em;
  
  &:hover {
    background-color: #FFF;
    color: #b11e23;
    cursor: pointer;
    transition: all 0.15s ease-in-out;
  }
`;

const MobileTrigger = styled.div`
  display: none;
  width: 50%;
  
  span {
    color: #303030;
  }
  
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    
    span {
      width: 100%;
      text-align: right;
    }
  }
`

const Nav = styled.nav`
  display: flex;
  align-items: center;
  text-align: right;
  width: 75%;
  
  ul {
    list-style: none;
    width: 100%;
  }
  
  li {
    display: inline-block;
    vertical-align: middle;
    
    &:last-child {
      a {
        padding-right: 0;
      }
    }
    
    a {
      line-height: unset !important;
      display: block !important;
    }
  }
  
   
   @media (max-width: 768px) {
      width: 100%;
      text-align: left;
      display: ${props => props.navOpen ? 'flex !important' : ''};
      margin-top: 30px;
       
      li {
        display: block !important;
        
        span {
          display: block !important;
        }
        
        &:not(:last-child) {
          margin-bottom: 15px;
          
          span:after {
            content: '';
            width: 100%;
            display: block;
            height: 1px;
            background-color: #303030;
            margin-top: 15px;
          }
          
          a span > span.underline_dash {
            display: none !important;
          }
        }
        
        a {
          color: #303030 !important;
        }
      }
    }
  
`

ReactGA.initialize('UA-2471373-60');
ReactGA.pageview(window.location.pathname + window.location.search);

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLive: false,
      navOpen: false,
      mobileHeight: null
    }
  }

  componentWillMount = () => {
    if (moment().day() === "Sunday" && moment(moment.tz("America/New_York").format('HH:mm').isBetween('10:55', '11:55'))) {
      this.setState({
        isLive: true,
      })
    }
  }

  componentDidMount = () => {
    setTimeout( () => {
      this.setState({
        mobileHeight: window.innerHeight - document.getElementsByTagName('header')[0].offsetHeight + 'px'
      })
        }, 250
    )
  }

  mobileNav = () => {
    this.setState({
      navOpen: !this.state.navOpen
    })
  }

  render() {
    return (
      <div className="App">
        <Header className="scroll_header_top_area light regular transparent page_header">
          <Container className="header_inner" style={{ padding: 20 }}>
            <Logo>
              <a itemProp="url" href="/" style={{ display: 'block' }}>
                <img className="desktop" src={lightLogo} alt="Logo"/>
                <img className="mobile" src={logo} alt="Logo" />
              </a>
            </Logo>

            <MobileTrigger className="mobile_menu_button" style={{ marginRight: 0 }}>
              <span onClick={this.mobileNav}>
                {this.state.navOpen ?
                  <Icon.TimesCircle.regular style={{ fontSize: '1.5em' }} /> : <Icon.Bars style={{ fontSize: '1.5em' }} />
                }
              </span>
            </MobileTrigger>

            <Nav className="main_menu drop_down right" navOpen={this.state.navOpen}>
              <ul>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-104 current_page_item active narrow">
                  <a href="/" className="current">
                    <i className="menu_icon blank fa" />
                    <span>
                      Home
                      <span className="underline_dash" />
                    </span>
                  </a>
                </li>

                <li className="menu-item menu-item-type-custom menu-item-object-custom  narrow">
                  <a target="_blank" rel="noopener" href="https://pushpay.com/pay/secondchancechurch">
                    <i className="menu_icon blank fa" />
                    <span>
                      Give
                      <span className="underline_dash" />
                    </span>
                  </a>
                </li>
                {this.state.isLive &&
                  <li>
                    <a
                        href="//facebook.com/mysecondchancechurch/videos"
                        target="_blank"
                        rel="noopener"
                    >
                      <span>
                        Watch Live
                        <span className="underline_dash" />
                      </span>
                    </a>
                  </li>
                }
              </ul>
            </Nav>
          </Container>
        </Header>

        <div>
          <FullScreen
              backgroundImage
              className="vc_row wpb_row section vc_row-fluid"
              mobileHeight={this.state.mobileHeight}
              style={{
                backgroundImage: 'url("https://d120pbh18rvtk.cloudfront.net/perrynoble/perry_preaching.jpg")',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                textAlign: 'center'
              }}
          >
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
                    href="//facebook.com/mysecondchancechurch/videos"
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
                      Follow Us On Facebook <Icon.ChevronRight style={{ paddingLeft: 5 }} />
                    </a>
                  </H5>
                </div>

              </div>
            </Container>
          </FullScreen>
        </div>
      </div>
    );
  }
}

export default App;
