import React from 'react';

class NavBar extends React.Component {
  render() {
    return (
      <>
        <nav className='navbar navbar-light bg-light'>
          <div className='container-fluid'>
            <a className='navbar-brand' href='#'>
              Navbar
            </a>
          </div>
        </nav>
      </>
    );
  }
}

export default NavBar;
