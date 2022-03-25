import React from "react";
import Classnames from 'classnames'
function Inputs({name, label, value, type, icon, onChangeHandler, errors}) {
  return (
    <div className=" mb-3">
      <label >{label}</label>
      <div className="input-group">  
        <input type={type} value={value} name={name} className={Classnames("form-control", {"is-invalid": errors})} onChange={onChangeHandler}/>
        {
          errors && (<div  className="invalid-feedback">
          {errors}
        </div>)
        }
      </div>
    </div>
  );
}

export default Inputs;



