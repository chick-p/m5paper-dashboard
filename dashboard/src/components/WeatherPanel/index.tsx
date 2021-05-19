import React, { useEffect, useState } from "react";
import { IoUmbrellaSharp } from "react-icons/io5";
import { toDate } from "date-fns";

import { WeatherIcon } from "./WeatherIcon";
import { OpenWeatherMapMetrics, Weather } from "../../types/weather";
import { round } from "../../builders/index";

const { WEATHER_APP_ID, WEATHER_LATITUDE, WEATHER_LONGITUDE } = process.env;

const Component: React.FC = () => {
  const [weather, setWeather] = useState<Partial<Weather>>({});
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${WEATHER_LATITUDE}&lon=${WEATHER_LONGITUDE}&exclude=hourly,minutely,alerts&units=metric&lang=ja&appid=${WEATHER_APP_ID}`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          const { current, daily } = result;
          const { description, icon } = current.weather[0];
          const currentTime = new Date().getTime();
          const day = (daily as Array<OpenWeatherMapMetrics>).find(
            (d: OpenWeatherMapMetrics) => d.dt * 1000 <= currentTime
          );
          const { pop, temp: dailyTemp } = day;
          setWeather({
            currentTemperature: current.temp,
            maxTemperature: dailyTemp.max,
            minTemperature: dailyTemp.min,
            humidity: current.humidity,
            weather: description,
            icon,
            pop,
          });
        },
        (error) => {
          setError(error);
        }
      );
  }, []);
  if (error) {
    return (
      <div className="relative bg-white py-6 px-6 rounded-3xl border-2 border-gray-500 w-72 my-4">
        Error: {error.message}
      </div>
    );
  } else {
    const {
      icon,
      currentTemperature,
      maxTemperature,
      minTemperature,
      pop,
    } = weather;
    return (
      <div className="relative col-start-2 col-span-2 bg-white py-6 px-6 rounded-3xl border-2 border-gray-500 my-4 align-text-top">
        <div className="flex space-x-2 text-gray-700 text-2xl">
          <p className="font-semibold mb-2">Today</p>
        </div>
        <div className="flex space-x-2 text-gray-700 text-2xl">
          <WeatherIcon icon={icon} className="h-10 w-10" />
          <p className="font-semibold my-2">{round(currentTemperature)} ℃</p>
        </div>
        <div className="flex space-x-2 text-gray-700 text-xl">
          <div className="flex-grow">
            <p className="font-semibold my-2">
              {round(maxTemperature)} ℃ / {round(minTemperature)} ℃
            </p>
          </div>
          <div className="flex-grow">
            <div className="flex">
              <IoUmbrellaSharp className="h-10 w-5 mr-2" />
              <p className="font-semibold my-2">{round(pop * 100, 0)} %</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
export const WeatherPanel = Component;
