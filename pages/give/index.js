import React, { Component } from 'react'

import { SEO } from "../../Layout/seo";
import styled, { css } from 'react-emotion'
import { Layout } from "../../Layout";
import { Container } from "../../styles/base/components";
import { variables, colors } from "../../styles/vars";
import { Button } from "../../styles/base/components";

const Hero = styled('div')`
  background: url('https://images.unsplash.com/photo-1501162946741-4960f990fdf4?ixlib=rb-0.3.5&s=64193e10dfc839c4308c012f17701e35&auto=format&fit=crop&w=1800&q=80') no-repeat center;
  background-size: cover;
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

const SideBySide = styled('section')`

  a {
    text-decoration: none;
    font-weight: 800;
    margin-top: 10px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    
    &:hover {
      background-color: ${colors.primary};
      color: ${colors.lightPrimary};
    }
  }

  &.gradient {
    background-image: -moz-linear-gradient( -62deg, rgb(177,30,35) 0%, rgb(105,16,19) 100%);
    background-image: -webkit-linear-gradient( -62deg, rgb(177,30,35) 0%, rgb(105,16,19) 100%);
    background-image: -ms-linear-gradient( -62deg, rgb(177,30,35) 0%, rgb(105,16,19) 100%);
    
    a {
      color: ${colors.lightPrimary};
    }
  }

  .container {
    max-width: 1680px;
    padding: 60px;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 60px;
    align-items: center;
    
    &.reversed {
      direction: rtl;
      text-align: left;
      
      div {
        direction: ltr;
      }
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

const EasterStyles = styled('div')`
  h2 {
    font-size: 2em;
  }
  
  header {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }
`


class Give extends Component {

  render() {
    return(
        <Layout>
          <EasterStyles>
            <SEO
                title="Give"
                description=""
                image=""
            />
            <Hero>
              <Container>
                <div className={"padding overlay"}>
                  <h1>How Can I Give?</h1>
                </div>
              </Container>
            </Hero>

            {/* Ways to give */}
            <SideBySide>
              <div className="container grid">
                <div style={{ textAlign: 'center' }}>
                  <h2>By Mail</h2>
                  <p>
                    Second Chance Church<br/>
                    210 South Main Street<br/>
                    Anderson, SC 29624
                  </p>
                </div>
                <div className={"content"} style={{ textAlign: 'center' }}>
                  <h2>Online</h2>
                  <Button href="/give/now" target="_blank" rel="noopener noreferrer">Give Now</Button>
                </div>
              </div>
            </SideBySide>
          </EasterStyles>
        </Layout>
    )
  }
}

export default Give