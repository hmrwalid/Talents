import React ,{ useState}from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { Registration } from '../../Redux/action/AuthAction';
import Inputs from './Input';
const SingUp = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
      });
      const dispatch =useDispatch()
      const navigate = useNavigate()
      const errors = useSelector(state=>state.errors)
  const onChangeHandler = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
    
    const onSubmit =(e)=>{
        e.preventDefault();
         dispatch(Registration(formData, navigate))
    }

  return (
      
    <div className='body'>
    <div className='logContainer'>
    <div className='login'>
      <form onSubmit={onSubmit}>
                <h3>Sing Up</h3>
                <Inputs name="name" label="Name" type="text" icon="fa-solid fa-user" onChangeHandler={onChangeHandler} errors={errors.name}/>
                 <Inputs name="email" label="Email" type="text" icon="fa-solid fa-at" onChangeHandler={onChangeHandler} errors={errors.email}/>
                 <Inputs name="password" label="Password" type="password" icon="fa-solid fa-key" onChangeHandler={onChangeHandler} errors={errors.password}/>
                <Inputs name="confirm" label="Confirm password" type="password" icon="fa-solid fa-key" onChangeHandler={onChangeHandler} errors={errors.confirm}/>
              
                <button>Sig in</button>
               <Link to="/login"> <p>
                   i  have account
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

export default SingUp