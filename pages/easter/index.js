import React, { Component } from 'react'
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

import styled, { css } from 'react-emotion'
// import { colors } from "../styles/vars";
import { Container } from "../../styles/base/components";
import { Navigation } from "../../components/sections/navigation";
import { variables, colors } from "../../styles/vars";

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
    opacity: 0.902;
  }
  
  .padding {
    padding: ${variables.baseSpacing}px;
    display: flex;
  }
  
  img {
    position: relative;
    z-index: 10;
    margin: auto;
    max-width: 600px;
    width: 100%;
    height: auto;
  }
`

const SideBySide = styled('section')`

  &.gradient {
    background-image: -moz-linear-gradient( -62deg, rgb(177,30,35) 0%, rgb(105,16,19) 100%);
    background-image: -webkit-linear-gradient( -62deg, rgb(177,30,35) 0%, rgb(105,16,19) 100%);
    background-image: -ms-linear-gradient( -62deg, rgb(177,30,35) 0%, rgb(105,16,19) 100%);
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
      <Marker
          position={{ lat: 34.5018256, lng: -82.651119 }}
      />
    </GoogleMap>
));

const ParkingMap = withScriptjs(withGoogleMap(props =>
    <GoogleMap
        defaultZoom={17.5}
        defaultCenter={{ lat: 34.502689, lng: -82.651055 }}
    >
      <Marker position={{ lat: 34.501743, lng: -82.650806 }} /> {/* Bleckley */}
      <Marker position={{ lat: 34.502335, lng: -82.651216 }} /> {/* Palmetto Building */}
      <Marker position={{ lat: 34.502978, lng: -82.651326}} /> {/* Courthouse */}
      <Marker position={{ lat: 34.503458, lng: -82.651390 }} /> {/* Parking Garage */}
    </GoogleMap>
));

class Easter extends Component {

  render() {
    return(
        <EasterStyles>
          <Navigation />
          {/* Easter @ Second Chance Church */}
          <Hero>
            <Container>
              <div className={"padding"}>
                <img src="/static/easter.svg" alt=""/>
              </div>
            </Container>
          </Hero>

          {/* Map / Directions / Hotels */}


          {/* Venue Location */}
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
            <p>
              Bleckley Station <br/>
              Entrance is off of S Murray Ave at E Market Street <br/>
              Get Directions
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
                    <h4>Bleckley Station</h4>
                    <p>
                      Please use S Murray Ave. for access.
                    </p>
                  </li>
                  <li>
                    <h4>The Palmetto Building</h4>
                    <p>
                      Please use S Murray Ave. for access.
                    </p>
                  </li>
                  <li>
                    <h4>Anderson County Courthouse</h4>
                    <p>
                      Please use S Murray Ave. for access.
                    </p>
                  </li>
                  <li>
                    <h4>West Whiner St. Parking Garage</h4>
                    <p>
                      Please use N Main St. for access.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </SideBySide>
          {/* https://www.google.com/maps/place/West+Whitner+St.+Parking+Garage/@34.50274,-82.6509486,535m/data=!3m1!1e3!4m5!3m4!1s0x88586e7ed36fa00d:0xf9c1f5e3c9d592d1!8m2!3d34.5034632!4d-82.6513427 */}

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
              <h3>Do I Need Tickets?</h3>
              <p>Currently we are on a waitlist, however we will have two lines for each service. One will be for people who have tickets and the other will be for those without. We will do our best to seat as many people as possible for each service.</p>
            </div>
            <div>
              <h3>What About Kids?</h3>
              <p>Your children are more than welcome to join us in service during our Easter service.</p>
            </div>
            <div>
              <h3></h3>
            </div>
            </div>
          </FAQ>
        </EasterStyles>
    )
  }
}

export default Easter