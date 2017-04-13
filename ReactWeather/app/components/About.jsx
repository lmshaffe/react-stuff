var React = require('react');

// var About = React.createClass({
//   render: function () {
//     return (
//       <h3>About Component</h3>
//     )
//   }
// });

// These don't retain any state so we don't need to have the verbose createClass
let About = (props) => {
  return (
    <h3>About Component</h3>
  )
}

module.exports = About;
