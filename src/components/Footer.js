import * as React from "react";
import { Link } from "gatsby";

import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";
import twitter from "../img/social/twitter.svg";
import vimeo from "../img/social/vimeo.svg";

import logo from "../img/logo.png";

import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";

const Footer = () => {
  return (
    <div class="bg-charcoal" id="footer" style={{ paddingTop: '15px', backgroundColor: '#1F1F1F', color: 'white' }}>
      <div class="container">
        <div class="row pv5">
          <div class="col-xs-12 col-sm-3" style={{ marginRight: '15px'}}>
            <div class="flex flex-row items-center mb3">
              <a href="/chairs"><img class="" src={logo}/></a>
              <div class="header pale-gray">Theta Tau</div>
            </div>
            <p>Upsilon Delta Chapter</p>
            <p>University of California, Los Angeles</p>
          </div>
          <div class="col-xs-6 col-sm-2 mt3" style={{paddingTop: '15px', textDecoration: 'none'}}>
            <h3 class="mb3 gray">General</h3>
            <p class="pale-gray"><a href="http://thetatau.org/">National Theta Tau</a></p>
            <p class="pale-gray"><a href="/values">About</a></p>
            {/*<p class="pale-gray"><a href="/chairs">Chairs</a></p>*/}
          </div>
          <div class="col-xs-6 col-sm-2 mt3" style={{paddingTop: '15px'}}>
            <h3 class="mb3 gray">Recruitment</h3>
            <p><a href="/rush">Information</a></p>
            {/*<p><a href="/rush_faq">FAQ</a></p>*/}
            <p><a href="https://docs.google.com/forms/d/e/1FAIpQLSd38J8pHiHZtMR4eufrqfy9C5khLJmmr5UzMgY2j6aj_S1-3Q/viewform">Apply</a></p>
          </div>
          <div class="col-xs-6 col-sm-3 mt3" style={{paddingTop: '15px'}}>
            <h3 class="mb3 gray">Contact</h3>
            {/*<p class="pale-gray reverse"></p>*/}
            <p><a href="https://www.facebook.com/ThetaTauUCLA/">Facebook</a></p>
            <p><a href="https://www.instagram.com/uclathetatau/">Instagram</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}

const Footer2 = () => {
  return (
    <footer>
      <Box>
        <Container>
          <Row>
            <Column>
              <Heading>About Us</Heading>
              <FooterLink href="#">Aim</FooterLink>
              <FooterLink href="#">Vision</FooterLink>
              <FooterLink href="#">Testimonials</FooterLink>
            </Column>
            <Column>
              <Heading>Services</Heading>
              <FooterLink href="#">Writing</FooterLink>
              <FooterLink href="#">Internships</FooterLink>
              <FooterLink href="#">Coding</FooterLink>
              <FooterLink href="#">Teaching</FooterLink>
            </Column>
            <Column>
              <Heading>Contact Us</Heading>
              <FooterLink href="#">Uttar Pradesh</FooterLink>
              <FooterLink href="#">Ahemdabad</FooterLink>
              <FooterLink href="#">Indore</FooterLink>
              <FooterLink href="#">Mumbai</FooterLink>
            </Column>
            <Column>
              <Heading>Social Media</Heading>
              <FooterLink href="#">
                <i className="fab fa-facebook-f">
                  <span style={{ marginLeft: "10px" }}>
                    Facebook
                  </span>
                </i>
              </FooterLink>
              <FooterLink href="#">
                <i className="fab fa-instagram">
                  <span style={{ marginLeft: "10px" }}>
                    Instagram
                  </span>
                </i>
              </FooterLink>
              <FooterLink href="#">
                <i className="fab fa-twitter">
                  <span style={{ marginLeft: "10px" }}>
                    Twitter
                  </span>
                </i>
              </FooterLink>
              <FooterLink href="#">
                <i className="fab fa-youtube">
                  <span style={{ marginLeft: "10px" }}>
                    Youtube
                  </span>
                </i>
              </FooterLink>
            </Column>
          </Row>
        </Container>
      </Box>
    </footer>
  );
}

const FooterOld = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered">
          {/*<p>Made with ❤️ by Mengan Wang</p>*/}
          <Link href='https://linktr.ee/UCLAThetaTau' style={{ textDecoration: 'none', color: 'white'}}>Linktree</Link><br />
          <Link href='/rush' style={{ textDecoration: 'none', color: 'white'}}>Recruitment</Link><br />
          {/*<Link>Contact Us</Link>*/}
        </div>
        <div className="social content has-text-centered" style={{

        }}>
          <a title="facebook" href="https://www.facebook.com/ThetaTauUCLA">
            <img
              src={facebook}
              alt="Facebook"
              style={{ 
                width: "1em",
                height: "1em", 
              }}
            />
          </a>
          
          <a title="instagram" href="https://www.instagram.com/uclathetatau/">
            <img
              src={instagram}
              alt="Instagram"
              style={{ 
                width: "1em",
                height: "1em", 
              }}
            />
          </a>

          <a
                className="navbar-item"
                href="https://www.instagram.com/uclathetatau/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <img src={instagram} alt="Instagram" />
                </span>
              </a>
              <a
                className="navbar-item"
                href="https://www.facebook.com/ThetaTauUCLA/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <img src={facebook} alt="Facebook" />
                </span>
              </a>
              <span className="icon" style={{ color: 'white' }}>
                  <img src={facebook} style={{ color: 'white' }} alt="Facebook" />
                </span>
        </div>
      </footer>
    );
  }
};

export default Footer;
