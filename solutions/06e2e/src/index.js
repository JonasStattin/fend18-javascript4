import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import './styles/tailwind.css';
import { getUserFromLocalStorage, getPostsFromLocalStorage }from './utils/localStorage';

const user = getUserFromLocalStorage();
const posts = getPostsFromLocalStorage();

ReactDOM.render(<App user={user} posts={posts} />, document.getElementById('root'));
registerServiceWorker();
