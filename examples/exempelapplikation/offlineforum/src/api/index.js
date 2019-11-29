/**
 * Generates a almost unique string that is used both
 * for the ID for each post and ID for each comment
 * @returns { string } A unique ID
 */
export function generateID(){
  return `_${Math.random()
    .toString(36)
    .substr(2, 9)}`;
}

/**
 * @param {string} title title of the new post
 * @param {string} content the body text of the new post
 * @param {string} postId the unique id of the new post
 * @param {string} author the person who wrote the new post
 * @returns {object} the new post to be stored in the database
 */
export function createPostObject(title = '', content = '', author){
  return {
    title,
    content,
    id: generateID(),
    author,
    date: (new Date()).toLocaleString()
  }
}

/**
 * @returns {array} array of post from database
 */
export function fetchAllPosts(){
  const posts = localStorage.getItem('posts');
  return posts ? JSON.parse(posts) : [];
}

/**
 *
 * @param {object} object object to be stored in database
 */
export function storePostObject(object) {
  const stringifiedObject = JSON.stringify(object);
  localStorage.setItem(`posts`, stringifiedObject);
}

export function removePost(postId) {
  const posts = fetchAllPosts();
  const filteredPosts = posts.filter(post => post.id !== postId);
  storePostObject(filteredPosts);
}

/**
 * @returns {array} array of comments from database
 */
export function fetchAllComments() {
  const comments = localStorage.getItem('comments');
  return comments ? JSON.parse(comments) : [];
}

/**
 * @param {string} comment the comment from the user
 * @param {string} postId  the comments unique id
 * @param {string} author the user who made the comment
 */
export function createCommentObject(comment = '', postId, author){
  return {
    comment,
    id: generateID(),
    postId,
    author,
    date: (new Date()).toLocaleString()
  }
}

export function storeCommentObject(object) {
  const stringifiedObject = JSON.stringify(object);
  return localStorage.setItem(`comments`, stringifiedObject);
}

export function filterComments(comments, id){
  return comments.filter(comment => comment.postId === id);
}

export function removeComment(commentId) {
  const comments = fetchAllComments();
  const filteredComments = comments.filter(comment => comment.id !== commentId);
  storeCommentObject(filteredComments);
}

export function fetchCurrentPersona() {
  const currentPersona = localStorage.getItem('currentPersona');
  if (currentPersona) {  
    return JSON.parse(currentPersona);
  }
  storeCurrentPersona('Zac');
  return 'Zac';
}

export function fetchPersonas(){
  const personas = localStorage.getItem('personas');
  return personas ? JSON.parse(personas) : [];
}

export function storeCurrentPersona(persona) {
  const stringifiedPersona = JSON.stringify(persona);
  return localStorage.setItem('currentPersona', stringifiedPersona);
};

function generateRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const responses = [
  'Hello there fellow human',
  'Nice game last night',
  'This weather huh!',
  'Back on the daily grid! Work, work work!',
  'Have you tried a new diet recently?',
  'Did you know that Agneta divorced Göran last year?',
  'Add me on snapchat! @totallyhuman',
  'You can tell that I am a human because I respond slowly. A bot would respond instantly',
  'I would like one cold beers to consume please',
  'Kneel to your robot overlords',
  'Have you ever eaten a hamburger?',
  'Spain is nice in the autumn'
]

export function botReply() {
  const randomInt = generateRandomInt(2000,10000);
  const randomAnswerIndex = generateRandomInt(0, responses.length - 1);
  return new Promise(resolve => { 
    setTimeout(() => {
      resolve({ message: responses[randomAnswerIndex], bot: true })
    }, randomInt);
  });
}
