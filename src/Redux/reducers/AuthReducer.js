import{ isEmpty }from "../../Util/isEmpty";
import { SET_USER } from "../typeAction";

const initialState = {
  isConnected: false,
  user: {},
};
 const authReducer =(state = initialState, action)=> {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        isConnected: !isEmpty(action.payload),
        user: action.payload,
      };

    default:
      return state;
  }
}
export default authReducer