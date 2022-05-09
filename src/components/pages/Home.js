import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getProfiles } from '../../Redux/action/ActionProfil'
import ProfilCard from '../ProfilCard/ProfilCard'
import Email from './Email'

const Home = () => {
    const dispatch = useDispatch()

    const profiles = useSelector((state)=>state.profile.profiles)
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
         <ProfilCard/>

            </main>
            <Email/>
      </div>
  
  )
}

export default Home
