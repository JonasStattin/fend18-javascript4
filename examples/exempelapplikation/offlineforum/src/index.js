import React from 'react';
import ReactDOM from 'react-dom';
import fakePosts from './fakePosts';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import './style.css';

const postsInLocalStorage = localStorage.getItem('posts');
if(!postsInLocalStorage){
  localStorage.setItem('posts', JSON.stringify(fakePosts.data));
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
