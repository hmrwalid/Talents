import { ERRORS }  from "../typeAction";


const initialState = {}
  const errorReducer =(state = initialState, {type, payload})=>{
  switch (type) {
      case ERRORS:
          return {...state, payload}
  
      default:
          return state
  }
}

export default errorReducer