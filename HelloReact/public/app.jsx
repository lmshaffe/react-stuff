var React = require('react');
var ReactDOM = require('react-dom');
//no need to specify path because of webpack config
var Greeter = require('Greeter');


var firstName = 'Lee';
var message = 'This is my custom message';

ReactDOM.render(
  <Greeter name={firstName} message ={message}/>,
  document.getElementById('app')
);
