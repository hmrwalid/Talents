import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getProfiles } from '../../Redux/action/ActionProfil'
import ProfilCard from '../ProfilCard/ProfilCard'
import About from './About'
import Email from './Email'

const Home = () => {
    const dispatch = useDispatch()

    const profiles = useSelector((state)=>state.profile.profiles)
    const user = useSelector(state => state.auth)

    useEffect(() => {
        dispatch( getProfiles())
       }, [getProfiles])
  return (
   <div style={{marginTop : "8rem"}}>
         <div className='hm'>
      <h1 className='h1'>welcom to Golden talent</h1>

      </div>
         <main>
    <section className="home">
        <div className="max-width">
            <div className="home-content">

                <h5> Where your dreams 
                    <br/>become a possibility.</h5>
                <p>Make those dreams come true with our broad networks and unique programs.Our objective is to provide talented players a pathway towards a professional football career. We’ve brokered many contracts with European teams and are constantly scouting new recruits.</p>
            </div>
           
        </div>

         </section>
         <About/>
         {!user.isConnected? (<>
            <div className='homesing'>
             <p>Register and you will be able to see the profiles of our players</p>
             <Link to="singup"><span className='btn'>Sing Up</span></Link>
         </div>
         </>):
         (<>
         <div>
      <h1 className='h1'>Our players</h1>
      <ProfilCard/>
      </div>
                  

         </>)}
         

            </main>
            <Email/>
      </div>
  
  )
}

export default Home
