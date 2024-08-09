import * as React from "react";
import { Link } from "gatsby";

import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";
import twitter from "../img/social/twitter.svg";
import vimeo from "../img/social/vimeo.svg";

import logo from "../img/logo.png";

import styled from 'styled-components';

import {
  Box,
  Container,
  Row,
  Column,
  Heading,
} from "./FooterStyles";

const Footer = () => {
  return (
    <div
      class="bg-charcoal"
      id="footer"
      style={{
        paddingTop: '15px',
        backgroundColor: '#1F1F1F',
        color: 'white',
        paddingTop: '40px',
        paddingBottom: '40px'
      }}
    >
      <div class="container">
        <div class="row pv5">
          <div class="col-xs-12 col-sm-3" style={{ marginRight: '15px'}}>
            <div class="flex flex-row items-center mb3">
              <a href="/chairs"><img class="" src={logo}/></a>
              {/*<div class="header pale-gray">Theta Tau</div>*/}
            </div>
            {/*<p>Upsilon Delta Chapter</p>
            <p>University of California, Los Angeles</p>*/}
          </div>
          <div class="col-xs-6 col-sm-2 mt3" style={{paddingTop: '15px', textDecoration: 'none'}}>
            <h3 class="mb3 gray">General</h3>
            <p class="pale-gray"><a style={{color:'white'}} href="http://thetatau.org/">National Theta Tau</a></p>
            <p class="pale-gray"><a style={{color:'white'}} href="/values">About</a></p>
            {/*<p class="pale-gray"><a href="/chairs">Chairs</a></p>*/}
          </div>
          <div class="col-xs-6 col-sm-2 mt3" style={{paddingTop: '15px'}}>
            <h3 class="mb3 gray">Rush</h3>
            <p><a style={{color:'white'}} href="/rush">Information</a></p>
            {/*<p><a href="/rush_faq">FAQ</a></p>*/}
            <p><a style={{color:'white'}} target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSeUtjEBTc09Z4OvIkImCIEkLRHpmw-bukOBQ2ZVSVCktDXt6g/viewform">Apply</a></p>
          </div>
          <div class="col-xs-6 col-sm-3 mt3" style={{paddingTop: '15px'}}>
            <h3 class="mb3 gray">Contact</h3>
            {/*<p class="pale-gray reverse"></p>*/}
            <p className=""><a style={{color:'white'}} href="https://www.facebook.com/ThetaTauUCLA/">Facebook</a></p>
            <p><a style={{color:'white'}} href="https://www.instagram.com/uclathetatau/">Instagram</a></p>
          </div>
        </div>
      </div>
    </div>
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
