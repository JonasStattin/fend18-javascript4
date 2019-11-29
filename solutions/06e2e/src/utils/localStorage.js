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

export function addPostToLocalStorage(post){
  let posts = localStorage.getItem('msgposts');
  if (!posts) { posts = [] }
  posts.push(post)
  localStorage.setItem('msgposts', JSON.stringify(posts));
  return posts;
}

export function getPostsFromLocalStorage() {
  const posts = localStorage.getItem('msgposts');
  return JSON.parse(posts) || []; 
} 
