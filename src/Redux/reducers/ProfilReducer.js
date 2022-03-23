import { DELETE_PROFILE, SET_PROFILE, SET_PROFILES, GET_USERS_LOAD } from "../typeAction";

const intitialState = {
    profiles: [],
    profile: {},
    loadProfile : false,

  };
  const profileReducer= (state = intitialState, action)=> {
    switch (action.type) {
      case GET_USERS_LOAD:
        return{ ...state, loadProfile : true}
      case SET_PROFILE:
        return {
          ...state,
          loadProfile : false,
          profile: action.payload,
        };
      case SET_PROFILES:
        return {
          ...state,
          loadProfile : false,
          profiles: action.payload,
        };
        case DELETE_PROFILE:
          return {
            ...state,
            profiles: state.profiles.filter(p =>p._id !== action.payload),
          };  
  
      default:
        return state;
    }
  }

  export default profileReducer