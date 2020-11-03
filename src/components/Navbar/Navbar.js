import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link, animateScroll as scroll } from "react-scroll";
import { MdSpa } from "react-icons/md";
import Button from "../ButtonElement/ButtonElement";
import "../Animations.css";

function Navbar() {
  const [menuActive, setMenuActive] = useState(false);
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const closeMenu = () => {
    setMenuActive(false);
  };

  return (
    <>
      <nav scrollNav={scrollNav}>
        <div className="navbar-container">
          <div className="logo-container">
            <Link to="/" onClick={toggleHome}>
              <MdSpa /> BLAH
            </Link>
          </div>
          <div
            className={`mobile-icon ${menuActive ? "times" : "bars"}`}
            onClick={toggleMenu}
          >
            <div className="hamburger hamburger1"></div>
            <div className="hamburger hamburger2"></div>
            <div className="hamburger hamburger3"></div>
          </div>
          <div className={`nav-menu-container ${menuActive ? "active" : ""}`}>
            <ul className="nav-menu">
              <li className="nav-menu__item">
                <Link
                  className="nav-menu__item--link"
                  to="aboutus"
                  onClick={closeMenu}
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={0}
                >
                  about us
                </Link>
                <div className="nav-underline"></div>
              </li>
              <li className="nav-menu__item">
                <Link
                  className="nav-menu__item--link"
                  to="products"
                  onClick={closeMenu}
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={0}
                >
                  products
                </Link>
                <div className="nav-underline"></div>
              </li>
              <li className="nav-menu__item">
                <Link
                  className="nav-menu__item--link"
                  to="services"
                  onClick={closeMenu}
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={0}
                >
                  services
                </Link>
                <div className="nav-underline"></div>
              </li>
              <li className="nav-menu__item">
                <Button
                  className="nav-menu__item--link"
                  destination="/signup"
                  buttonLabel="sign up"
                  theme="nav"
                  onClick={closeMenu}
                />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
