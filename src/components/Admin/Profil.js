import React from 'react'
import { Table } from 'react-bootstrap'

const Profil = ({profile}) => {
    
  return (
    <Table striped bordered hover>
    <thead>
      <tr>
        <th> User</th>
        <th>Email</th>
        <th>Telephone</th>
        <th></th>

      </tr>
    </thead>
    <tbody>
      <tr>
       
        <td>{profile.user.name}</td>
        <td>{profile.user.email}</td>
        <td>{profile.tel}</td>
        <td>
        <button className="btn btn-outline-danger" >Delete</button>
        </td>
      </tr>
     
    </tbody>
  </Table>
  
  )
}

export default Profil
{/* <div>
<div>  {profile.user.name}</div>
<div> Age: {profile.age}</div>
<div> Hieght: {profile.height}</div>
<div>Weight: {profile.weight}</div>

</div> */}