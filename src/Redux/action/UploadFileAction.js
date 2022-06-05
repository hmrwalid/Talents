import axios from "axios";
import { useState } from "react";
import {GET_IMAGES, GET_IMAGE, ADD_IMAGE, DELETE_IMAGE, GET_VIDEOS, GET_VIDEO, ADD_VIDEO, DELETE_VIDEO } from "../typeAction"
import { setAlert } from './AlertAction';


// upload image 
export const uploadImage = (formData) => async (dispatch) => {

  
    try {
      const res = await axios.post("http://localhost:5000/api/upload", formData);
   console.log(res)
      dispatch({
        type: ADD_IMAGE,
        payload: res.data,
      });
      dispatch(alert('image uploaded', 'success'));
    } catch (err) {
      dispatch(setAlert('image uploaded', 'Failed'));
    }
  };
  // Get my Image
  export const getMyImage = () => async (dispatch) => {
    try {
      const res = await axios.get('/api/upload/image/me');
  
      dispatch({
        type: GET_IMAGE,
        payload: res.data,
      });
    } catch (err) {

      console.log(err.toString())
    }
  };
  // Get Images
  export const getImages = () => async (dispatch) => {
    try {
      const res = await axios.get('/api/upload/');
  
      dispatch({
        type: GET_IMAGES,
        payload: res.data,
      });
    } catch (err) {
      console.log(err)
    }
  };

  // Get image 
  export const getImage = (id) => async (dispatch) => {
    try {
      const res = await axios.get(`/api/upload/${id}`);  
      dispatch({
        type: GET_IMAGE,
        payload: res.data
      });
      console.log(res.data)

    } catch (err) {
     console.log(err.toString())
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
      console.log(err.toString())

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
      console.log(err.toString())

    }
  };
  // Get my Video
  export const getMyVideo = () => async (dispatch) => {
    try {
      const res = await axios.get('/api/upload/video/me');
  
      dispatch({
        type: GET_VIDEO,
        payload: res.data,
      });
    } catch (err) {

      console.log(err.toString())

    }
  };
  // Get Videos
  export const getVideos = () => async (dispatch) => {
    try {
      const res = await axios.get('/api/upload/video');
  
      dispatch({
        type: GET_IMAGES,
        payload: res.data,
      });
    } catch (err) {
      console.log(err)
    }
  };