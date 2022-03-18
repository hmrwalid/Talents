import React,{useState} from 'react'

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
    });

    const handleOnChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
    
    const onSubmit =(e)=>{
        e.preventDefault();
        console.log(formData)
    }

  return (
    <div className='body'>
       <form onSubmit={onSubmit}>

<h3>Log in</h3>

<div className="form-group">
    <label>Email</label>
    <input type="email" className="form-control" name='email' placeholder="Enter email" onChange={handleOnChange} />
</div>

<div className="form-group">
    <label>Password</label>
    <input type="password" className="form-control" name='password' placeholder="Enter password" onChange={handleOnChange} />
</div>



<button type="submit" className="btn btn-dark btn-lg btn-block" style={{margin :"20px"}}>Sign in</button>
</form>
    </div>
  )
}

export default Login