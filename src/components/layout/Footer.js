import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
         <div className="footer-dark">
        <footer >
          <div className="container">
            <div className="contact">
                <h3>Contact Us</h3>
                <span>+216 27727737</span>
                <ul>
                <a href="https://www.facebook.com/walid.hamrouni.1232"><li>Facebook 
                  <i className="fab fa-facebook-f" /> </li></a>  
                  <a href= 'https://www.instagram.com/hmr_walid/'> <li>Instagram <i className="fab fa-instagram" /></li></a>
                
                
                </ul>
              </div>
            <p className="copyright" style={{color:'#b88b0f'}}>Golden Talent © 2022</p>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Footer