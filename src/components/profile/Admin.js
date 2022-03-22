import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetProfiles } from '../../Redux/action/profilAction'
import RowDetails from '../priveRoute/RowDetails'

function Admin() {
  
  const profiles = useSelector(state => state.profiles)
  console.log(profiles)
  const dispatch  = useDispatch()
  useEffect(async()=>{
    await dispatch(GetProfiles())
  },[])
  return (
    
     
      <div className="container p-4 mt-4">
        <div className="row justify-content-evenly mt-4">
           
           <div className="col-lg-12 col-md-12 mt-4">
               <div className="d-flex">
                <i className="fa-solid fa-user fs-1 mx-2"></i> <h2>Profiles list</h2>
               </div>
               <div className="shadow-lg p-3 mb-5 bg-body rounded" style={{backgroundColor: "white"}}>
                <table className="table table-hover">
                    <thead>
                      <tr>
                        <th scope="col">name</th>
                        <th scope="col">email</th>
                        <th scope="col">role</th>
                        <th scope="col">address</th>
                        <th scope="col">telephone</th>

                       
                       
                        
                      </tr>
                    </thead>
                    <tbody>
                      {
                        profiles.profiles.map(({_id, user,  address ,tel, city,})=>(
                           <RowDetails _id={_id}  user={user} address={address} tel={tel} city={city}  />
                        ))
                      }
                      
                    </tbody>
                  </table>
            </div>
           </div>
       </div>
   </div>
   
  )
}

export default Admin