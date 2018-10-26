import React, { Component } from 'react'
import Head from 'next/head'

import { Layout } from "../../Layout"
import { Container, Button } from "../../styles/base/components"
import { SEO } from "../../Layout/seo"
import styled, { css } from 'react-emotion'
import {variables, colors} from "../../styles/vars";

const Hero = styled('div')`
  background-color: ${colors.primary};
  background-image: url("/static/serve.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  text-align: center;
  position: relative;
  min-height: 50vh;
  display: flex;
  align-content: center;
  
  h1 {
    font-size: 2.5em;
    padding-top: 110px;
  }
    
  &:after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-image: -moz-linear-gradient( -62deg, rgb(177,30,35) 0%, rgb(105,16,19) 100%);
    background-image: -webkit-linear-gradient( -62deg, rgb(177,30,35) 0%, rgb(105,16,19) 100%);
    background-image: -ms-linear-gradient( -62deg, rgb(177,30,35) 0%, rgb(105,16,19) 100%);
    opacity: 0.93;
  }
  
  .overlay {
    position: relative;
    z-index: 10;
    color: ${colors.lightPrimary};
    align-items: center;
  }
  
  .padding {
    padding: ${variables.baseSpacing}px;
    display: flex;
  }
  
  img {
    position: relative;
    z-index: 10;
    margin: auto;
    max-width: 540px;
    width: 100%;
    height: auto;
  }
`

const Content = styled('section')`

  
  .container {
    max-width: 860px;
    padding: 60px;
    margin: auto;
     align-items: center;
   
   iframe {
      width: 100%;
      max-width: 700px;
      display: block;
      margin: 4rem auto 0;
   } 
    
    ul {
      padding: 0;
      list-style: none;
      
      h4 {
        margin-bottom: 10px;
      }
      
      li:not(:last-of-type) {
        margin-bottom: 30px;
      }
    }
    
    .content {
      padding: 60px 0;
    }
    
    .heading {
      grid-column: span 2;
    }
    
    @media (min-width: 426px) and (max-width: 768px) {
      grid-template-columns: 1fr;
      padding: 60px 30px;
      
      .heading {
        grid-column: span 1;
      }
      
      .content {
        padding: 0;
      } 
    }
    
    @media (max-width: 425px) {
      grid-template-columns: 1fr;
      padding: 60px 20px;
     
      .heading {
        grid-column: span 1;
      }
      
      .content {
        padding: 0;
      } 
    }
  }
`


class Serve extends Component {
  constructor() {
    super()
    this.iFrame = null
    this.state = {
      iFrameHeight: '700px'
    }
  }

  componentDidMount = () => {
    // const obj = ReactDOM.findDOMNode(this.iFrame);
    // this.setState({ iFrameHeight: obj.contentWindow.document.body.scrollHeight + 'px'});
  }

  render() {
    return(
      <Layout>
        <div>
          <Head>
            <script src="https://js.churchcenter.com/modal/v1" />
          </Head>
          <SEO
              title="Serve @ Second Chance"
              description="We're so excited that you're interested in serving with us! Please fill out the interest form below, and we'll be in touch to discuss upcoming volunteer opportunities with you"
              image="/static/serve.jpg"
          />
          <Hero>
            <Container>
              <div className={"padding overlay"}>
                <h1>Serve @ Second Chance</h1>
              </div>
            </Container>
          </Hero>
          <Content>
            <Container>
              <div className="container">
                <h2>Volunteer Interest</h2>
                <p>We're so excited that you're interested in serving with us! Please fill out the interest form below, and we'll be in touch to discuss upcoming volunteer opportunities with you</p>
                <Button href="https://secondchance.churchcenter.com/people/forms/3185?open-in-church-center-modal=true">Sign Up</Button>
              </div>
            </Container>
          </Content>
        </div>
      </Layout>
    )
  }
}

export default Serve
