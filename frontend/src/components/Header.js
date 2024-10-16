import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='header'>
      <div className='header-container'>
        <h1 className='logo'>VINIYAS PROPERTY</h1>

        <form className='middle-form'>
          <input type='search' placeholder='Search here...' />
        </form>

        <ul className='header-left'>
          <Link to='/'><li className='header-nav-left'>Home</li></Link>
          
          <div className='property-nav'>
            <Link to='/properties'><li className='header-nav-left'>Properties</li></Link>
            <div className='property-dropdown'>
              <ul className='property-dropdown-section'>
                <Link to='/all'><li>ALL</li></Link>
                <Link to='/buy'><li>BUY</li></Link>
                <Link to='/rent'><li>RENT</li></Link>

              </ul>
            </div>
          </div>

          <Link to='/news'><li className='header-nav-left'>News</li></Link>
          <Link to='/team'><li className='header-nav-left'>Team</li></Link>
          <Link to='/contactmenu'><li className='header-nav-left'>Contact</li></Link> 
          <Link to='/sign-in'><li className='header-nav-left'>Sign In</li></Link>
        </ul>
      </div>
    </div>
  );
}

export default Header;
