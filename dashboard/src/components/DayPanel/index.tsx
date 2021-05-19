import React from "react";
import { format } from "date-fns";
import ja from "date-fns/locale/ja";

const Component: React.FC = () => {
  const now = new Date();
  const day = format(now, "MM/dd");
  const week = format(now, "eeee");
  const time = format(now, "HH:mm", { locale: ja });
  return (
    <div className="col-start-1 col-span-1 relative bg-white py-6 px-6 rounded-3xl border-2 border-gray-500 my-4 align-text-top">
      <div className="text-gray-700">
        <div className="flex items-center space-x-2 mb-2">
          <p className="font-semibold text-2xl">{day}</p>
          <p className="text-xl">{week}</p>
        </div>
        <div className="flex space-x-2 text-xl">
          <p>{time}</p>
        </div>
      </div>
    </div>
  );
};
export const DayPanel = Component;
