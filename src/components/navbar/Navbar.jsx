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
        </div>
    </div>
  )
}

export default Navbar