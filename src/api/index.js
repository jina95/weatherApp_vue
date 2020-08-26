import axios from 'axios';

// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}
// api.openweathermap.org/data/2.5/forecast?q={city name} & appid = {your api key}

const config = {
  currentUrl: 'https://api.openweathermap.org/data/2.5/weather?q=',
  fiveDaysUrl: 'https://api.openweathermap.org/data/2.5/forecast?q=',
  myKey: 'f7478bdb8dd3fcb84545cc7563bbbb1f',
};

function fetchCurrentWeatherList(cityName) {
  return axios.get(`${config.currentUrl}${cityName}&appid=${config.myKey}`);
}

function fetchDaysWeatherList(cityName) {
  return axios.get(`${config.fiveDaysUrl}${cityName}&appid=${config.myKey}`);
}

export { fetchCurrentWeatherList, fetchDaysWeatherList };
