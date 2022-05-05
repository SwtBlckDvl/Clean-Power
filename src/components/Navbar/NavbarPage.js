import React from "react";
import { Link } from "react-router-dom";

import "./NavbarPage.css";

export const NavbarPage = () => {
  return (
    <div className="section">
      <nav className="navbar navbar-expand-lg navbar-dark ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Clean Power
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Team
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Faq
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
