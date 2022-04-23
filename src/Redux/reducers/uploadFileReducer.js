 import {GET_IMAGES, GET_IMAGE, ADD_IMAGE, DELETE_IMAGE, GET_VIDEOS, GET_VIDEO, ADD_VIDEO, DELETE_VIDEO } from "../typeAction"

const initialState = {
    images: [],
    image: {},
    videos: [],
    video: {},
    loading: true,
    
  };
  
  const uploadFileReducer = (state = initialState, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case GET_IMAGES:
        return {
          ...state,
          images: payload,
          loading: false,
        };
      case GET_IMAGE:
        return {
          ...state,
          image: payload,
          loading: false,
        };
        case ADD_IMAGE:
          return {
           images :[payload, ...state.images]
          };
        
;
      case DELETE_IMAGE:
        return {
          ...state,
          images: state.images.filter((image) => image._id !== payload),
          loading: false,
        };
        case GET_VIDEOS:
        return {
          ...state,
          videos: payload,
          loading: false,
        };
      case GET_VIDEO:
        return {
          ...state,
          video: payload,
          loading: false,
        };
      case ADD_VIDEO:
        return {
          ...state,
          videos: [payload, ...state.videos],
          loading: false,
        };
      case DELETE_VIDEO:
        return {
          ...state,
          videos: state.videos.filter((video) => video._id !== payload),
          loading: false,
        };
        default:
            return state;
        }
      };
      
      export default uploadFileReducer;