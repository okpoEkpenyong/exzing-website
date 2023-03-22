import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./images/exlogo9.jpeg";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./App.css";
import { Button, Form, FormControl } from "react-bootstrap";
import { Link, animateScroll as scroll } from "react-scroll";

export function CollapsibleExample() {
  let url = "";
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      // bg="primary"
      variant="dark"
      fixed="top"
      className="navbar-custom-2 "
    >
      <Container>
        {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
        <Nav.Link href="/" className="navbar-brand">
          <img
            src={logo}
            className="nav-logo "
            // className="d-inline-block align-top"
            alt="Exzing Logo"
          />
        </Nav.Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/service" className="text-vsoft text-nav">
              Services
            </Nav.Link>
            <Nav.Link href="/product" className="text-vsoft">
              Products
            </Nav.Link>
            <Nav.Link href="/partners" className="text-vsoft">
              Partners
            </Nav.Link>
            {/* <Nav.Link href="/contact" className="text-vsoft">Contact Us </Nav.Link> */}
            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Nav>
            <Nav.Link href="/contact" className="text-vsoft">
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export function VesoftNavBar() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Navbar bg="primary" variant="dark" expand="xl" fixed="top">
        <a>
          {" "}
          <Navbar.Text className="text-vsoft">
            <img
              src={logo}
              className="nav-logo "
              alt="Logo"
              onClick={scrollToTop}
            />{" "}
            VESOFT LTD
          </Navbar.Text>{" "}
        </a>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <>
            <Nav className="mr-auto">
              <NavLink
                className="nav-item "
                href="/home"
                activeClass="active"
                to="section1"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                HOME
              </NavLink>
              <NavLink
                className="nav-item "
                href="/services"
                activeClass="active"
                to="section2"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                SERVICES
              </NavLink>
              <NavLink
                className="nav-item "
                href="/about"
                activeClass="active"
                to="section3"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                ABOUT
              </NavLink>
              <NavLink
                className="nav-item "
                href="/contact"
                activeClass="active"
                to="section4"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                CONTACT
              </NavLink>
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-light">Search</Button>
            </Form>
          </>
        </Navbar.Collapse>
      </Navbar>
      <br />
      <br />
    </>
  );
}

function _Navbar() {
  let url = "";
  return (
    <>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg">
              <NavLink className="navbar-brand" to="/">
                <a href={url}>
                  <img src={logo} className="nav-logo " alt="Logo" />
                </a>
              </NavLink>
              <button className="navbar-toggler" type="button">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                  {/* <li className="nav-item active">
                    <NavLink className="nav-link" to="/">
                      Home <span className="sr-only"></span>
                    </NavLink>
                  </li> */}
                  <li className="nav-item">
                    <NavLink
                      activeClassName="menu_active"
                      className="nav-link"
                      to="/product"
                    >
                      Our Products
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      activeClassName="menu_active"
                      className="nav-link"
                      to="/service"
                    >
                      Our Services
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      activeClassName="menu_active"
                      className="nav-link"
                      to="/about"
                    >
                      Who We Are
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      activeClassName="menu_active"
                      className="nav-link"
                      to="/contact"
                    >
                      Contact Us
                    </NavLink>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default _Navbar;
