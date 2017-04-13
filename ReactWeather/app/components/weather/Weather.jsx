var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function() {
    return {
      isLoading: false
    }
  },
  handleSearch: function(location) {

    this.setState({isLoading: true});
    openWeatherMap.getTemp(location).then((temp) => {
      // this wouldn't work if we didn't use an arrow function
      this.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    }, (err) => {
      this.setState({isLoading: false});
      alert(err);
    })
  },
  render: function () {
    var {isLoading, temp, location} = this.state;

    function renderMessage() {
      if (isLoading) {
        return <h3>Fetching Weather...</h3>;
      } else if (temp && location) {
        return <WeatherMessage location={location} temp={temp}/>;
      }
    }

    return (
      <div>
        <h1>Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    )
  }
});

module.exports = Weather;
