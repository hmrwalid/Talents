import React ,{ useState}from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { Registration } from '../../Redux/action/AuthAction';
import Classnames from 'classnames'
const SingUp = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
      });
      const dispatch =useDispatch()
      const errors = useSelector(state=>state.errors)
  const handleOnChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
    
    const onSubmit =(e)=>{
        e.preventDefault();
         dispatch(Registration(formData))
    }

  return (
      
    <div className='body'>
      <form onSubmit={onSubmit}>
                <h3>Sing Up</h3>

                <div className="form-group">
                    <label>Name</label>
                    <input  type="text"className={Classnames("form-control", {"is-invalid": errors})}  name="name" placeholder=" name"  onChange={handleOnChange} />
                </div>


                <div className="form-group">
                    <label>Email</label>
                    <input type="email" name="email"className={Classnames("form-control", {"is-invalid": errors})}  placeholder="Enter email" onChange={handleOnChange}  />
                    {
                    errors && (<div  className="invalid-feedback">
                       {errors}
                            </div>)
                      }
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" name="password"className={Classnames("form-control", {"is-invalid": errors})}  placeholder="Enter password" onChange={handleOnChange}  />
                    {
                    errors && (<div  className="invalid-feedback">
                       {errors}
                            </div>)
                      }
                </div>
                <div className="form-group">
                    <label>Confirme password</label>
                    <input type="password"  name="confirm" className={Classnames("form-control", {"is-invalid": errors})}    placeholder="Enter password" onChange={handleOnChange} />
                    {
                    errors && (<div  className="invalid-feedback">
                       {errors}
                            </div>)
                      }
                      
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block" style={{margin :"20px"}}>Register</button>
                <p className="forgot-password text-right">
                    Already registered <Link to="/login">log in?</Link>
                </p>
            </form>
    </div>
  )
}

export default SingUp