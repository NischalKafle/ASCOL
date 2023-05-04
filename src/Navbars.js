import React from 'react';
import {Link} from 'react-router-dom';
import {useLocation, NavLink } from 'react-router-dom';


function Navbars() {
  
  return (
    
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
    <nav className="navbar  ">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">
        <img src="/images/hotel_logo.jpg" alt="" width="70px" height="90px" className="d-inline-block align-text-top"/>
    
      </a>
    </div>
  </nav>
      <a className="navbar-brand" href="#">HOTEL</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
 
      <div className="collapse navbar-collapse " id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 " id="lists">
          <li className="nav-item">
            <NavLink to="/" activeClassName="active" className="nav-link" end >Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/About" activeClassName="active" className="nav-link" >About</NavLink>
          </li>
          <li className="nav-item dropdown">
          <NavLink exact to="/Our Team" activeClassName="active "  className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Our Team
          </NavLink>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><NavLink to="/Our Team/Board Members" className="dropdown-item" activeClassName="active">Board Members</NavLink></li>
            <li><NavLink to="/Our Team/Executive Committee" className="dropdown-item" activeClassName="active">Executive Committee</NavLink></li>
            <li><hr className="dropdown-divider"/></li>
            <li><NavLink to="/Our Team/Support Staff" className="dropdown-item" activeClassName="active">Support Staff</NavLink></li>
          </ul>
        </li>

          <li className="nav-item">

          <NavLink activeClassName="active" className="nav-link" to="/services">Services</NavLink>
       
     </li>
        </ul>
       
        <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
  )
}
export default Navbars;