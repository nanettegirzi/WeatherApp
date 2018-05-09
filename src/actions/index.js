const API_KEY = '5aaa25520e670fecea4305698e5f1296';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;

  return {
    type: FETCH_WEATHER
  };
}
