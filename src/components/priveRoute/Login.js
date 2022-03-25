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
    <div className='logContainer'>
    <div className='login'>
       <form onSubmit={onSubmit}>

       <h1>Login</h1>
                <hr/>
                <p>Explore the World!</p>
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
                <button>Sig in</button>
               <Link to="/singup"> <p>
                   i didn't have account
                </p>   </Link>         
              
</form>
    </div>
    <div class="pic">
            <img src="/foot.jpg"/>
        </div>
    </div>
    </div>
  )
}

export default Login