import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router'
import VirtualMap from './VirtualMap.js'
import Calculate from './Calculate.js'


class Submit extends React.Component {
render () {
    return(
    <div>
     <Router history={browserHistory}>
     <Route path='/' component={Calculate} />
     <Route path='/virtualmap' component={VirtualMap} />
     </Router>
    </div>
  );
 } 
}

export default Submit