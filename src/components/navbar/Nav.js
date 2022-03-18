import React from 'react';
import { Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
     NavBtnLink} from "./NavElement.js"

const Navbar = () => {
  return (
    <>
      <Nav>
        
        <Bars />
        <NavMenu>
        <NavLink to='/' activeStyle>
            Home
          </NavLink>
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
          <NavLink to='/challenge' activeStyle>
            Challenge
          </NavLink>
          <NavLink to='/contact-us' activeStyle>
            Contact Us
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavLink to='/login'>Login</NavLink>
          <NavLink to='/register'>Sign Up</NavLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;