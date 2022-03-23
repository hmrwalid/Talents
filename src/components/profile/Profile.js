import React from 'react'
import { useSelector } from 'react-redux'

const Profile = () => {
  const user= useSelector((state)=>state.auth.user)

  return (
    <div className='profile'>
      <button className="delete is-large"></button>
      <div className="card">
  <div className="card-image">
    <figure className="image is-4by3">
      <img src="https://www.preparationphysiquefootball.com/2018/images/forcejeune.jpg" alt="Placeholder image"/>
    </figure>
  </div>
  <div className="card-content">
    <div className="media">
      <div className="media-left">
        <figure className="image is-48x48">
          <img src="https://www.preparationphysiquefootball.com/2018/images/forcejeune.jpg" alt="Placeholder image"/>
        </figure>
      </div>
      <div className="media-content">
        <p className="title is-4">{user.name}</p>
        <p className="subtitle is-6">{user.email}</p>
      </div>
    </div>

    <div className="card">
  <footer className="card-footer">
  <button className="btn btn-outline-success" >video</button>
    <button className="btn btn-outline-info" >info</button>
  </footer>
</div>
  </div>
</div>
      
      
      </div>
  )
}

export default Profile