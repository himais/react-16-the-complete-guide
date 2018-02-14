import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//componente app será renderizado na div root na pasta public/index.html
ReactDOM.render(<App />, document.getElementById('root')); 
registerServiceWorker();
