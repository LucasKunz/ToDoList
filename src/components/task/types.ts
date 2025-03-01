export type TaskProps = {
  task: Task;
  handleTaskState: (id: string) => void;
  handleTaskDelete: (id: string) => void;
};

export type Task = {
  id: string;
  text: string;
  completed: boolean;
};
