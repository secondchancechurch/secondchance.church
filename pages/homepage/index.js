import React, { Component } from 'react'
import Link from 'next/link'

// FontAwesome
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import solid from '@fortawesome/fontawesome-free-solid'
import brands from '@fortawesome/fontawesome-free-brands'

import styled from 'react-emotion'
import { darken } from 'polished'
import { colors } from "../../styles/vars";
import { Container, Button } from "../../styles/base/components";
import { SEO } from "../../Layout/seo";

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

// const Card = styled('div')`
//   display: grid;
//   grid-template-columns: 2fr 3fr;
//   color: ${colors.darkPrimary};
//   max-width: 60%;
//   margin: 60px auto 0;
//
//   @media (max-width: 768px) {
//     max-width: 80%;
//     grid-template-columns: 1fr;
//     margin-bottom: 60px;
//
//     .image {
//       grid-row: 1;
//       padding-top: 50%;
//     }
//
//     .content {
//       grid-row: 2;
//     }
//   }
//
//   .image {
//     background-image: url("/static/bleckley_station.jpg");
//     background-size: cover;
//     background-position: center;
//     background-repeat: no-repeat;
//   }
//
//   .content {
//     text-align: left;
//     padding: 40px;
//     background-color: ${colors.lightPrimary};
//
//     ${Button} {
//       margin-top: 15px;
//
//       &:hover {
//         background-color: ${darken(0.1, '#B11E23')};
//         color: ${colors.lightPrimary};
//       }
//     }
//
//     h4 {
//       text-transform: uppercase;
//     }
//
//     ul {
//       padding: 0;
//       font-weight: 400;
//       list-style-position: inside;
//       list-style: none;
//
//       li:not(:last-of-type) {
//         margin-bottom: 10px;
//       }
//     }
//   }
// `

const Card = styled('div')`
  color: ${colors.darkPrimary};
  max-width: 60%;
  margin: 60px auto 0;
  
  @media (max-width: 768px) {
    max-width: 80%;
    margin-bottom: 60px;
    
    .image {
      padding-top: 50%;
    }
  }

  .image {
    background: url("/static/EasterSecondChance.jpg") no-repeat center;
    background-size: cover;
    padding-top: 50%;
  }
  
  .content {
    text-align: center;
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

export class PageContent extends Component {

  constructor() {
    super();
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
            {console.log(this.props)}
            <SEO
                title="Welcome"
                description="We're A Church For People Who Need A Second Chance."
                image="/static/secondchance.jpg"
            />
            <div />
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
                  {this.props.isLive &&
                  <Button
                      href="http://live.mysecondchancechurch.com"
                      target="_blank"
                      rel="noopener"
                  >
                    Watch Live
                  </Button>
                  }

                  {/*<div>*/}

                    {/*<Card horizontal>*/}
                      {/*<div className={"image"}/>*/}
                      {/*<div className="content">*/}
                        {/*<h2>Easter @ Second Chance</h2>*/}
                        {/*<Link href="/easter">*/}
                          {/*<Button>*/}
                            {/*Learn More*/}
                          {/*</Button>*/}
                        {/*</Link>*/}
                      {/*</div>*/}
                    {/*</Card>*/}
                  {/*</div>*/}

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
