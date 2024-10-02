

import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import logo from '../../assets/photos/studios (2).svg'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg ">
      
      <div className="navbar-brand container-fluid " style={{
          textDecoration: ''

        }}>
        
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-main" to="/contact"><img src={logo} style={{
          width: '100%',
          
        }}></img></Link>
        <Link className="nav-link" to="/services">Services</Link>
        </div>
    </nav>
  );
}

export default Navbar;
