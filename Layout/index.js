import React, { Component } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import MessengerCustomerChat from 'react-messenger-customer-chat'

// Analytics
import ReactGA from 'react-ga';

import moment from 'moment-timezone'

import { Navigation } from "../components/sections/navigation";

import styled, { css } from 'react-emotion'
import { colors } from "../styles/vars";

ReactGA.initialize('UA-2471373-60');

const LayoutStyles = styled('div')`
 header {
    position: absolute;
    top: ${props => props.offset};
    left: 0;
    right: 0;
    transition: all 0.25s ease-in-out;
  }
  
  footer {
    background-color: ${colors.primary};
    color: #fff;
    padding: 20px;
    font-size: 90%;
    text-align: center;
    
    a {
      color: #fff;
      text-decoration: none;
      
      &:hover {
        text-decoration: underline;
      }
    }
  }
`

export class Layout extends Component {

  constructor() {
    super();
    this.state = {
      isLive: false,
      headerOffset: 0
    }
  }

  componentDidMount = () => {
    ReactGA.pageview(window.location.pathname + window.location.search);

    window.cookieconsent.initialise({
      "palette": {
        "popup": {
          "background": colors.lightPrimary,
          "text": colors.darkPrimary
        },
        "button": {
          "background": colors.primary,
          "text": "#ffffff"
        }
      },
      "theme": "edgeless",
      "position": "top",
      "static": true
    })

    setTimeout(this.headerOffset, 1000)
  }

  headerOffset = () => {
    const cookieConsent = document.getElementsByClassName('cc-grower')
    console.log(cookieConsent[0].offsetHeight)

    this.setState({
      headerOffset: cookieConsent.length ? cookieConsent[0].offsetHeight : 0
    })
  }

  render() {
    return (
      <LayoutStyles offset={this.state.headerOffset}>
        <Head>
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.0.3/cookieconsent.min.css" />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.0.3/cookieconsent.min.js" />
        </Head>
        <Navigation isLive={this.state.isLive} />
        {React.cloneElement(
          this.props.children, {isLive: this.state.isLive}
        )}
        <footer>
          ©2018 Second Chance Church | <Link href={"/legal"}><a>Privacy Policy</a></Link>
        </footer>
        <MessengerCustomerChat
            pageId="514434678921389"
            appId="250448395574524"
            themeColor="#B11E23"
            minimized={true}
            loggedInGreeting="Hi! Welcome to Second Chance Church!"
            loggedOutGreeting="Hi! Welcome to Second Chance Church!"
        />
      </LayoutStyles>
    );
  }
}
