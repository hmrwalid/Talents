import React from 'react'
import { Link } from 'react-router-dom'
import ProfilCard from '../ProfilCard/ProfilCard'

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
                <p>Make those dreams come true with our broad networks and unique programs.Our objective is to provide talented players a pathway towards a professional football career. We’ve brokered many contracts with European teams and are constantly scouting new recruits.</p>
            </div>
           
        </div>

         </section>
         <ProfilCard/>

            </main>
      </div>
  
  )
}

export default Home
