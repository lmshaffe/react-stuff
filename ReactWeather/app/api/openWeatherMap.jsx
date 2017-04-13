let axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appId=d716cdc7e8c7629d934445d475d814f4&units=imperial';

// 41b4b12a7fdde5863664298eb4bdd14a

module.exports = {
  getTemp: (location) => {
    let encodedLocation = encodeURIComponent(location);
    let requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then((res) => {
      if (res.cod && res.message) {
        throw new Error(res.message);
      } else {
        return res.data.main.temp;
      }
    }, (err) => {
      console.log(err);
      throw new Error(err.message);
    })
  }
}
