import axios from 'axios'
import React from 'react'

const About = () => {
  
  return (
<div style={{ marginTop:"1rem"}}>
      <div className='ab'>
      <h1 className='h1'>ABOUT US</h1>

      </div>
      <div className='aboutUs'>
        <div className="container  ">
        <div className="text-center mb-2-8 mb-lg-6">
          <h2 className="display-18 display-md-16 display-lg-14 font-weight-700" style={{color:"#b88017"}}>Why choose <strong className="text-primary font-weight-700">Us</strong></h2>
          <span style={{color:"white"}}>The trusted source for finding talent player in Tunisia</span>
        </div>
        <div className="row align-items-center">
          <div className="col-sm-6 col-lg-4 mb-2-9 mb-sm-0">
            <div className="pr-md-3">
              <div className="text-center text-sm-right mb-2-9">
                <div className="mb-4">
                  <img src="p1.jpg" alt="..." className="rounded-circle " width="180px" />
                </div>
                <h4 className="sub-info" style={{color:"#b88017"}}>finding gold talent</h4>
                <p className="display-30 mb-0" style={{color:"white"}}>Our GOLDEN TALENT website facilitates the search for underrated talents especially in developing regions</p>
              </div>
              
            </div>
          </div>
          <div className="col-lg-4 d-none d-lg-block">
            <div className="why-choose-center-image">
              <img src="/gold.png" alt="..." className="rounded-circle gold" />
            </div>
          </div>
          <div className="col-sm-6 col-lg-4">
            <div className="pl-md-3">
            <div className="text-center text-sm-right">
                <div className="mb-4">
                  <img src="/contrat.jpg" alt="..." className="rounded-circle imgAbout" />
                </div>
                <h4 className="sub-info" style={{color:"#b88017"}}>Professional Contracts</h4>
                <p className="display-30 mb-0" style={{color:"white"}}>Our GOLDEN TALENT website makes it easy to search for professional contracts for talent players</p>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </div>
       {/* <main>
             <section className="about">
            <div className="max-width">
                <div className="home-content">
                    <h5>Our Mission</h5>
    
                    <h6>Finding Gold</h6>
                    <p id="para">Our mission is to provide talented players a pathway towards a professional football career. We’ve brokered many contracts with European teams and are constantly scouting new recruits. You’ll even recognise some of our graduates, such as Southampton’s Mohammed Salisu and Real Valladolid’s Isaac Amoah.</p>
                </div>
               
            </div>
             </section>
             </main> */}

        </div>
  )
}

export default About