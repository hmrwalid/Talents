import React from 'react'
import { Table } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { deleteAccount } from '../../Redux/action/ActionProfil'

const Profil = ({profile}) => {
    const dispatch = useDispatch()
  return (
    <Table striped bordered hover>
    <thead>
      <tr>
        <th> User</th>
        <th>Email</th>
        <th></th>

      </tr>
    </thead>
    <tbody>
      <tr>
       
        <td>{profile.name}</td>
        <td>{profile.email}</td>
        
        <td>
        <button className="btn btn-outline-danger" onClick={()=>dispatch(deleteAccount())}>Delete</button>
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