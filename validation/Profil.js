const isEmpty = require("./isEmpty");
const validator = require("validator");

module.exports = function ValidateProfile(data) {
  let errors = {};

  data.age = !isEmpty(data.age) ? data.age : "";
  data.height = !isEmpty(data.height) ? data.height : "";
  data.weight = !isEmpty(data.weight) ? data.weight : "";
  data.stronger_Foot = !isEmpty(data.stronger_Foot) ? data.stronger_Foot : "";

  if (validator.isEmpty(data.age)) {
    errors.age = "Required age";
  }
 
  if (validator.isEmpty(data.height)) {
    errors.height = "Required height";
  }
  if (validator.isEmpty(data.weight)) {
    errors.weight = "Required weight";
  }
  
  if (validator.isEmpty(data.stronger_Foot)) {
    errors.stronger_Foot = "Required stronger_Foot";
  }
  


  return {
      errors,
      isValid: isEmpty(errors)
  }
};