import React, { Fragment } from "react";
import Media from 'react-media';
import { Link } from "gatsby";
import instagram from "../img/instagram-icon.svg";
import facebook from "../img/facebook-icon.svg";
import logo from "../img/logo.png";

import Dropdown from 'react-bootstrap/Dropdown';

// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';

import {
    Button,
    NavDropdown,
    Container,
    Form,
    Nav,
    Navbar as NavBar,
    Offcanvas,
  }  from 'react-bootstrap';

const NavbarHome = class extends React.Component {
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
    const expand = false;
    var color = (this.state.navBarActiveClass === 'is-active') ? 'black' : 'white';
    console.log(this.state.navBarActiveClass);
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
        style={{
          position: "absolute",
          width: "100%",
          backgroundColor: 'transparent',
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
            {/*
            <div style={{position: 'absolute', right: '0'}}>
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
            </div>*/}
        </div>

          <Media queries={{
            mobile: "(max-width: 1023px)",
            desktop: "(min-width: 1024px)"
          }}>
            {matches => (
              <Fragment>
                {matches.mobile &&
                  <NavBar key={expand} bg="transparent" expand={expand} className="mb-3" variant="dark">
                    <Container fluid style={{ backgroundColor: 'transparent'}}>
                    <NavBar.Toggle style={{ backgroundColor: 'transparent', borderColor: 'white', color: 'white'}} aria-controls={`offcanvasNavbar-expand-${expand}`} />
                    <NavBar.Offcanvas
                      id={`offcanvasNavbar-expand-${expand}`}
                      aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                      placement="end"
                    >
                      <Offcanvas.Header closeButton>
                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                          Theta Tau
                        </Offcanvas.Title>
                      </Offcanvas.Header>
                      <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                          <Nav.Link href="/">Home</Nav.Link>
                          <NavDropdown
                            title="About"
                            id={`offcanvasNavbarDropdown-expand-${expand}`}
                          >
                            <NavDropdown.Item>
                              <Link 
                                className="navbar-item"
                                to="/values"
                                style = {{ textDecoration: "none" }}>
                                Values
                              </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item>
                              <Link 
                                className="navbar-item"
                                to="/history"
                                style = {{ textDecoration: "none" }}>
                                History
                              </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item>
                              <Link 
                                className="navbar-item"
                                to="/service"
                                style = {{ textDecoration: "none" }}>
                                Service
                              </Link>
                            </NavDropdown.Item>
                          </NavDropdown>
                          <NavDropdown
                            title="Brothers"
                            id={`offcanvasNavbarDropdown-expand-${expand}`}
                          >
                            <NavDropdown.Item>
                              <Link 
                                className="navbar-item"
                                to="/actives"
                                style = {{ textDecoration: "none" }}>
                                Actives
                              </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item>
                              <Link 
                                className="navbar-item"
                                to="/alumni"
                                style = {{ textDecoration: "none" }}>
                                Alumni
                              </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item>
                              <Link 
                                className="navbar-item"
                                to="/family-tree"
                                style = {{ textDecoration: "none" }}>
                                Family Tree
                              </Link>
                            </NavDropdown.Item>
                          </NavDropdown>
                          <NavDropdown
                            title="Rush"
                            id={`offcanvasNavbarDropdown-expand-${expand}`}
                          >
                            <NavDropdown.Item>
                              <Link 
                                className="navbar-item"
                                to="/rush"
                                style = {{ textDecoration: "none" }}>
                                Information
                              </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="https://docs.google.com/forms/d/e/1FAIpQLSd38J8pHiHZtMR4eufrqfy9C5khLJmmr5UzMgY2j6aj_S1-3Q/viewform">
                            <Link 
                                className="navbar-item"
                                style = {{ textDecoration: "none" }}>
                                Apply
                              </Link>
                            </NavDropdown.Item>
                          </NavDropdown>
                        </Nav>
                      </Offcanvas.Body>
                    </NavBar.Offcanvas>
                  </Container>
                </NavBar>
              }
                {matches.desktop}
              </Fragment>
            )

            }
          </Media>

          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-end has-text-centered"
              style = {{
                textAlign: "right",
                color: 'white',
              }}>
              <Link /*The style stuff is inefficient af but im lazy*/
                className="navbar-item"
                to="/"
                style = {{ color: 'white', textDecoration: "none" }}>
                Home
              </Link>
              <NavDropdown
                title="About"
                menuVariant="light"
                style={{padding: "8px 12px"}}
              >
                <NavDropdown.Item>
                  <Link 
                    className="navbar-item"
                    to="/values"
                    style = {{ textDecoration: "none" }}>
                    Values
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link 
                    className="navbar-item"
                    to="/history"
                    style = {{ textDecoration: "none" }}>
                    History
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link 
                    className="navbar-item"
                    to="/service"
                    style = {{ textDecoration: "none" }}>
                    Service
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="Brothers"
                menuVariant="light"
                style={{padding: "8px 12px"}}
              >
                <NavDropdown.Item href="https://www.thetataubruins.org/alumni.html">
                  <Link 
                    className="navbar-item"
                    to="/actives"
                    style = {{ textDecoration: "none" }}>
                    Actives
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="https://www.thetataubruins.org/alumni.html">
                  <Link 
                    className="navbar-item"
                    to="/alumni"
                    style = {{ textDecoration: "none" }}>
                    Alumni
                  </Link>
                </NavDropdown.Item>
                {/*<NavDropdown.Item href="https://www.thetataubruins.org/alumni.html">
                  <Link 
                    className="navbar-item"
                    to="/"
                    style = {{ textDecoration: "none" }}>
                    Chairs
                  </Link>
                </NavDropdown.Item>*/}
                <NavDropdown.Item>
                  <Link 
                    className="navbar-item"
                    to="/family-tree"
                    style = {{ textDecoration: "none" }}>
                    Family Trees
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="Rush"
                menuVariant="light"
                style={{padding: "8px 12px"}}
              >
                <NavDropdown.Item>
                  <Link 
                    className="navbar-item"
                    to="/rush"
                    style = {{ color: 'black', textDecoration: "none" }}>
                    Information
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="https://docs.google.com/forms/d/e/1FAIpQLSd38J8pHiHZtMR4eufrqfy9C5khLJmmr5UzMgY2j6aj_S1-3Q/viewform">
                  <a
                    className="navbar-item"
                    href="https://docs.google.com/forms/d/e/1FAIpQLSd38J8pHiHZtMR4eufrqfy9C5khLJmmr5UzMgY2j6aj_S1-3Q/viewform" 
                    style = {{ textDecoration: "none" }}
                  >
                    Apply
                  </a>
                </NavDropdown.Item>
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

export default NavbarHome;
