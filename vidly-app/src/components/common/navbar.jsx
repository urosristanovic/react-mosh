import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light p-3'>
      <NavLink className='navbar-brand' to='/'>
        Vidly
      </NavLink>
      <div className='collapse navbar-collapse' id='navbarNav'>
        <ul className='navbar-nav'>
          <li className='nav-item active'>
            <NavLink className='nav-link' to='/movies'>
              Movies <span className='sr-only'>(current)</span>
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink className='nav-link' to='/customers'>
              Customers
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink className='nav-link' to='/rentals'>
              Rentals
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
