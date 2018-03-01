import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Submit from './submitTemp';
import registerServiceWorker from './registerServiceWorker';


const element = (
    <div>
    <a href="/" id="logo">307 Virtual Map</a>
      <App label="From"/> 
      <App label="To"/>
      <Submit />
    </div>
  );

ReactDOM.render(element, document.getElementById('root'));
registerServiceWorker();