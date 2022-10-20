import React from "react";
import { NavLink } from "react-router-dom";
import logo from './images/exlogo9.jpeg'
import "./App.css";

function Navbar() {
  let url = ''
  return (
    <>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg">
              <NavLink className="navbar-brand" to="/">
                <a href={url}>
                <img src={logo}  className="nav-logo " alt="Logo" />  
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
                  <li className="nav-item active">
                    <NavLink className="nav-link" to="/">
                      Home <span className="sr-only"></span>
                    </NavLink>
                  </li>
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

export default Navbar;
