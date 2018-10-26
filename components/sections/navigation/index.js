import React, { Component } from 'react'
import Link from 'next/link'
import { withRouter } from 'next/router'
import { StoreConsumer } from "../../store";

// FontAwesome
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import solid from '@fortawesome/fontawesome-free-solid'

import styled from 'react-emotion'
import { colors } from "../../../styles/vars"
import { Container } from "../../../styles/base/components"

const Header = styled.header`
  position: relative;
  z-index: 10;
  color: #fff;
  overflow: visible;
  z-index: 100;
  background-color: ${props => props.navOpen ? 'rgba(21,21,21,0.7)' : 'transparent'};
`;

const Logo = styled.div`
  width: 25%;
  
  @media (max-width: 768px) {
    width: 50%;
  }
  
  img {
    display: block;
    height: auto;
    width: 200px;
  
    @media (max-width: 768px) {
      width: 150px;
    }
  }
`;

const MobileTrigger = styled.div`
  display: none;
  width: 50%;
 
  span {
    color: ${colors.lightPrimary};
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

const Nav = styled('nav')`
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
      line-height: unset;
      display: block;
      color: ${colors.lightPrimary};
      text-decoration: none;
      
      position: relative;
      padding: 0 17px;
      text-transform: uppercase;
      font-weight: 600;
      font-size: 13px;
      letter-spacing: 1px;
      
      &.current,
      &:hover {
        .underline_dash {
          opacity: 1;
          transition: opacity .3s ease;
        }
      } 
      
      .underline_dash {
        bottom: -50%;
        width: 100%;
        height: 1px;
        opacity: 0;
        transition: opacity .3s ease;
        position: relative;
        display: inline-block;
        line-height: normal;
        background-color: ${colors.lightPrimary};
      }
    }
  }
  
   
   @media (max-width: 768px) {
      display: ${props => props.navOpen ? 'block' : 'none'};
      width: 100%;
      text-align: left;
      display: ${props => props.navOpen ? 'flex !important' : ''};
      margin-top: 30px;
      background-color: ${props => props.navOpen ? 'rgba(21,21,21,0.7)' : 'transparent'};
      height: ${props => props.navOpen ? '100vh' : 'auto'};
      z-index: 100;
      align-items: start;
      
      ul {
        padding: 0;
      }
       
      li {
        display: block !important;
        
        span {
          display: block !important;
        }
        
        a .underline_dash {
          display: none !important;
        }
        
        &:not(:last-child) {
          margin-bottom: 15px;
          
          span:after {
            content: '';
            width: 100%;
            display: block;
            height: 1px;
            background-color: ${colors.lightPrimary};
            margin-top: 15px;
          }
        }
      }
    }
`

class Navigation extends Component {

  constructor() {
    super()
    this.state = {
      navOpen: false
    }
  }

  mobileNav = () => {
    this.setState({
      navOpen: !this.state.navOpen
    })
  }

  render() {

    const { props } = this
    const { router } = props

    return (
        <StoreConsumer>
          {({ isLive }) => (
            <Header
              className="scroll_header_top_area light regular transparent page_header"
              navOpen={this.state.navOpen}
              offset={props.offset}
            >
              <Container className="header_inner" style={{padding: 20}}>
                <Logo>
                  <Link href="/">
                    <a itemProp="url" style={{display: 'block'}}>
                      <img src="/static/logo/SCC-logo_white.png" alt="Logo"/>
                    </a>
                  </Link>
                </Logo>

                <MobileTrigger className="mobile_menu_button" style={{marginRight: 0}}>
                  <span onClick={this.mobileNav}>
                    {this.state.navOpen ?
                        <FontAwesomeIcon
                            icon={["fas", "times"]}
                            style={{fontSize: '1.5em'}}
                        /> :
                        <FontAwesomeIcon
                            icon={["fas", "bars"]}
                            style={{fontSize: '1.5em'}}
                        />
                    }
                  </span>
                </MobileTrigger>

                <Nav className="main_menu drop_down right" navOpen={this.state.navOpen}>
                  <ul>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-104 current_page_item active narrow">
                      <Link href="/">
                        <a className={router.asPath === '/' ? 'current' : ''}>
                          <i className="menu_icon blank fa"/>
                          <span>
                            Home
                            <span className="underline_dash"/>
                          </span>
                        </a>
                      </Link>
                    </li>

                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-104 current_page_item active narrow">
                      <a href="https://www.youtube.com/c/SecondChanceChurch" className={router.asPath === '/sermons' ? 'current' : ''}>
                        <i className="menu_icon blank fa"/>
                        <span>
                          Sermons
                          <span className="underline_dash"/>
                        </span>
                      </a>
                    </li>

                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-104 current_page_item active narrow">
                      <a href="/serve" className={router.asPath === '/serve' ? 'current' : ''}>
                        <i className="menu_icon blank fa"/>
                        <span>
                          Serve
                          <span className="underline_dash"/>
                        </span>
                      </a>
                    </li>

                    <li className="menu-item menu-item-type-custom menu-item-object-custom  narrow">
                      <Link href="/give">
                        <a className={router.asPath === '/give' ? 'current' : ''}>
                          <i className="menu_icon blank fa"/>
                          <span>
                            Give
                            <span className="underline_dash"/>
                          </span>
                        </a>
                      </Link>
                    </li>{console.log(isLive)}
                    {isLive &&
                    <li>
                      <a
                          href="http://live.mysecondchancechurch.com"
                          target="_blank"
                          rel="noopener"
                      >
                          <span>
                            Watch Live
                            <span className="underline_dash"/>
                          </span>
                      </a>
                    </li>
                    }
                  </ul>
                </Nav>
              </Container>
            </Header>
          )}
        </StoreConsumer>
    )


  }
}

const withRouterData = withRouter(Navigation)

export { withRouterData as Navigation }