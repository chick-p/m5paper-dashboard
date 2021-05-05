import React from "react";
import { format } from "date-fns";
import ja from "date-fns/locale/ja";

const Component: React.FC = () => {
  const now = new Date();
  const day = format(now, "yyyy年MM月dd日");
  const week = format(now, "eeee", { locale: ja });
  return (
    <div className="relative bg-white py-6 px-6 rounded-3xl border-2 border-gray-500 w-56 my-4">
      <div>
        <p className="text-gray-700 text-xl font-semibold my-2">{day}</p>
        <div className="flex space-x-2 text-gray-700 text-sm">
          <p>{week}</p>
        </div>
      </div>
    </div>
  );
};
export const DayPanel = Component;
