/* eslint-disable no-console */
import axios from 'axios';

const weatherTypes = {
  sunny: '☀️',
  sun: '🌤️',
  rain: '🌦️',
};

const API_KEY = process.env.WEATHER_API_KEY;

const locationAPI = axios.create({
  baseURL: 'https://www.meteoblue.com/en/server/search/query3',
});

const forecastAPI = axios.create({
  baseURL: 'https://my.meteoblue.com/packages/trend-1h_trend-day',
});

const weatherIcon = (code) => {
  if (code === 1) return weatherTypes.sunny;
  else if (code > 1 && code < 6) return weatherTypes.sun;
  else if (code >= 6) return weatherTypes.rain;

  return weatherTypes.sunny;
};

const handler = async (req, res) => {
  const { location } = req.query;

  return locationAPI
    .get(`/?query=${location}&itemsPerPage=1&apikey=${API_KEY}`)
    .then(
      (data) =>
        data?.data?.results?.[0] ?? { name: '', lat: 0, lon: 0, timezone: '' },
    )
    .then(({ name, lat, lon, timezone }) => {
      return forecastAPI
        .get(
          `/?lat=${lat}&lon=${lon}&format=json&apikey=${API_KEY}&tz=${timezone}`,
        )
        .then((data) => ({ ...data.data, name }));
    })
    .then((data) => ({
      location: data.name,
      dates: data.trend_day.time.map((time, idx) => ({
        date: `${(() => {
          const day = new Date(time);
          return `${day.getDate()}/${day.getMonth() + 1}`;
        })()}`,
        high: data.trend_day.temperature_max[idx],
        low: data.trend_day.temperature_min[idx],
        weather: weatherIcon(data.trend_day.pictocode[idx]),
      })),
    }))
    .then((result) => res.status(200).json(result))
    .catch((error) => {
      console.error(error);
      return res.status(500).json({ error });
    });
};

export default handler;
