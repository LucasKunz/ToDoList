import { Task } from "../task/types";

export type TaskListProps = {
  todoList: Task[];
  handleTaskState: (id: string) => void;
  handleTaskDelete: (id: string) => void;
};
