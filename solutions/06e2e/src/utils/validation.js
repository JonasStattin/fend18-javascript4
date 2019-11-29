/* eslint-disable no-useless-escape */

export const validateEmail = inputEmail => {
  const emailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return emailRegex.test(inputEmail);
};

export const validatePassword = inputPassword => {
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
  return passwordRegex.test(inputPassword);
};

export const validateLogin = (email, password) => {
  if(validateEmail(email) && validatePassword(password)){
    return true;
  }
  return false;
}