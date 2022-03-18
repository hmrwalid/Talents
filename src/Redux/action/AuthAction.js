import axios from 'axios';
import { ERRORS, SET_USER } from '../typeAction';
import jwt_decode from 'jwt-decode'
import { setAuth } from '../../Util/setAuth';

export const Registration = (form, navigate)=>dispatch=>{
    axios.post('/api/register', form) 
    .then(res=>{
      navigate ('/login')
      dispatch({
        type: ERRORS,
        payload: {}
    })

    })
    .catch(err=>{
        dispatch({
            type: ERRORS,
            payload: err.response.data
        })
    })
}


export const loginAction = (form, navigate)=>dispatch=>{
    axios.post('/api/login', form) 
    .then(res=>{
        const {token} = res.data
        localStorage.setItem('jwt', token)
        const decode = jwt_decode(token)
        dispatch(setUser(decode))

    })
    .catch(err=>{
        dispatch({
            type: ERRORS,
            payload: err.response.data
        })
    })
}

export const Logout = ()=>dispatch=>{
    localStorage.removeItem('jwt')
    dispatch({
        type: SET_USER,
        payload: {}
    })
}

export const setUser = (decode)=>({
    type: SET_USER,
    payload: decode
})