import isEmpty from 'is-empty';
import validator from 'validator';

const loginValidation = (data) => {
  const errors = [];
  let { email, password } = data;

  // Convert empty fields to an empty string, so we can use validator functions
  email = isEmpty(email) ? '' : email;
  password = isEmpty(password) ? '' : password;

  //Email Validation
  if (validator.isEmpty(email)) {
    errors.push('Email field is required');
  } else if (!validator.isEmail(email)) {
    errors.push('Email is invalid');
  }

  //Password Validation
  if (validator.isEmpty(password)) {
    errors.push('Password field is required');
  }

  return {
    errors,
    hasErrors: errors.length > 0,
  };
};

const registerValidation = (data) => {
  const errors = [];
  let {
   
    firstName,
    phoneNo,
    email,
    lastName,
   
    password,
   
  } = data;

  // Convert empty fields to an empty string, so we can use validator functions
  
  firstName = isEmpty(firstName) ? '' : firstName;

  email = isEmpty(email) ? '' : email;
  phoneNo = isEmpty(phoneNo) ? '' : phoneNo;
  lastName = isEmpty(lastName) ? '' : lastName;
  password = isEmpty(password) ? '' : password;
  


  //Name Validation
  if (validator.isEmpty(firstName)) errors.push('name field is required');

  //email Validation
  if (validator.isEmpty(email)) errors.push('name field is required');
  else if (!validator.isEmail(email)) {
    errors.push('Email is invalid');
  }

  // phone Validation
  if (validator.isEmpty(phoneNo)) errors.push('phone field is required');

  //Last Name Validation
  if (validator.isEmpty(lastName)) errors.push('last name field is required');

 


 
  return {
    errors,
    hasErrors: errors.length > 0,
  };
};

export { loginValidation, registerValidation };
