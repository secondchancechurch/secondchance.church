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


class PrivacyPolicy extends Component {

  render() {
    return(
        <Layout>
          <EasterStyles>
            <SEO
                title="Privacy Policy"
                description=""
                image=""
            />
            <Hero>
              <Container>
                <div className={"padding overlay"}>
                  <h1>Privacy Policy</h1>
                </div>
              </Container>
            </Hero>

            <Content>
              <Container>
                <div className="container">
                  <h2>Privacy Policy</h2>
                  <h4>Last Updated: May 25th, 2018</h4>
                  <p>Thank you for choosing to be part of our community at Second Chance Church&nbsp;(“company”, “we”, “us”, or “our”). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about &nbsp;our policy, or our practices with regards to your personal information, please contact us at <a href="mailto:hello@mysecondchancechurch.com">hello@mysecondchancechurch.com</a>.</p>
                  <p>When you visit our website mysecondchancechurch.com, and use our services, you trust us with your personal information. We take your privacy very seriously. In this privacy notice, we describe our privacy policy. We seek to explain to you in the clearest way possible what information we collect, how we use it and what rights you have in relation to it. We hope you take some time to read through it carefully, as it is important. If there are any terms in this privacy policy that you do not agree with, please discontinue use of our Sites or Apps and our services.</p>
                  <p>This privacy policy applies to all information &nbsp;collected through our website (such as mysecondchancechurch.com), mobile application, (“Apps”), and/or any related services, sales, marketing or events (we refer to them collectively in this privacy policy as the “Sites”).</p>
                  <p>Please read this privacy policy carefully as it will help you make informed decisions about sharing your personal information with us. &nbsp;</p>
                  <h3><strong>TABLE OF CONTENTS</strong></h3>
                  <ol><li>WHAT INFORMATION DO WE COLLECT?</li><li>HOW DO WE USE YOUR INFORMATION?</li><li>WILL YOUR INFORMATION BE SHARED WITH ANYONE? &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li><li>DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</li><li>DO WE USE GOOGLE MAPS?</li><li>HOW DO WE HANDLE YOUR SOCIAL LOGINS?</li><li>HOW LONG DO WE KEEP YOUR INFORMATION?</li><li>HOW DO WE KEEP YOUR INFORMATION SAFE?</li><li>DO WE COLLECT INFORMATION FROM MINORS?</li><li>WHAT ARE YOUR PRIVACY RIGHTS? &nbsp;</li><li>DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</li><li>DO WE MAKE UPDATES TO THIS POLICY?</li><li>HOW CAN YOU CONTACT US ABOUT THIS POLICY?</li></ol>
                  <p>&nbsp;</p>
                  <h2><strong>1. WHAT INFORMATION DO WE COLLECT?</strong></h2>
                  <h3>Personal information you disclose to us</h3>
                  <p><strong><em>In Short:&nbsp;</em></strong><em>We &nbsp;collect &nbsp;personal information &nbsp;that you provide to us &nbsp;such as name, address, contact &nbsp;information, passwords and security data, payment information, and social media login data. &nbsp;</em></p>
                  <p>We &nbsp;collect &nbsp;personal information &nbsp;that you voluntarily provide &nbsp;to us when registering at the &nbsp;Sites or Apps, expressing an interest in obtaining information about us or our products and services, when participating in activities on the Sites or Apps (such as posting messages in our online forums or entering competitions, contests or giveaways) or otherwise contacting us.</p>
                  <p>The &nbsp;personal &nbsp;information &nbsp;that we collect depends &nbsp;on the context of your interactions &nbsp;with us and the Sites or Apps, the choices &nbsp;you make and the products and features you &nbsp;use. The personal information we collect can include the following:</p>
                  <p><strong>Name and Contact Data.</strong>&nbsp;We collect your first and last name, email address, postal address, phone number, and other similar contact data.</p>
                  <p><strong>Credentials.</strong>&nbsp;We collect passwords, password hints, and similar security information used for authentication and account access.</p>
                  <p><strong>Payment &nbsp;Data.</strong>&nbsp;We &nbsp;collect &nbsp;data necessary &nbsp;to process your &nbsp;payment if you make &nbsp;purchases, such as your payment instrument number (such as a credit card number), and the security code associated with your payment instrument. All payment data is stored by our payment processor and you should review its privacy policies and contact the payment processor directly to respond to your questions.</p>
                  <p><strong>Social Media Login Data.</strong>&nbsp;We provide you with the option to register using social media account details, like your Facebook, &nbsp;Twitter or other social media account. If you choose to register in this way, we will collect &nbsp;the Information described in the section called “HOW DO WE HANDLE YOUR SOCIAL LOGINS” below.</p>
                  <p>All personal information that you provide to us must be true, complete and accurate, and you must notify us of any changes to such personal information.</p>
                  <h3><strong>Information automatically collected</strong></h3>
                  <p><strong><em>In &nbsp;Short:</em></strong><em>&nbsp;Some &nbsp;information &nbsp;– such as IP &nbsp;address and/or browser &nbsp;and device characteristics &nbsp;– is collected automatically when you visit our Sites or Apps.</em></p>
                  <p>We automatically collect certain information when you visit, use or navigate the Sites or Apps. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, &nbsp;such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Sites or Apps and other technical &nbsp;information. This information is primarily needed to maintain the security and operation of our Sites or Apps, and for our internal analytics and reporting purposes.</p>
                  <p>Like &nbsp;many businesses, &nbsp;we also collect information through cookies and similar technologies. You can find out more about this in our&nbsp;<a href="/legal/cookies" target="_blank" rel="noopener">Cookie Policy</a>.</p>
                  <h3><strong>Information collected through our Apps</strong></h3>
                  <p><strong><em>In Short:</em></strong><em>&nbsp;We may collect information regarding &nbsp;your geo­location, mobile device, push &nbsp;notifications, when you use our apps.</em></p>
                  <p>If you use our Apps, we may also collect the following information:</p>
                  <ul><li><em>Geo­Location Information</em>. We may request access or permission to and track location ­based information from your mobile device, either continuously or while you are using our mobile application, to provide location ­based services. If you wish to change our access or permissions, you may do so in your device’s settings.</li><li><em>Mobile Device Access.</em>&nbsp;We may request access or permission to certain features from your mobile device, including your mobile device’s bluetooth, calendar, camera, reminders, sms messages, social media accounts, and other features. If you wish to change our access or permissions, you may do so in your device’s settings.</li><li><em>Mobile Device Data</em>. We may automatically collect device information (such as your mobile device ID, model and manufacturer), operating system, version information and IP address.</li><li><em>Push Notifications.</em>&nbsp;We may request to send you push notifications regarding your account or the mobile application. If you wish to opt­out from receiving these types of communications, you may turn them off in your device’s settings.</li></ul>
                  <h3><strong>Information collected from other sources</strong></h3>
                  <p><strong><em>In Short:</em></strong><em>&nbsp;We &nbsp;may collect &nbsp;limited data from &nbsp;public databases, marketing &nbsp;partners, social media platforms, &nbsp;and other outside sources.</em></p>
                  <p>We &nbsp;may obtain &nbsp;information about &nbsp;you from other sources, &nbsp;such as public databases, &nbsp;joint marketing partners, social media platforms (such as Facebook), as well as from other third parties. Examples of the information we receive from other sources include: social media profile information (your name, gender, birthday, email, current city, state and country, user identification numbers for your contacts, profile picture URL and any other information that you choose to make public); marketing leads and search results and links, including paid listings (such as sponsored links).</p>
                  <h2><strong>2. HOW DO WE USE YOUR INFORMATION?</strong></h2>
                  <p><strong><em>In Short:&nbsp;</em></strong><em>We process your information for purposes based on legitimate business interests, the fulfillment of our contract with you, compliance with our legal obligations, and/or your consent.</em></p>
                  <p>We use personal information collected via our Sites or Apps for a variety of business purposes described below. We &nbsp;process your personal information for these purposes in reliance on our legitimate business interests (“Business Purposes”), &nbsp;in order to enter into or perform a contract with you (“Contractual”), with your consent (“Consent”), and/or for compliance &nbsp;with our legal obligations (“Legal Reasons”). We indicate the specific processing grounds we rely on next to each purpose listed below.</p>
                  <p>We use the information we collect or receive:</p>
                  <ul><li><strong>To facilitate account creation and logon process with your Consent.</strong>&nbsp;If you choose to link your account with us to a third party account *(such as your Google or Facebook account), we use the information you allowed us to collect from those third parties to facilitate account creation and logon process. See the section below headed “HOW DO WE HANDLE YOUR SOCIAL LOGINS” for further information.</li><li><strong>To send administrative information to you</strong>&nbsp;for Business Purposes and/or Legal Reasons. We may use your personal information to send you product, service and new feature information and/or information about changes to our terms, conditions, and policies.</li><li><strong>Fulfill and manage your orders</strong>&nbsp;for Contractual reasons. We may use your information to fulfill and manage your orders, payments, returns, and exchanges made through the Sites or Apps.</li><li><strong>Deliver targeted advertising to you</strong>&nbsp;for our Business Purposes. We may use your information to develop and display content and advertising (and work with third parties who do so) tailored to your interests and/or location and to measure its effectiveness. For more information, see our&nbsp;<a href="/legal/cookies" target="_blank" rel="noopener">Cookie Policy</a>.</li><li><strong>Request Feedback</strong>&nbsp;for our Business Purposes. We may use your information to request feedback and to contact you about your use of our Sites or Apps.</li><li><strong>To protect our Sites</strong>&nbsp;for Legal Reasons. We may use your information as part of our efforts to keep our Sites or Apps safe and secure (for example, for fraud monitoring and prevention).</li></ul>
                  <ul><li><strong>To enforce our terms, conditions and policies</strong>&nbsp;for Business Purposes and/or for Legal Reasons.</li><li><strong>For other Business Purposes.</strong>&nbsp;We may use your information for other Business Purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns and to evaluate and improve our Sites or Apps, products, services, marketing and your experience.</li></ul>
                  <h2><strong>3. WILL YOUR INFORMATION BE SHARED WITH ANYONE?</strong></h2>
                  <p><strong><em>In Short:</em></strong><em>&nbsp;We &nbsp;only share &nbsp;information with &nbsp;your consent, to comply with &nbsp;laws, to protect your rights, or &nbsp;to fulfill business obligations.</em></p>
                  <p>We only share and disclose your information in the following situations:</p>
                  <ul><li><strong>Compliance with Laws.</strong>&nbsp;We may disclose your information where we are legally required to do so in order to comply with applicable law, governmental requests, a judicial proceeding, court order, or legal process, such as in response to a court order or a subpoena (including in response to public authorities to meet national security or law enforcement requirements).</li><li><strong>Vital Interests and Legal Rights.</strong>&nbsp;We may disclose your information where we believe it is necessary to investigate, prevent, or take action regarding potential violations of our policies, suspected fraud, situations involving potential threats to the safety of any person and illegal activities, or as evidence in litigation in which we are involved.</li><li><strong>Business Transfers.</strong>&nbsp;We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li><li><strong>With your Consent.</strong>&nbsp;We may disclose your personal information for any other purpose with your consent.</li></ul>
                  <h2><strong>4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</strong></h2>
                  <p><strong><em>In Short:</em></strong>&nbsp;<em>We may use cookies and other tracking technologies to collect and store your information.</em></p>
                  <p>We &nbsp;may use &nbsp;cookies and &nbsp;similar tracking &nbsp;technologies (like web beacons and pixels) &nbsp;to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set &nbsp;out in our&nbsp;<a href="/legal/cookies" target="_blank" rel="noopener">Cookie Policy</a>.</p>
                  <h2><strong>5. DO WE USE GOOGLE MAPS?</strong></h2>
                  <p><strong><em>In Short:</em></strong><em>&nbsp;Yes, we use Google Maps for the purpose of providing better service.</em></p>
                  <p>This website, &nbsp;mobile application, or Facebook application uses Google Maps APIs. You may find the Google Maps APIs Terms of Service&nbsp;<a href="https://developers.google.com/maps/terms" target="_blank" rel="noopener">here</a>. To better understand Google’s Privacy Policy, please refer to this&nbsp;<a href="https://policies.google.com/privacy" target="_blank" rel="noopener">link</a>.&nbsp;&nbsp;</p>
                  <p>By using our Maps API Implementation, you agree to be bound by Google’s Terms of Service. You agree to allow us to obtain or cache your location. You may revoke your consent at anytime. We use information about location in conjunction with data from other data providers.</p>
                  <h2><strong>6. HOW DO WE HANDLE YOUR SOCIAL LOGINS?</strong></h2>
                  <p><strong><em>In Short:</em></strong>&nbsp;<em>If you choose to register or log in to our websites using a social media account, we may have access to certain information about you.</em></p>
                  <p>Our Sites or Apps offer you the ability to register and login using your third party social media account details (like your Facebook or Twitter logins). Where you choose to do this, we will receive certain profile information about you from your social media provider. The profile Information we receive may vary depending on the social media provider concerned, but will often include your name, e­mail address, friends list, profile picture as well as other information you choose to make public. &nbsp;</p>
                  <p>We will use the information we receive only for the purposes that are described in this privacy policy or that are otherwise made clear to you on the Sites or Apps. Please note that we do not control, and are not responsible for, other uses of your personal information by your third party social media provider. We recommend that you review their privacy policy to understand how they collect, use and share your personal information, and how you can set your privacy preferences on their sites and apps.</p>
                  <h2><strong>7. HOW LONG DO WE KEEP YOUR INFORMATION?</strong></h2>
                  <p><strong><em>In Short:</em></strong><em>&nbsp;We keep your information for as long as necessary to fulfill the purposes outlined in this privacy policy unless otherwise required by law.</em></p>
                  <p>We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy policy, &nbsp;unless a longer retention period is required or permitted by law (such as tax, accounting or other legal requirements). &nbsp;No purpose in this policy will require us keeping your personal information for longer than the period of time in which users have an account with us.</p>
                  <p>When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize it, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will &nbsp;securely store your personal information and isolate it from any further processing until deletion is possible.</p>
                  <h2><strong>8. HOW DO WE KEEP YOUR INFORMATION SAFE? &nbsp;</strong></h2>
                  <p><strong><em>In Short</em></strong><em>: We aim to protect your personal information through a system of organizational and technical security measures.</em></p>
                  <p>We &nbsp;have &nbsp;implemented &nbsp;appropriate technical &nbsp;and organizational security &nbsp;measures designed to protect &nbsp;the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure. Although we will do our best to protect your personal information, transmission of personal information to and from our Sites or Apps is at your own risk. You should only access the services within a secure environment.</p>
                  <h2><strong>9. DO WE COLLECT INFORMATION FROM MINORS?</strong></h2>
                  <p><strong><em>In Short:</em></strong><em>&nbsp;We do not knowingly collect data from or market to children under 18 years of age.</em></p>
                  <p>We do not knowingly solicit data from or market to children under 18 years of age. By using the Sites or Apps, you represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to such minor dependent’s use of the Sites or Apps. If we learn that personal information from users less than 18 years of age has been collected, we will deactivate the account and take reasonable measures to promptly delete such data from our records. If you become aware of any data we have collected from children under age 18, please contact us at <a href="mailto:hello@perrynoble.com">hello@perrynoble.com</a>.</p>
                  <h2><strong>10. WHAT ARE YOUR PRIVACY RIGHTS?</strong></h2>
                  <p><strong><em>In Short:&nbsp;</em></strong><em>You may review, change, or terminate your account at any time. &nbsp;</em></p>
                  <p>If you are resident in the European Economic Area and you believe we are unlawfully processing your personal information, you also have the right to complain to your local data protection supervisory authority. You can find their contact details here:&nbsp;<a href="http://ec.europa.eu/justice/data%C2%ADprotection/bodies/authorities/index_en.htm" target="_blank" rel="noopener">http://ec.europa.eu/justice/data­protection/bodies/authorities/index_en.htm</a></p>
                  <h3>Technology Providers</h3>
                  <p>Second Chance Church&nbsp;partners with several technology providers in order to deliver the best possible online experience to visitors. We encourage you to familiarize yourself with the Privacy Policies of these providers by following the links below:</p>
                  <p><a href="http://mailchimp.com/legal/privacy/">http://mailchimp.com/legal/privacy/<br/></a><a href="https://stripe.com/us/privacy">https://stripe.com/us/privacy<br/></a><a href="https://pushpay.com/privacy">https://pushpay.com/privacy<br/></a><a href="http://churchonlineplatform.com/privacy">http://churchonlineplatform.com/privacy</a><br/><a href="https://help.fullstory.com/11532-Security-Privacy-Performance">https://help.fullstory.com/115...<br/></a><a href="https://policies.google.com/privacy?hl=en">https://policies.google.com/privacy?hl=en</a></p>
                  <h3>Promotions</h3>
                  <p>Second Chance Church&nbsp;may run promotions on our websites that require submission of personally identifiable information by participants.&nbsp;Second Chance Church may use the information collected in the aggregate so we can determine, for example, how many visitors to our website participated in the promotion. Promotions are subject to change without notice.</p>
                  <h3>Disclaimer of Reliability:</h3>
                  <p>Second Chance Church makes no representations or warranties regarding the condition or functionality of this website, its suitability for use, or that this web service will be uninterrupted or error-free.</p>
                  <h3>Disclaimer of Damages:</h3>
                  <p>By using an Second Chance Church website, you assume all risks associated with the use of the site, including any risk to your computer, software or data being damaged by any virus, software, or any other file that might be transmitted or activated via an Growth Company website or your access to it. Second Chance Church shall not be liable for any damages of any kind (general, special, incidental or consequential damages, including, without limitation, lost revenues or lost profits) resulting from the use or misuse of the information contained in an Growth Company website.</p>
                  <h3>Disclaimer of Endorsement:</h3>
                  <p>Reference herein to any specific commercial product, process, or service by trade name, trademark, manufacturer, or otherwise, does not necessarily constitute or imply endorsement, recommendation, or favoring by Second Chance Church. The views and opinions of authors expressed herein do not necessarily state or reflect those of Second Chance Church, and shall not be used for advertising or product endorsement purposes.</p>
                  <h3>Copyrights and Trademarks:</h3>
                  <p>Copyright (c) 2018 Second Chance Church All Rights Reserved</p>
                  <p>All material on this website is copyrighted by Second Chance Church, except for some material that is copyrighted by others and used here by permission. Copyrighted material may not be copied, reproduced or otherwise used for commercial purposes without the written permission of the copyright holder. This site also contains some trademarks, which may not be appropriated by persons other than the trademark owner and may not be used contrary to trademark law. If you wish to request permission to use materials in a manner otherwise prohibited herein, please send an email to: hello@perrynoble.com.</p>
                  <h3>Account Information</h3>
                  <p>If you would at any time like to review or change the information in your account or terminate your account, you can:</p>
                  <ul><li>Contact us using the contact information provided.</li></ul>
                  <p>Upon your request to terminate your account, we will deactivate or delete your account and information from our active &nbsp;databases. However, some information may be retained in our files to prevent fraud, troubleshoot problems, assist with any investigations, and/or comply with legal requirements.</p>
                  <p><strong>Cookies and similar technologies:</strong>&nbsp;Most Web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove cookies and to reject cookies. If you choose to remove cookies or reject cookies, this could affect certain features or services of our Sites or Apps. To opt­out of interest ­based advertising by advertisers on our Sites or Apps visit&nbsp;<a href="http://www.aboutads.info/choices/" target="_blank" rel="noopener">http://www.aboutads.info/choices/</a>.&nbsp;For further information, please see our&nbsp;<a href="/legal/cookies" target="_blank" rel="noopener">Cookie Policy</a>.</p>
                  <p>Opting out of email marketing: You can unsubscribe from our marketing email list at any time by clicking on the unsubscribe link in the emails that we send or by contacting us using the details provided below. You will then be removed from the marketing email list – however, we will still need to send you service-­related emails that are necessary for the administration and use of your account. To otherwise opt­-out, you may:</p>
                  <ul><li>Access your account settings and update preferences.</li></ul>
                  <h1></h1>
                  <h2><strong>11. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</strong></h2>
                  <h1></h1>
                  <p><strong><em>In Short:&nbsp;</em></strong><em>Yes, if you are a resident of California, you are granted specific rights regarding access to your personal information. &nbsp;</em></p>
                  <p>California &nbsp;Civil Code Section &nbsp;1798.83, also known as &nbsp;the “Shine The Light” law, &nbsp;permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal &nbsp;information (if any) we disclosed to third parties for direct marketing purposes and the names and addresses of all third parties with which we shared personal information in the immediately preceding calendar year. If you are a California resident and would like to make such a request, please submit your request in writing to us using the contact information provided below.</p>
                  <p>If you are under 18 years of age, reside in California, and have a registered account with the Sites or Apps, you have &nbsp;the right to request removal of unwanted data that you publicly post on the Sites or Apps. To request removal &nbsp;of such data, please contact us using the contact information provided below, and include the email address associated with your account and a statement that you reside in California. We will make sure the data is not &nbsp;publicly displayed on the Sites or Apps, but please be aware that the data may not be completely or comprehensively removed from our systems.</p>
                  <h2><strong>12. DO WE MAKE UPDATES TO THIS POLICY?</strong></h2>
                  <p><strong><em>In Short:&nbsp;</em></strong><em>Yes, we will update this policy as necessary to stay compliant with relevant laws.</em></p>
                  <p>We &nbsp;may update &nbsp;this privacy &nbsp;policy from time &nbsp;to time. The updated &nbsp;version will be indicated &nbsp;by an updated “Revised” date and the updated version will be effective as soon as it is accessible. If we make material changes to &nbsp;this privacy policy, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this privacy policy frequently to be informed of how we are protecting your information. &nbsp;</p>
                  <h2><strong>13. HOW CAN YOU CONTACT US ABOUT THIS POLICY?</strong></h2>
                  <p>If you have questions or comments about this policy, you may email us at hello@mysecondchancechurch.com or by post to:</p>
                  <p>Second Chance Church<br/>210 South Main Street<br/>Anderson, SC 29624<br/>United States</p>
                </div>
              </Container>
            </Content>
          </EasterStyles>
        </Layout>
    )
  }
}

export default PrivacyPolicy