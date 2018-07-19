import React, { Component } from 'react'

import { SEO } from "../../Layout/seo";
import styled, { css } from 'react-emotion'
import { Layout } from "../../Layout";
import { Container } from "../../styles/base/components";
import { variables, colors } from "../../styles/vars";

const Hero = styled('div')`
  background-color: ${colors.primary};
  text-align: center;
  position: relative;
  min-height: 30vh;
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

  a {
    text-decoration: none;
    color: ${colors.primary};
     
    &:hover {
      text-decoration: underline;
    }
  }

  .container {
    max-width: 860px;
    padding: 60px;
    margin: auto;
   align-items: center;
    
    
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


class CookiePolicy extends Component {

  render() {
    return(
        <Layout>
          <EasterStyles>
            <SEO
                title="Cookie Policy"
                description=""
                image=""
            />
            <Hero>
              <Container>
                <div className={"padding overlay"}>
                  <h1>Cookie Policy</h1>
                </div>
              </Container>
            </Hero>

            <Content>
              <Container>
                <div className="container">
                  <h2>Cookie Policy</h2>
                  <h4>Last Updated: May 25th, 2018</h4>
                  <p>This Cookie Policy explains how Second Chance Church, (collectively “<strong>Second Chance Church</strong>&nbsp;“, “<strong>we</strong>“, “<strong>us</strong>“, &nbsp;and “<strong>ours</strong>“) &nbsp;use cookies &nbsp;and similar technologies &nbsp;to recognize you when you &nbsp;visit our websites at mysecondchancechurch.com, (“<strong>Websites</strong>“). &nbsp;It explains &nbsp;what these technologies &nbsp;are and why we use them, as well as your rights to control our use of them.</p>
                  <p>In some cases we may use cookies to collect personal information, or that becomes personal information if we combine it with other information. In such cases our&nbsp;<a href="/legal" target="_blank" rel="noopener">Privacy Policy</a>&nbsp;will apply in addition to this Cookie Policy.</p>
                  <h3><strong>What are cookies?</strong></h3>
                  <p>Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.</p>
                  <p>Cookies set by the website owner (in this case, Second Chance Church ) are called “first party cookies”. Cookies set by parties &nbsp;other than the website owner are called “third party cookies”. Third party cookies enable third party features or functionality to be provided on or through the website (e.g. like advertising, interactive &nbsp;content and analytics). The parties that set these third party cookies can recognize your computer both when it visits the website in question and also when it visits certain other websites.</p>
                  <h3><strong>Why do we use cookies?</strong></h3>
                  <p>We use first and third party cookies for several reasons. Some cookies are required for technical reasons in order for our Websites to operate, and we refer to these as “essential” or “strictly necessary” cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our Online Properties. Third parties serve cookies through our Websites for advertising, analytics and other purposes. This is described in more detail below.</p>
                  <p>The specific types of first and third party cookies served through our Websites and the purposes they perform are described &nbsp;below (please note that the specific cookies served may vary depending on the specific Online Properties you visit):</p>
                  <h3><strong>Performance and functionality cookies:</strong></h3>
                  <p>These cookies are used to enhance the performance and functionality of our Websites but are non­essential to their use. However, without these cookies, certain functionality (like videos) may become unavailable.</p>
                  <p>■ Who serves these cookies:</p>
                  <ul><li>&nbsp;Cookie provider: Cookie Consent &nbsp;&nbsp;&nbsp;</li></ul>
                  <p>&nbsp; &nbsp; &nbsp; Website URL: <a href="https://cookieconsent.insites.com/">https://cookieconsent.insites....</a></p>
                  <p>■ How to refuse: To refuse these cookies, please follow the instructions below under the heading “<a href="http://elevationchurch.org/cookie-policy/#how-can-i-control-cookies">How can I control cookies?</a>&nbsp;“.</p>
                  <h3><strong>Analytics and customization cookies:</strong></h3>
                  <p>These cookies collect information that is used either in aggregate form to help us understand how our Website are being used or how effective our marketing campaigns are, or to help us customize our Websites for you.</p>
                  <p>■ Who serves these cookies:</p>
                  <ul><li>Cookie provider: Google Analytics &nbsp;&nbsp;&nbsp;</li></ul>
                  <p>&nbsp; &nbsp; &nbsp; Website URL: <a href="https://analytics.google.com/">https://analytics.google.com/</a></p>
                  <ul><li>Cookie provider: Fullstory&nbsp;</li></ul>
                  <p>&nbsp; &nbsp; &nbsp; Website URL: <a href="https://siteimprove.com/">https://www.fullstory.com/</a></p>
                  <p>■ How to refuse: To refuse these cookies, please follow the instructions below under the heading ”&nbsp;<a href="http://elevationchurch.org/cookie-policy/#how-can-i-control-cookies">How can I control cookies?</a>“.</p>
                  <h3><strong>Social networking cookies:</strong></h3>
                  <p>These &nbsp;cookies &nbsp;are used &nbsp;to enable you &nbsp;to share pages and &nbsp;content that you find &nbsp;interesting on our Websites through &nbsp;third party social networking and other &nbsp;websites. These cookies may also be used &nbsp;for advertising purposes too.</p>
                  <p>■ Who serves these cookies:</p>
                  <ul><li>&nbsp;Cookie provider: Facebook &nbsp;&nbsp;</li></ul>
                  <p>&nbsp; &nbsp; &nbsp; Website URL: <a href="https://www.facebook.com/business/learn/facebook­ads­pixel">https://www.facebook.com/busin...</a></p>
                  <p>■ How to refuse: To refuse these cookies, please follow the instructions below under the heading “<a href="http://elevationchurch.org/cookie-policy/#how-can-i-control-cookies">How can I control cookies?</a>“.</p>
                  <h3><strong>What about other tracking technologies, like web beacons?</strong></h3>
                  <p>Cookies are not the only way to recognize or track visitors to a website. We may use other, similar technologies from time to time, like web beacons (sometimes called “tracking pixels” or “clear gifs”). These are tiny graphics files that &nbsp;contain a unique identifier that enable us to recognize when someone has visited our Websites. This allows us, for example, to monitor the traffic patterns of users from one page within our Websites to another, to deliver or communicate &nbsp;with cookies, to understand whether you have come to our Websites from an online advertisement displayed on a third­-party website, to improve site performance, and to measure the success of email marketing campaigns. In many instances, these technologies are reliant on cookies to function properly, and so declining cookies will impair their functioning.</p>
                  <h3><strong>How can I control cookies?</strong></h3>
                  <p>You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences by clicking on the appropriate opt­-out links provided in the cookie table above.</p>
                  <p>You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted. As the means by which you can refuse cookies through your web browser controls vary from browser­-to-­browser, you should visit your browser’s help menu for more information.</p>
                  <p>In addition, most advertising networks offer you a way to opt out of targeted advertising. If you would like to find out more information, please visit&nbsp;<a href="http://www.aboutads.info/choices/" target="_blank" rel="noopener">http://www.aboutads.info/choices/</a>&nbsp;or&nbsp;<a href="http://www.youronlinechoices.com/" target="_blank" rel="noopener">http://www.youronlinechoices.com</a>.</p>
                  <h3><strong>How often will you update this Cookie Policy?</strong></h3>
                  <p>We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal or regulatory reasons. Please therefore re­visit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.</p>
                  <p>The date at the top of this Cookie Policy indicates when it was last updated.</p>
                  <h3><strong>Where can I get further information?</strong></h3>
                  <p>If &nbsp;you have &nbsp;any questions &nbsp;about our use of &nbsp;cookies or other technologies, &nbsp;please email us at hello@mysecondchancechurch.com or by post to:</p>
                  <p>Second Chance Church<br/>210 South Main Street<br/>Anderson, SC 29624<br/>United States</p>
                </div>
              </Container>
            </Content>
          </EasterStyles>
        </Layout>
    )
  }
}

export default CookiePolicy