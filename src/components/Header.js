import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import sideImage from "./assets/images/GROUP.jpg";

function Header() {
  return (
    <header>
      <nav>
       <div className="image">
         <img className="logo" src={sideImage} alt="Me" /></div>

        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about-us">About Us</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>

          <li className="contact">
            <Link className="cont" to="/contact">Contact Us</Link>
          </li>
          
        </ul>
      </nav>
    </header>
  );
}

export default Header;
