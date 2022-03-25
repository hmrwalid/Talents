import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
   <div>
         <main>
    <section className="home">
        <div className="max-width">
            <div className="home-content">
                <h6>welcom to Gold talent</h6>

                <h5> Where your dreams 
                    <br/>become a possibility.</h5>
                <p>Make those dreams come true with our broad networks and unique programs.<br/>Our object is to provide talented players a pathway towards a professional football career. We’ve brokered many contracts with European teams and are constantly scouting new recruits.<br/> Subscribe and stay informed.</p>
            </div>
           
        </div>
         </section>
         <section className="about">
            <div className="max-width">
                <div className="home-content">
                    <h5>Our Mission</h5>
    
                    <h6>Finding Gold</h6>
                    <p id="para">Our goal is finding Golden Talent in the Soccer World by creating unique opportunities so the right people see undeniable talent. Finding gold in such a large industry can be like trying to find a needle in a haystack. With our networks and programs, we have made that process easier, funner and more memorable.</p>
                      <Link to="/about"><span id="link" >Learn more about us</span></Link> 
                </div>
               
            </div>
             </section>
            </main>
      </div>
  
  )
}

export default Home
