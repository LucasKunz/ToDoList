import { View } from "react-native";
import { Input } from "../input";

import uuid from "react-native-uuid";

import styles from "./styles";
import { useState } from "react";
import { TaskList } from "../task-list";
import { Task } from "../task/types";

export function TodoList() {
  const [todoList, setTodoList] = useState<Task[]>([]);

  function handleInputPress(task: string) {
    const newTask: Task = {
      completed: false,
      id: uuid.v4(),
      text: task,
    };

    setTodoList((prevState) => [...prevState, newTask]);
  }

  function handleTaskState(id: string) {
    const updateTodoList = todoList.map((task) => {
      if (task.id !== id) return task;

      return {
        ...task,
        completed: !task.completed,
      };
    });

    setTodoList(updateTodoList);
  }

  function handleTaskDelete(id: string) {
    const filteredList = todoList.filter((task) => task.id !== id);

    setTodoList(filteredList);
  }

  return (
    <View style={styles.container}>
      <Input onPress={handleInputPress} />
      <TaskList
        todoList={todoList}
        handleTaskState={handleTaskState}
        handleTaskDelete={handleTaskDelete}
      />
    </View>
  );
}
