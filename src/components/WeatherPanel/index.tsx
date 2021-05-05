import React, { useEffect, useState } from "react";
import { IoUmbrellaSharp } from "react-icons/io5";

import { WeatherIcon } from "./WeatherIcon";
import { Weather } from "../../types/weather";
import { round } from "../../builders/index";

const { WEATHER_APP_ID, WEATHER_LATITUDE, WEATHER_LONGITUDE } = process.env;

const Component: React.FC = () => {
  const [weather, setWeather] = useState<Partial<Weather>>({});
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(
      `http://api.openweathermap.org/data/2.5/onecall?lat=${WEATHER_LATITUDE}&lon=${WEATHER_LONGITUDE}&exclude=hourly,minutely,alerts&units=metric&lang=ja&appid=${WEATHER_APP_ID}`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          const { current, daily } = result;
          const { description, icon } = current.weather[0];
          const { pop, temp: dailyTemp } = daily[0];
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
      <div className="relative bg-white py-6 px-6 rounded-3xl border-2 border-gray-500 w-80 my-4">
        <div className="flex text-center space-x-2 text-gray-700 text-xl">
          <p className="font-semibold my-2">Today</p>
        </div>
        <div className="flex text-center space-x-2 text-gray-700 text-xl">
          <WeatherIcon icon={icon} className="h-10 w-10" />
          <p className="font-semibold my-2">{round(currentTemperature)} ℃</p>
        </div>
        <div className="flex space-x-2 text-gray-700 text-base">
          <div className="flex-grow">
            <p className="font-semibold my-2">
              {round(maxTemperature)} ℃ / {round(minTemperature)} ℃
            </p>
          </div>
          <div className="flex-grow">
            <div className="flex">
              <IoUmbrellaSharp className="h-10 w-5 mr-1" />
              <p className="font-semibold my-2">{round(pop, 0)} %</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
export const WeatherPanel = Component;
