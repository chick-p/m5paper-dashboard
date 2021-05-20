export interface Weather {
  humidity: number;
  weather: string;
  icon: Icon;
  pop: number;
  currentTemperature: number;
  maxTemperature: number;
  minTemperature: number;
}

export type Icon =
  | "01d"
  | "01n"
  | "02d"
  | "02n"
  | "03d"
  | "03n"
  | "04d"
  | "04n"
  | "09d"
  | "09n"
  | "10d"
  | "10n"
  | "11d"
  | "11n"
  | "13d"
  | "13n"
  | "50d"
  | "50n";

type OpenWeatherMapWeather = {
  description: number;
  icon: Icon;
}

type OpenWeatherMapTemp = {
  day: number,
  min: number;
  max: number;
}

export type OpenWeatherMapMetrics = {
  dt: number;
  temp: OpenWeatherMapTemp;
  pop: number;
  weather: Array<OpenWeatherMapWeather>
}
