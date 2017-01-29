var React = require('react')
var GreeterMessage = require('GreeterMessage');
var GreeterForm = require('GreeterForm');

// React components name convention is capital letter
// https://babeljs.io/repl to understand JSX and show what's really happening
var Greeter = React.createClass({
  getDefaultProps: function() {
    return {
      name: 'React',
      message: 'This is the default message'
    }
  },
  getInitialState: function () {
    return {
      name: this.props.name,
      message: this.props.message
    }
  },
  handleNewData: function (updates) {
    this.setState(updates)
  },
  render: function () {
    // var name = this.props.name;
    // using state allows this to be updated for rerendering when state is changed
    var name = this.state.name;
    var message = this.state.message;
    return (
      <div>
        <GreeterMessage name={name} message={message}/>
        <GreeterForm onNewData={this.handleNewData}/>
      </div>
    );
  }
});

module.exports = Greeter;
