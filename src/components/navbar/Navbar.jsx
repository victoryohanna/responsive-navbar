import React from 'react'
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import logo from '../../assets/logo.png';
import "./navbar.css";

function Navbar() {
  return (
    <div className='__navbar'>
        <div className='__navbar-links'>
            <div className='__navbaar-links_logo'>
                <img src={logo} alt="Logo" />
            </div>
            <div className='__navbar-links_container'>
                <p><a href="#home">Home</a></p>
                <p><a href="#about">About</a></p>
                <p><a href="#blogs">blogs</a></p>
                <p><a href="#contact">Contact</a></p>
            </div>
        </div>
        <div className='__navbar-sign'>
            <p>sign in</p>
            <button type='button'>sign up</button>
        </div>
    </div>
  )
}

export default Navbar