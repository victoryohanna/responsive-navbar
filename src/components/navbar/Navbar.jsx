import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.png";
import "./navbar.css";

const Menu = () => (
  <>
    <p>
      <a href="#home">Home</a>
    </p>
    <p>
      <a href="#about">About</a>
    </p>
    <p>
      <a href="#blogs">blogs</a>
    </p>
    <p>
      <a href="#contact">Contact</a>
    </p>
  </>
);

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="__navbar">
      <div className="__navbar-links">
        <div className="__navbaar-links_logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="__navbar-sign">
        <p>sign in</p>
        <button type="button">sign up</button>
      </div>
      <div className="__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#000"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#000"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="__navbar-menu_container scale-up-center">
            <div className="__navbar-menu_container-links">
              <Menu />
            </div>
            <div className="__navbar-menu_container-links-sign">
              <p>sign in</p>
              <button type="button">sign up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
