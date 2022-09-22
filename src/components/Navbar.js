import React from "react";
import { Link } from "gatsby";
import instagram from "../img/instagram-icon.svg";
import facebook from "../img/facebook-icon.svg";
import logo from "../img/logo.png";

import Dropdown from 'react-bootstrap/Dropdown';

import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: "",
    };
  }

  toggleHamburger() {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active",
            })
          : this.setState({
              navBarActiveClass: "",
            });
      }
    );
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
        style={{
          position: "absolute",
          width: "100%",
          backgroundColor: "transparent",
        }}
      >
        <div className="container"
          style={{
            maxWidth: "95%",
            paddingTop: "1rem",
          }}>
          <div className="navbar-brand">
            <Link to="/" style = {{
              height: "100px",
            }} 
            className="navbar-item" title="Logo">
              <img src={logo} alt="UCLA Theta Tau" style={{ maxHeight: "100px", height: "85px" }} />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              role="menuitem"
              tabIndex={0}
              onKeyPress={() => this.toggleHamburger()}
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-end has-text-centered"
              style = {{
                textAlign: "right",
                color: "white",
              }}>
              <Link /*The style stuff is inefficient af but im lazy*/
                className="navbar-item"
                to="/"
                style = {{ color: "white", textDecoration: "none" }}>
                Home
              </Link>
              <NavDropdown
                title="About"
                menuVariant="light"
                style={{padding: "8px 12px"}}
              >
                <NavDropdown.Item href="/values">Values</NavDropdown.Item>
                <NavDropdown.Item href="/history">History</NavDropdown.Item>
                <NavDropdown.Item href="/actives">Brothers</NavDropdown.Item>
                <NavDropdown.Item href="http://www.thetataubruins.org/alumni.html">Alumni</NavDropdown.Item>
              </NavDropdown>
              <Link 
                className="navbar-item"
                to="/rush"
                style = {{ color: "white", textDecoration: "none" }}>
                Recruitment
              </Link>
              <Link 
                className="navbar-item"
                to="http://www.thetataubruins.org/service.html"
                style = {{ color: "white", textDecoration: "none" }}>
                Service
              </Link>
              <NavDropdown
                title="Professional"
                menuVariant="light"
                style={{padding: "8px 12px"}}
              >
                <NavDropdown.Item href="http://www.thetataubruins.org/network.html">Network</NavDropdown.Item>
                <NavDropdown.Item href="http://www.thetataubruins.org/partnership.html">Partnership</NavDropdown.Item>
                <NavDropdown.Item href="http://www.thetataubruins.org/prodev.html">Events</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="Brotherhood"
                menuVariant="light"
                style={{padding: "8px 12px"}}
              >
                <NavDropdown.Item href="http://www.thetataubruins.org/brotherhood.html">Brotherhood</NavDropdown.Item>
                <NavDropdown.Item href="http://www.thetataubruins.org/familytree.html">Family Tree</NavDropdown.Item>
                {/*<NavDropdown.Divider />*/}
              </NavDropdown>

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
            </div>
            {/* <div className="navbar-end has-text-centered">
              <a
                className="navbar-item"
                href="https://github.com/netlify-templates/gatsby-starter-netlify-cms"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <img src={github} alt="Github" />
                </span>
              </a>
            </div> */}
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
