import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
         <div className="footer-dark">
        <footer style={{color:'white'}}>
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-md-3 item">
                <h3>Services</h3>
                
              </div>
              <div className="col-sm-6 col-md-3 item">
                <h3>Contact Us</h3>
                <ul>
                  <li>Facebook</li>
                  <li>Instagram</li>
                  <li>Email</li>
                </ul>
              </div>
              <div className="col-md-6 item text">
                <h3>Golden Talent</h3>
                <p>Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam quis tristique lectus. Aliquam in arcu eget velit pulvinar dictum vel in justo.</p>
              </div>
              <div className="col item social"><i className="icon ion-social-facebook" /><i className="icon ion-social-twitter" /><i className="icon ion-social-snapchat" /><i className="icon ion-social-instagram" /></div>
            </div>
            <p className="copyright" style={{color:'white'}}>Golden Talent © 2022</p>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Footer