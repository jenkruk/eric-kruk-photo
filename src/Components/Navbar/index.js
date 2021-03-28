import React, { useState } from 'react';
import { NavLink } from "react-router-dom";

const Navbar = () => {

const [click, setClick]=useState(false);

const handleClick = () => setClick(!click);

    return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink data-testid="nav-logo" exact to="/" activeClassName="active" className="nav-logo">
            ERIC KRUK
          </NavLink>
          <ul className="nav-menu">
            <li className="nav-item">
              <NavLink data-testid="portfolio" exact to="/portfolio" activeClassName="active" className="nav-links">
                Portfolio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink data-testid="about" exact to="/about" activeClassName="active" className="nav-links">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink data-testid="contact" exact to="/contact" activeClassName="active" className="nav-links">
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={ handleClick }>
          </div>
        </div>
      </nav>
    </>
    )
};

export default Navbar;
