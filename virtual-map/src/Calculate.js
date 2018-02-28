import React, { Component } from 'react'
import { browserHistory } from 'react-router'

var createReactClass = require('create-react-class');

export default class Calculate extends Component {
render () {
   return (
     <div className={'Calculate-page'} >
       <CalculateButton type='button' value='Submit' name='Submit' onClick='result()' />
     </div>
   )
}
}

var CalculateButton = createReactClass({
result: function () {
     const path = '/virtualmap'
     browserHistory.push(path)
},
render: function () {
   return <div className={'calculate-button'} align="center">
     <button type={this.props.type} value={this.props.value} name={this.props.name} onClick={this.result} >
             Submit
     </button>
   </div>
}
})