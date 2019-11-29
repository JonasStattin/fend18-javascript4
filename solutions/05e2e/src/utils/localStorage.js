export function saveUserToLocalStorage(email){
  localStorage.setItem('user', email);
}

export function getUserFromLocalStorage(){
  const user = localStorage.getItem('user');
  return user || '';
}

export function removeUserFromLocalStorage(){
  localStorage.removeItem('user');
}