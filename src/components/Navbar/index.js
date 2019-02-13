import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { red } from "ansi-colors";



function Navbar() {
  return (
    <nav style={{ color: red }}className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand"  to="/">
       Vitamin Overdose
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/home"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/login"
              className={window.location.pathname === "/login" ? "nav-link active" : "nav-link"}
            >
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/vitamins"
              className={window.location.pathname === "/vitamins" ? "nav-link active" : "nav-link"}
            >
              Vitamins
            </Link>
          </li>
          
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
