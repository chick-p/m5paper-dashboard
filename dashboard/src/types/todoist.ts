export type TodoistTaskResponse = {
  id: number,
  content: string;
  project_id: string;
  due?: {
    date: string;
  }
}

export interface Task {
  id: number,
  name: string;
  projectId: string;
  due: string;
}
