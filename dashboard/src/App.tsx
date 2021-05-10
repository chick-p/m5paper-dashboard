import React from "react";

import { DayPanel } from "./components/DayPanel";
import { WeatherPanel } from "./components/WeatherPanel";
import { TodoistPanel } from "./components/TodoistPanel";

export const App: React.FC = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="grid grid-cols-1 gap-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {/* <DayPanel />
        <WeatherPanel /> */}
        <TodoistPanel />
      </div>
    </div>
  );
};
