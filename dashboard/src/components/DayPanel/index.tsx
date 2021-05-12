import React from "react";
import { format } from "date-fns";
import ja from "date-fns/locale/ja";

const Component: React.FC = () => {
  const now = new Date();
  const day = format(now, "yyyy年MM月dd日");
  const week = format(now, "eeee", { locale: ja });
  return (
    <div className="col-start-1 col-span-1 relative bg-white py-6 px-6 rounded-3xl border-2 border-gray-500 my-4 align-text-top">
      <div>
        <p className="text-gray-700 text-2xl font-semibold mb-2">{day}</p>
        <div className="flex space-x-2 text-gray-700 text-xl">
          <p>{week}</p>
        </div>
      </div>
    </div>
  );
};
export const DayPanel = Component;
