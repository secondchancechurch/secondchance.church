import React, { Component } from 'react'
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

import { SEO } from "../../Layout/seo";
import styled, { css } from 'react-emotion'
// import { colors } from "../styles/vars";
import { Layout } from "../../Layout";
import { Container } from "../../styles/base/components";
import { Navigation } from "../../components/sections/navigation";
import { variables, colors } from "../../styles/vars";

// Analytics
import ReactGA from 'react-ga';

// FontAwesome
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import solid from '@fortawesome/fontawesome-free-solid'

const Hero = styled('div')`
  background: url('/static/bleckley_station_outside.jpg') no-repeat center;
  background-size: cover;
  text-align: center;
  position: relative;
  min-height: 75vh;
  display: flex;
  align-content: center;
    
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
    color: ${colors.primary};
    text-decoration: none;
    font-weight: 800;
    margin-top: 10px;
    display: block;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    
    svg {
      transition: all 0.15s ease-in-out;
      margin-left: 5px;
      top: -1px;
      position: relative;
    }
    
    &:hover svg {
      margin-left: 10px;
      transition: all 0.15s ease-in-out;
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
    
    @media (min-width: 426px) and (max-width: 768px) {
      grid-template-columns: 1fr;
      padding: 30px;
      
      .content {
        padding: 0;
      } 
    }
    
    @media (max-width: 425px) {
      grid-template-columns: 1fr;
      padding: 20px;
      
      .content {
        padding: 0;
      } 
    }
  }
`

const FAQ = styled('section')`

  .content {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 60px;
  max-width: 1680px;
  margin: auto;
  padding: 60px 0;
  
  .heading {
    grid-column: span 3;
    text-align: center;
  }
  
  @media (min-width: 426px) and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    
    .heading {
      grid-column: span 2;
    }
  }
  
  @media (max-width: 425px) {
    grid-template-columns: 1fr;
    
    .heading {
      grid-column: span 1;
    }
  }
  }
`

const EasterStyles = styled('div')`
  h2 {
    font-size: 2.5em;
  }
  
  header {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }
`

const ServiceTimes = styled('section')`
  text-align: center;
  background-color: ${colors.lightSecondary};
  
  h2 {
    font-size: 1.5em;
    text-transform: uppercase;
    font-weight: 800;
    letter-spacing: 0.5px;
  }
  
  .content {
    max-width: 1680px;
    margin: auto;
    padding: 30px 0 20px;
  }
  
  ul {
    list-style: none;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 0;
  }
  
  li {
    display: inline-block;
    flex-grow: 1;
    flex-basis: 0;
  }
  
  li:not(:last-of-type) {
    margin-bottom: 16px;
  }
`

const EasterMap = withScriptjs(withGoogleMap(props =>
    <GoogleMap
        defaultZoom={17.5}
        defaultCenter={{ lat: 34.5018256, lng: -82.651119 }}
    >
      <Marker position={{ lat: 34.501743, lng: -82.650806 }} onClick={() => window.open('https://www.google.com/maps/dir//34.501743,-82.650806')} />
    </GoogleMap>
));

const ParkingMap = withScriptjs(withGoogleMap(props =>
    <GoogleMap
        defaultZoom={17.5}
        defaultCenter={{ lat: 34.502689, lng: -82.651055 }}
    >
      <Marker position={{ lat: 34.501743, lng: -82.650806 }} onClick={() => window.open('https://www.google.com/maps/dir//34.501743,-82.650806')} /> {/* Bleckley */}
      <Marker position={{ lat: 34.502335, lng: -82.651216 }} onClick={() => window.open('https://www.google.com/maps/dir//34.502335,-82.651216')} /> {/* Palmetto Building */}
      <Marker position={{ lat: 34.502978, lng: -82.651326 }} onClick={() => window.open('https://www.google.com/maps/dir//34.502978,-82.651326')} /> {/* Courthouse */}
      <Marker position={{ lat: 34.503458, lng: -82.651390 }} onClick={() => window.open('https://www.google.com/maps/dir//34.503458,-82.651390')} /> {/* Parking Garage */}
    </GoogleMap>
));

class Easter extends Component {

