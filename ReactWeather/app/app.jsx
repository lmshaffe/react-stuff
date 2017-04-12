var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="about" component={About}/>
      <Route path="examples" component={Examples}/>
{/* rule of thumb if you're using IndexRoute you don't want to use Link in the components use IndexLink*/}
      <IndexRoute component={Weather}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
