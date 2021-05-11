import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import axios from "axios";

import { Task, TodoistTaskResponse } from "../../types/todoist";

const { TODOIST_API_TOKEN } = process.env;

const todoistBaserUrl = "https://api.todoist.com/rest/v1";
const today = format(new Date(), "yyyy-MM-dd");

const fetchTasks = async (): Promise<TodoistTaskResponse[]> => {
  const { data } = await axios.get(`${todoistBaserUrl}/tasks`, {
    headers: { Authorization: `Bearer ${TODOIST_API_TOKEN}` },
  });
  return data;
};

const Component: React.FC = () => {
  const [tasks, setTasks] = useState<Partial<Task>[]>([]);
  useEffect(() => {
    let unmounted = false;
    (async () => {
      const resp = await fetchTasks();
      if (!unmounted) {
        const todayTasks = resp
          .filter((v: TodoistTaskResponse) => v.due?.date <= today)
          .map((v: TodoistTaskResponse) => {
            const due = v.due?.date || "";
            return {
              id: v.id,
              name: v.content,
              projectId: v.project_id,
              due,
            };
          });
        setTasks(todayTasks);
      }
    })();

    return () => {
      unmounted = true;
    };
  }, []);
  return (
    <div className="col-start-2 col-span-3 relative bg-white py-6 px-6 rounded-3xl border-2 border-gray-500 my-4 align-text-top">
      <div className="flex text-center space-x-2 text-gray-700 text-2xl font-bold	">
        <p className="font-semibold mb-2">Tasks</p>
      </div>
      <div className="flex space-x-2 text-gray-700 text-xl">
        <ul className="list-disc list-inside">
          {tasks.length > 0
            ? tasks
                .slice(0, 4)
                .map((task) => <li key={task.id}>{task.name}</li>)
            : "Enjoy Today!"}
          {tasks.length > 5 ? "..." : ""}
        </ul>
      </div>
    </div>
  );
};
export const TodoistPanel = Component;
