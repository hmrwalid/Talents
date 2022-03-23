import axios from "axios";
import { DELETE_PROFILE, ERRORS, SET_PROFILE, SET_PROFILES , GET_USERS_LOAD} from "../typeAction";







export const getProfiles = ()=>dispatch=>{
    dispatch({type: GET_USERS_LOAD})

    axios
      .get("/api/profiles")
      .then(res => {
          dispatch({
              type: SET_PROFILES,
              payload: res.data
          })
      })
      .catch(err => {
          dispatch({
              type: ERRORS,
              payload: err.response.data
          })
      });
}


export const GetProfile = ()=>dispatch=>{
    axios
      .get("/api/profile")
      .then(res => {
          dispatch({
              type: SET_PROFILE,
              payload: res.data
          })
          dispatch({
            type: ERRORS,
            payload: {}
        })
      })
      .catch(err => {
          dispatch({
              type: ERRORS,
              payload: err.response.data
          })
      });
}



export const AddProfile = (form, setShow, setMessage)=>dispatch=>{
    axios
      .post("/api/profiles", form)
      .then(res => {
        setShow(true)
        setMessage("User added with success")
        dispatch({
            type: ERRORS,
            payload: {}
        })
        setTimeout(() => {
            setShow(false)
        }, 4000);
      })
      .catch(err => {
          dispatch({
              type: ERRORS,
              payload: err.response.data
          })
      });
}





export const DeleteProfile = (id)=>dispatch=>{
    if(window.confirm("are you sure to delete this user?")){
     axios
     .delete(`/api/profiles/${id}`)
     .then(res => {
         dispatch({
             type: DELETE_PROFILE,
             payload: id
         })
     })
     .catch(err => {
         dispatch({
             type: ERRORS,
             payload: err.response.data
         })
     });
    }
 }