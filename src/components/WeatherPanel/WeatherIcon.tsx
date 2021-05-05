import React from "react";

import {
  WiDaySunny,
  WiDaySunnyOvercast,
  WiCloud,
  WiCloudy,
  WiRain,
  WiDayRain,
  WiThunderstorm,
  WiSnow,
  WiCloudyWindy,
} from "react-icons/wi";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { Icon } from "../../types/weather";

type Prop = {
  icon: Icon;
  className?: string;
};

const Component: React.FC<Prop> = (props: Prop) => {
  const { icon, ...attributes } = props;
  if (icon === "01d" || icon === "01n") {
    return <WiDaySunny {...attributes} />;
  }
  if (icon === "02d" || icon === "02n") {
    return <WiDaySunnyOvercast {...attributes} />;
  }
  if (icon === "03d" || icon === "03n") {
    return <WiCloud {...attributes} />;
  }
  if (icon === "04d" || icon === "04n") {
    return <WiCloudy {...attributes} />;
  }
  if (icon === "09d" || icon === "09n") {
    return <WiRain {...attributes} />;
  }
  if (icon === "10d" || icon === "10n") {
    return <WiDayRain {...attributes} />;
  }
  if (icon === "11d" || icon === "11n") {
    return <WiThunderstorm {...attributes} />;
  }
  if (icon === "13d" || icon === "13n") {
    return <WiSnow {...attributes} />;
  }
  if (icon === "50d" || icon === "50n") {
    return <WiCloudyWindy {...attributes} />;
  }
  return <AiOutlineQuestionCircle {...attributes} />;
};

export const WeatherIcon = Component;
