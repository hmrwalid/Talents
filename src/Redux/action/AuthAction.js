import axios from 'axios';
import { ERRORS, SET_USER } from '../typeAction';
// import jwt_decode from 'jwt-decode'
import { setAuth } from '../../Util/setAuth';

export const Registration = (form, navigate)=>dispatch=>{
    axios.post('/api/register', form) 
    .then(res=>{
     console.log(res)
    })
    .catch(err=>{
        dispatch({
            type: ERRORS,
            payload: err.response.data
        })
    })
}