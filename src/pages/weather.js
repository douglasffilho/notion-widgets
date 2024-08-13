import { fromLocation } from 'clients/weather';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const WeatherPage = () => {
  const searchParams = useSearchParams();
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const location = searchParams.get('query');
    if (location) {
      fromLocation(location).then(setWeatherData);
    }
  }, [searchParams]);

  return weatherData ? (
    <div className="weather-widget">
      <h2>{weatherData.location}</h2>
      <ul className="weather-days">
        {weatherData.dates.map((date) => (
          <li key={date.date}>
            <p>{date.date}</p>
            <p>{date.weather}</p>
            <p>Máx: {date.high}°C</p>
            <p>Mín: {date.low}°C</p>
          </li>
        ))}
      </ul>
    </div>
  ) : (
    ''
  );
};

export default WeatherPage;
