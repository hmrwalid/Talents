import { ERRORS }  from "../typeAction";


const initialState = {}
  const errorReducer =(state = initialState, {type, payload})=>{
  switch (type) {
      case ERRORS:
          return  payload
  
      default:
          return state
  }
}

export default errorReducer