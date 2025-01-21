import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import Logo from "../../assets/images/Logo/PAARSH-INFOTECH-LOGO.png"; // Adjusted path

const navbar = () => {
  return (
    <>
      <nav className="navbar">
        <ul className="logo">
          <li>
            <Link to="/" class="nav-link">
            <img src={Logo} alt="" srcset="" />
            </Link>
          </li>
        </ul>

        <ul>
          <li>
            <Link to="/" class="nav-link">HOME</Link>
          </li>
          <li>
            <Link to="/order" class="nav-link">ORDER-PLACEMENT</Link>
          </li>

          <li>
            <Link to="/about" class="nav-link">ABOUT</Link>
          </li>
          <li>
            <Link to="/contact" class="nav-link">CONTACT</Link>
          </li>
        </ul>

        <ul className="twoth-ul">
          <li>
            <Link to="/support" class="nav-link">SUPPORT</Link>
          </li>
          <li className="user-logo">
            <Link to="/user">
              <i class="fa-regular fa-circle-user"></i>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default navbar;
