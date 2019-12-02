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
  let posts = JSON.parse(localStorage.getItem('msgposts'));
  if (!posts) { posts = [] }
  posts.push({
    id: Math.round(Math.random(Date.now())*1000000),
    post
  })
  localStorage.setItem('msgposts', JSON.stringify(posts));
  return posts;
}

export function getPostsFromLocalStorage() {
  const posts = localStorage.getItem('msgposts');
  return JSON.parse(posts) || []; 
} 

export function removePostFromLocalStorage({ id }) {
  let posts = JSON.parse(localStorage.getItem('msgposts'));
  if (!posts) { posts = [] }
  posts = posts.filter(p => p.id !== id)
  localStorage.setItem('msgposts', JSON.stringify(posts));
  return posts;
}
