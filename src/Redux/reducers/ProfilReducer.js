import { CLEAR_PROFILE, GET_PROFILE, GET_PROFILES, PROFILE_ERROR, UPDATE_PROFILE } from "../typeAction";

const initialState = {
    profile: null,
    profiles: [],
    loading: true,
    error: {},
  };
  
  const profileReducer = (state = initialState, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case GET_PROFILE:
      case UPDATE_PROFILE:
        return {
          ...state,
          profile: payload,
          loading: false,
        };
      case GET_PROFILES:
        return {
          ...state,
          profiles: payload,
          loading: false,
        };
      case PROFILE_ERROR:
        return {
          ...state,
          error: payload,
          loading: false,
          profile: null,
        };
      case CLEAR_PROFILE:
        return {
          ...state,
          profile: null,
        };
     
  
      default:
        return state;
    }
  };
  
  export default profileReducer;