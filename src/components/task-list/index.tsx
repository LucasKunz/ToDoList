import { Text, View } from "react-native";

import styles from "./styles";
import { COLORS } from "../../constants/color";
import { TaskListProps } from "./types";
import { EmptyList } from "../empty-list";

import { Task } from "../task";

export function TaskList(props: TaskListProps) {
  const { todoList, ...otherProps } = props;

  const completedTaskLength = todoList.filter((task) => task.completed).length;

  function renderTaskList() {
    if (todoList.length === 0) {
      return <EmptyList />;
    }

    return (
      <View style={styles.taskContainer}>
        {todoList.map((task) => (
          <Task task={task} {...otherProps} />
        ))}
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={{ alignItems: "center", flexDirection: "row" }}>
          <Text style={[styles.headerText, { color: COLORS.BLUE }]}>
            Criadas
          </Text>
          <Text style={styles.statusContainer}>{todoList.length}</Text>
        </View>
        <View style={{ alignItems: "center", flexDirection: "row" }}>
          <Text style={[styles.headerText, { color: COLORS.PURPLE }]}>
            Concluídas
          </Text>
          <Text style={styles.statusContainer}>{completedTaskLength}</Text>
        </View>
      </View>
      {renderTaskList()}
    </View>
  );
}
