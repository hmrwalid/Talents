import { Button } from 'react-bootstrap'
import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div style={{display :"flex", justifyContent:"center", alignItems:"center"}}>
    <Link to="/singup">  <Button variant="warning" style={{margin:"10px", background: "#FFD700"} }>Recuiter</Button>{' '}</Link>
    <Link to="/singup">  <Button variant="warning"  style={{margin:"10px", background: "#FFD700"} }>Talent</Button>{' '}</Link>

    </div>
  )
}

export default Register