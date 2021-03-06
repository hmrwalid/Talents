import axios from "axios";
import { ACCOUNT_DELETED, CLEAR_PROFILE, DELETE_PROFILE, GET_PROFILE, GET_PROFILES, PROFILE_ERROR } from "../typeAction";
import {setAlert }from "./AlertAction"
// Get Current User's Profile
export const getCurrentProfile = () => async (dispatch) => {
    try {
      const res = await axios.get('/api/profile/me');
  
      dispatch({
        type: GET_PROFILE,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: PROFILE_ERROR,
        payload: {
          msg: err.response.statusText,
          status: err.response.status,
        },
      });
    }
  };
  //get profile by id
  export const getProfilById = (id) => async (dispatch) => {
    try {
      const res = await axios.get(`/api/profile/${id}`);
      console.log(res)
  
      dispatch({
        type: GET_PROFILE,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: PROFILE_ERROR,
        payload: {
          msg: err.response.statusText,
          status: err.response.status,
        },
      });
    }
  };


  // Get All Profiles
export const getProfiles = () => async (dispatch) => {
    dispatch({ type: CLEAR_PROFILE });
  
    try {
      const res = await axios.get('/api/');
  
      dispatch({
        type: GET_PROFILES,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: PROFILE_ERROR,
        payload: {
          msg: err.response.statusText,
          status: err.response.status,
        },
      });
    }
  };

  // Create or Update a Profile
export const createProfile =
(formData, navigate, edit = false) =>
async (dispatch) => {
  try {
   const res = await axios.post('/api/profiles', formData);

    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    });

    dispatch(
      setAlert(edit ? 'Profile Updated' : 'Profile Created', 'success')
    );

    if (!edit) {
      navigate('/dashboard');
    }
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: PROFILE_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status,
      },
    });
  }
};

// Delete my Account & Profile
export const deleteAccount = () => async (dispatch) => {
    if (window.confirm('Are you sure to delete the profile')) {
      try {
        await axios.delete('/api/profile/me');
  
        dispatch({ type: CLEAR_PROFILE });
        dispatch({ type: ACCOUNT_DELETED });
  
      } catch (err) {
      console.log(err.toString())
      }
    }
  };

  // admin 
  export const deleteUsers =(id)=>async(dispatch)=>{
    if (window.confirm('Are you sure to delete the profile')){
      axios.delete(`/api/profile/${id}`)
      .then((res)=>dispatch(getProfiles()))
      .catch((err)=>console.log(err))
    }
 
  }
  
  