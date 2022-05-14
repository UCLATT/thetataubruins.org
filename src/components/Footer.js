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
          <p>Made with ❤️ by Mengan Wang</p>
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

        </div>
      </footer>
    );
  }
};

export default Footer;
