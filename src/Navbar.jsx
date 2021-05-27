import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar=()=>{

return (
    <>
    <div className="container-fluid nav_bg">
        <div className='row'>
        <div className="col-lg-10 mx-auto">

       
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand"to="/">Highavenue</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
      <li className="nav-item active">
        <NavLink exact className="nav-link" activeClassName="menu_active"  to="/">Home </NavLink>
      </li>
      <li className="nav-item active">
        <NavLink  exact className="nav-link" activeClassName="menu_active" to="/About">About </NavLink>
      </li>
      <li className="nav-item active">
        <NavLink  exact className="nav-link" activeClassName="menu_active"  to="/Service">Service</NavLink>
      </li>
      <li className="nav-item active">
        <NavLink exact className="nav-link" activeClassName="menu_active"  to="/Contact">Contact </NavLink>
      </li>
    
     
    </ul>
   
  </div>
</nav>
 </div>
        </div>
    </div>
    </>
)
}
export default Navbar;