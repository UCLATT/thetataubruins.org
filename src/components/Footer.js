import * as React from "react";
import { Link } from "gatsby";

import logo from "../img/logo.svg";
import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";
import twitter from "../img/social/twitter.svg";
import vimeo from "../img/social/vimeo.svg";

const Footer = class extends React.Component {
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
