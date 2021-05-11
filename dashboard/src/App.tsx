import React from "react";

import { DayPanel } from "./components/DayPanel";
import { WeatherPanel } from "./components/WeatherPanel";
import { TodoistPanel } from "./components/TodoistPanel";

export const App: React.FC = () => {
  return (
    <div className="items-start justify-center px-4">
      <div className="grid grid-cols-5 gap-3">
        <DayPanel />
        <WeatherPanel />
        <TodoistPanel />
      </div>
    </div>
  );
};
