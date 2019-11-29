import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import './styles/tailwind.css';
import { getUserFromLocalStorage }from './utils/localStorage';

const user = getUserFromLocalStorage();

ReactDOM.render(<App user={user} />, document.getElementById('root'));
registerServiceWorker();
