import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';

import Inputs from './Input';
import { loginAction } from '../../Redux/action/AuthAction';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
    });
    
    const dispatch =useDispatch()
    const navigate = useNavigate()
    const errors = useSelector(state=>state.errors)

    const onChangeHandler = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
    
    const onSubmit =(e)=>{
        e.preventDefault();
        dispatch(loginAction(formData, navigate))
    }

  return (
    <div className='body'>
       <form onSubmit={onSubmit}>

<h3>Log in</h3>

<Inputs
                name="email"
                label="Email"
                type="text"
                icon="fa-solid fa-at"
                onChangeHandler={onChangeHandler}
                errors={errors.email}
              />
              <Inputs
                name="password"
                label="Password"
                type="password"
                icon="fa-solid fa-key"
                onChangeHandler={onChangeHandler}
                errors={errors.password}
              />
              <div className="d-flex justify-content-between">
              <button type="submit" className="btn btn-outline-primary">
                  Save <i className="fa-solid fa-floppy-disk"></i>
                </button> 
              
                <Link to="/register">I don't have account</Link>
              </div>
</form>
    </div>
  )
}

export default Login