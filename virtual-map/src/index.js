import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const element = (
    <div>
      <App label="From"/> 
      <App label="To"/> 
    </div>
  );

ReactDOM.render(element, document.getElementById('root'));
registerServiceWorker();
