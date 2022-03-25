import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Logout } from '../../Redux/action/AuthAction'

const Navbar = () => {
  const user = useSelector(state => state.auth)
  const dispatch = useDispatch()
  const handelLogout=()=>{
    dispatch(Logout())
  }
  return (
    
         <header className="header">
       <Link to="/"> <span className="logo">
             <img width="150px" src="https://img1.wsimg.com/isteam/ip/3a817d52-c106-477e-b0b7-91f83c0259b3/big%20boi%202-03.png/:/rs=h:600/qt=q:95" alt="logo"/> 
        </span></Link>
        <nav className="navbar">
          <Link to='/'> <span>Home</span> </Link>
          <Link to='/contact'> <span>Contact</span></Link>
          <Link to='about'> <span>About us</span></Link>
                         <span>|</span>
              
              {!user.isConnected? (
                <>
                  <Link to='/login'> <span  className="btn">Login</span></Link>
                  <Link to='singup'>   <span className="btn">Sign Up</span></Link>
            </>
              ):  user.user.role === "ADMIN"?(
                <>
                 <Link to='/admin' > <span className="btn" >{user.user.role}</span></Link>
                 <Link to='#' > <span className="btn" onClick={handelLogout}>Logout</span></Link>                </>
              ):(
                <>
                
                  <Link to='/dashbord' > <span className="btn">{user.user.name}</span></Link>
                  <Link to='#' > <span className="btn" onClick={handelLogout}>Logout</span></Link>
                  
                </>) }

          
        </nav>
    </header>

   
  )
}

export default Navbar