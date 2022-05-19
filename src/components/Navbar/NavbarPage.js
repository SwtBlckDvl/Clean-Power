import React from "react";
import { Link, NavLink } from "react-router-dom";
import "bootstrap";

import "./NavbarPage.css";

export const NavbarPage = () => {
  return (
    <div className="">
      <nav className="navbar navbar-expand-lg navbar-dark section fixed-top">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <h2
              style={{
                color: "#fff",
                fontSize: "25px",
                fontWeight: "700",
                letterSpacing: "2px",
              }}
            >
              ZEUZ
            </h2>
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
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse navBarU"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav ms-auto mb-2 mb-lg-0">
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
              <h5
                style={{
                  fontSize: "15px",
                  textTransform: "uppercase",
                  marginTop: "2.2px",
                }}
              >
                Contact
              </h5>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};
