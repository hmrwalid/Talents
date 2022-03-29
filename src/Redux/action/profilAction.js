import axios from "axios";
import { EDIT_USER, ERRORS, GET_USERS_LOAD, SET_PROFILE, SET_PROFILES, TOGGLE_FALSE, TOGGLE_TRUE } from "../typeAction";


/* get all users*/
export const getUsers = ()=>dispatch=>{
    dispatch({type: GET_USERS_LOAD})

    axios
      .get("/api/")
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
/* get single user */
export const getUser= (id)=>(dispatch)=>{
    axios.get(`/api/profile/me`)
    .then ((res)=>dispatch({type:SET_PROFILE, payload:res.data.response}))
    .catch(err=>{
        dispatch({
            type: ERRORS,
            payload: err.response
        })    })
}

/* delete user */
export const deleteUser = (id)=>(dispatch)=>{
    axios.delete(`api/${id}`)
    .then((res)=>dispatch(getUsers()))
    .catch(err=>{
        dispatch({
            type: ERRORS,
            payload: err.res.data
        })
    })
}


/* create profile*/
export const CreateProfile= (profile)=> async(dispatch)=>{
    try {
        await axios.post(`/api/profiles`, profile)
        dispatch (getUser())
    } catch (err) {
        dispatch({
            type: ERRORS,
            payload: err.response.data
        })
    }
}

export const  editProfile= (id, user)=>(dispatch)=>{
    axios.put(`/api/${id}`, user)
    .then((res)=>{
        dispatch ({type: EDIT_USER, payload: res.data.response})
    })
    .then (dispatch(getUser()))
    .catch(err=>{
        dispatch({
            type: ERRORS,
            payload: err.response.data
        })
    })
}


export const toggleTrue=()=>{
    return {
        type: TOGGLE_TRUE
    }
}

export const toggleFalse=()=>{
    return {
        type: TOGGLE_FALSE
    }
}