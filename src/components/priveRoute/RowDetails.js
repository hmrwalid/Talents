import React from "react";
import { useDispatch } from "react-redux";
import { DeleteProfile } from "../../Redux/action/profilAction";

function RowDetails({_id, user, address, tel, city}) {
    const dispatch =  useDispatch()
     const DeleteHandler = (_id)=>{
       dispatch(DeleteProfile(_id))
     }
   return (
     <tr>
       <th>{user.name}</th>
       <td>{user.email}</td>
       <td>{user.role}</td>
       <td>{address}</td>
       <td>{tel}</td>
       <td>
         <button className="btn btn-outline-danger" onClick={()=>DeleteHandler(_id)}>Delete</button>
       </td>
     </tr>
   );
 }
 
 export default RowDetails;