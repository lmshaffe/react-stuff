var React = require('react');
var ReactDOM = require('react-dom');

var objOne = {
  name: 'Lee',
  location: 'Tampa'
};

var objTwo = {
  age: 99,
  ...objOne
  // object spreading, not available right away since it's a new ES6 feature
  // added stage 0 to support it
}

console.log(objTwo)

ReactDOM.render(
  <h1>Boilerplate app!</h1>,
  document.getElementById('app')
);
