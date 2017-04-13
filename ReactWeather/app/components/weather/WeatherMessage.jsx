var React = require('react');

let WeatherMessage = ({temp, location}) => {
  // var {temp, location} = props;
  return (
    <div>
      <h3>It is {temp} in {location}</h3>
    </div>
  )
}

module.exports = WeatherMessage;
