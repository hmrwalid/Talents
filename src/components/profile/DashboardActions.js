import React from 'react'
import { Link } from 'react-router-dom'

const DashboardActions = () => {
  return (
    <div>

      
           <div className='dash-buttons'>
      <Link to='/edit-profile' className='btn'>
        <i className='fas fa-id-card text-primary'></i> Edit Profile
      </Link>

    </div>
    </div>
  )
}

export default DashboardActions