  render() {
    return(
      <Layout>
        <EasterStyles>
          <SEO
            title="Easter at Second Chance"
            description="Join us at Bleckley Station, or online for our first Easter Services on March 31st and April 1st"
            image="/static/EasterSecondChance.jpg"
          />
          {/* Easter @ Second Chance Church */}
          <Hero>
            <Container>
              <div className={"padding"}>
                <img src="/static/easter_v2.svg" alt=""/>
              </div>
            </Container>
          </Hero>

          {/* Service Times */}
          <ServiceTimes>
            <div className="content">
              <h2>Service Times</h2>
              <ul>
                <li>Saturday March 31st @ 4 & 6pm</li>
                <li>Sunday April 1st @ 9:15 & 11:15am</li>
                <li><strong>Online:</strong> Sunday April 1st @ 9:15 & 11:15am</li>
              </ul>
            </div>
          </ServiceTimes>

          {/* Venue Location */}
          <SideBySide>
            <div className="container grid">
            <div style={{ position: 'relative' }}>
              <EasterMap
                  googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                  loadingElement={<div style={{ height: `100%` }} />}
                  containerElement={<div style={{ paddingTop: '60%' }} />}
                  mapElement={<div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }} />}
              />
            </div>
           <div className={"content"}>
            <h2>Location</h2>
             <h3>Bleckley Station</h3>
            <p>
              Entrance is off of W Church Street<br/>
              <a href="https://www.google.com/maps/dir//34.501743,-82.650806" target="_blank">
                Get Directions
                <FontAwesomeIcon icon={["fas", "arrow-right"]} size="xs" />
              </a>
            </p>
           </div>
            </div>
          </SideBySide>

          {/* Parking */}
          <SideBySide className="gradient" style={{ color: colors.lightPrimary }}>
            <div className="container reversed">
              <div style={{ position: 'relative' }}>
                <ParkingMap
                    googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ paddingTop: '60%' }} />}
                    mapElement={<div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }} />}
                />
              </div>
              <div className={"content"}>
                <h2>Parking</h2>
                <ul>
                  <li>
                    <h3>Bleckley Station</h3>
                    <p>
                      Entrance is off of W Church St.<br/>
                      <a href="https://www.google.com/maps/dir//34.501743,-82.650806" target="_blank">
                        Get Directions
                        <FontAwesomeIcon icon={["fas", "arrow-right"]} size="xs" />
                      </a>
                    </p>
                  </li>
                  <li>
                    <h3>The Palmetto Building</h3>
                    <p>
                      Entrance is off of S Murray Ave.<br/>
                      <a href="https://www.google.com/maps/dir//34.502335,-82.651216" target="_blank">
                        Get Directions
                        <FontAwesomeIcon icon={["fas", "arrow-right"]} size="xs" />
                      </a>
                    </p>
                  </li>
                  <li>
                    <h3>Anderson County Courthouse</h3>
                    <p>
                      Entrance is off of S Murray Ave.<br/>
                      <a href="https://www.google.com/maps/dir//34.502978,-82.651326" target="_blank">
                        Get Directions
                        <FontAwesomeIcon icon={["fas", "arrow-right"]} size="xs" />
                      </a>
                    </p>
                  </li>
                  <li>
                    <h3>West Whitner St. Parking Garage</h3>
                    <p>
                      Entrance is off of W Whitner St.<br/>
                      <a href="https://www.google.com/maps/dir//34.503458,-82.651390" target="_blank">
                        Get Directions
                        <FontAwesomeIcon icon={["fas", "arrow-right"]} size="xs" />
                      </a>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </SideBySide>

          {/* FAQ */}
          <FAQ>
            <div className="content">
              <div className="heading">
                <h2>FAQ</h2>
              </div>
              <div>
                <h3>I Never Received My Tickets?</h3>
                <p>Please check your spam folder, if you haven't yet received your tickets please send us an email at hello@mysecondchancechurch.com and we'll be in touch.</p>
              </div>
              <div>
                <h3>Is My Email The Tickets?</h3>
                <p>Yes, please bring either a printed copy of the email or your phone to show at the door.</p>
              </div>
              <div>
                <h3>Do I Need Tickets?</h3>
                <p>Currently we are on a waitlist, however we will have two lines for each service. One will be for people who have tickets and the other will be for those without. We will do our best to seat as many people as possible for each service.</p>
              </div>
              <div>
                <h3>What About Kids?</h3>
                <p>Your children are more than welcome to join us in service during our Easter service.</p>
              </div>
              <div>
                <h3>Will We Be Meeting At The Bleckley Permanently?</h3>
                <p>After Easter we will continue to meet weekly online. We hope to get a physical campus very soon.</p>
              </div>
            </div>
          </FAQ>
        </EasterStyles>
      </Layout>
    )
  }
}

export default Easter