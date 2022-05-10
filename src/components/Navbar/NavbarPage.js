import React from "react";
import { Link, NavLink } from "react-router-dom";
import "bootstrap";

import "./NavbarPage.css";

export const NavbarPage = () => {
  return (
    <div className="section">
      <nav class="navbar navbar-expand-lg navbar-dark ">
        <div class="container-fluid ">
          <Link className="navbar-brand" to="/">
            <h2>Clean Power</h2>
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse navBarU" id="navbarNavAltMarkup">
            <div className="navbar-nav ">
              <NavLink to="/Home">
                <h5 className="nav-link" aria-current="page">
                  Home
                </h5>
              </NavLink>
              <NavLink to="/About">
                <h5 className="nav-link">About</h5>
              </NavLink>
              <NavLink to="/Team">
                <h5 className="nav-link">Team</h5>
              </NavLink>
              <NavLink to="/Faq">
                <h5 className="nav-link">Faq</h5>
              </NavLink>
            </div>
            <button className="buttonContactU">
              <h5>Contact</h5>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};
