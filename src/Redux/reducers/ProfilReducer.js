import { DELETE_PROFILE, EDIT_USER, GET_USER, GET_USERS_FAIL, GET_USERS_LOAD, GET_USERS_SUCCESS, SET_PROFILE, SET_PROFILES } from "../typeAction"

const initialState = {
    profiles: [],
    profile: {},
    loadProfile : false,
  editUser: "",
}

 const userReducer =(state = initialState, action)=> {
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
          case EDIT_USER:
            return {...state , editUser:action.payload}
      default:
        return state;
    }
  }
export default userReducer