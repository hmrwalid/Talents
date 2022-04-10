import React from 'react'

const ProfilCardItems = ({profile}) => {
  return (
    <div style={{margin:"5px"}}>
         <div className="flip-container">
        <div className="flip-inner-container">
          <div className="flip-front">
            <img src="/gold.png" alt="peof" />
          </div>
          <div className="flip-back">
            <div className="profile-image">
              <img src="/foot.jpg" />
              <h2>{profile.name}</h2>
              <p>{profile.Favorite_position}</p>
              <ul>
                <i className="fab fa-facebook-f" />
                <i className="fab fa-instagram" />
                <i className="fab fa-youtube" />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilCardItems