import React, { useEffect, useState } from 'react'
import Inputs from '../priveRoute/Input'
import { useDispatch, useSelector } from 'react-redux'
import Classnames from 'classnames'
import { AddProfile, GetProfile } from '../../Redux/action/profilAction'
import { Link } from 'react-router-dom'

const Profile = () => {
    const [form, setForm] = useState({})
    const dispatch = useDispatch()
    const errors = useSelector(state=>state.errors)
    const profiles = useSelector(state=>state.profiles)
    const [message, setMessage] = useState("")
    const [show, setShow] = useState(false)
    // console.log((profiles.profile.age))

    const onChangeHandler = (e)=>{
      setForm({
        ...form,
        [e.target.name]: e.target.value
      })
    }
    const onSubmit = (e)=>{
      e.preventDefault();
      dispatch(AddProfile(form, setShow, setMessage))
      }
      useEffect(async ()=>{
       await dispatch(GetProfile())
       setForm(profiles.profile)
      },[])
    return (
      <div>
         <div className="container p-4 mt-4">
        
          
        <div className="alert alert-success" role="alert" style={{ display: show ? "block" : "none"}}>
        {message}
      </div>
      
    
    <div className="row justify-content-evenly mt-4">
      <div className="col-lg-6 col-md-12 mt-4">
        <div className="d-flex">
          <i className="fa-solid fa-user fs-1 mx-2"></i> <h2>Profile</h2>
        </div>
        <div
        className='body' onSubmit={onSubmit}>
          <form >
            <Inputs name="age" label="age" value={form && form.age ? form.age : ""} type="number" onChangeHandler={onChangeHandler} errors={errors.age}/>
            <Inputs name="height" label="height" value={form && form.height ? form.height : ""} type="text" onChangeHandler={onChangeHandler} errors={errors.height}/>
            <Inputs name="weight" label="weight" value={form && form.weight ? form.weight : ""} type="text" onChangeHandler={onChangeHandler} errors={errors.weight}/>
            <Inputs name="stronger_Foot" label="stronger_Foot" type="text" value={form && form.stronger_Foot ? form.stronger_Foot : ""} onChangeHandler={onChangeHandler} errors={errors.stronger_Foot}/>
            <Inputs name="tel" label="tel" value={form && form.tel ? form.tel : ""} type="number" onChangeHandler={onChangeHandler} errors={errors.tel}/>
            <Inputs name="city" label="city" value={form && form.city ? form.city : ""} type="text" onChangeHandler={onChangeHandler} errors={errors.city}/>
  
            <div className=" mb-3">
              <label className="form-label">Address</label>
              <div className="input-group">
                <textarea
                  type="text"
                  className={Classnames("form-control", {"is-invalid": errors.address})}
                  name="address"
                  onChange={onChangeHandler}
                  value={form && form.address ? form.address : ""}
                ></textarea>
                {
                  errors.address && (<div  className="invalid-feedback">
                  {errors.address}
                </div>)
                }
              </div>
            </div>
            <div className="d-flex justify-content-between">
             <button type="submit" className="btn btn-outline-primary">
                Update <i className="fa-solid fa-floppy-disk"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
      </div>
    )
  }
  
  export default Profile