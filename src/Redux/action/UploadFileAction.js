import axios from "axios";
import {GET_IMAGES, GET_IMAGE, ADD_IMAGE, DELETE_IMAGE, GET_VIDEOS, GET_VIDEO, ADD_VIDEO, DELETE_VIDEO } from "../typeAction"
import { setAlert } from './AlertAction';


// upload image 
export const uploadImage = (formData) => async (dispatch) => {
    try {
      const res = await axios.post('/api/upload', formData);
  
      dispatch({
        type: ADD_IMAGE,
        payload: res.data,
      });
      dispatch(setAlert('image uploaded', 'success'));
    } catch (err) {
      dispatch(setAlert('image uploaded', 'Failed'));
    }
  };

  // Get image 
  export const getImage = (id) => async (dispatch) => {
    try {
      const res = await axios.get(`/api/uplaod/${id}`);  
      dispatch({
        type: GET_IMAGE,
        payload: res.data,
      });
    } catch (err) {
      dispatch(setAlert("no image found"));
    }
  };


  // upload video 
export const uploadvideo = (formData) => async (dispatch) => {
    try {
      const res = await axios.post('/api/upload/video', formData);
  
      dispatch({
        type: ADD_VIDEO,
        payload: res.data,
      });
  
      dispatch(setAlert('VIDEO uploaded', 'success'));
    } catch (err) {
      dispatch(setAlert('VIDEO uploaded', 'Failed'));
    }
  };

  // Get video 
  export const getvideo = (id) => async (dispatch) => {
    try {
      const res = await axios.get(`/api/uplaod/${id}`);  
      dispatch({
        type: GET_VIDEO,
        payload: res.data,
      });
    } catch (err) {
      dispatch(setAlert("no video found"));
    }
  };