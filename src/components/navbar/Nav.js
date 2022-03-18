import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Logout } from '../../Redux/action/AuthAction.js';
import { Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
     NavBtnLink} from "./NavElement.js"

const Navbar = () => {
  const user = useSelector(state => state.auth)

  const dispatch = useDispatch()
  const handelLogout=()=>{
    dispatch(Logout())
  }
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
        
          {!user.isConnected ? 
          (<>
          <NavBtn>
          <NavLink to='/login'>Login</NavLink>
          <NavLink to='/register'>Sign Up</NavLink>
          </NavBtn>
          </>):(
          <>
          <NavBtn>
            <NavLink to='/dashbord' >{user.user.name}</NavLink>
            <NavLink to='#' onClick={handelLogout}>Logout</NavLink>
            </NavBtn>
          </>)  }
          
         

     
      </Nav>
    </>
  );
};

export default Navbar;