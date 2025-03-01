import { Check, CircleCheck, Trash2 } from "lucide-react-native";
import { Text, TouchableOpacity, View } from "react-native";

import styles from "./styles";
import { COLORS } from "../../constants/color";
import { TaskProps } from "./types";

export function Task(props: TaskProps) {
  const { handleTaskDelete, handleTaskState, task } = props;

  const { completed, id, text } = task;

  function renderCheckIcon() {
    if (!completed) return null;

    return (
      <Check
        color={COLORS.GRAY_100}
        size={16}
        style={{ alignSelf: "center" }}
      />
    );
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.checkBox,
          completed && {
            backgroundColor: COLORS.PURPLE,
            borderColor: COLORS.PURPLE,
          },
        ]}
        onPress={() => handleTaskState(id)}
      >
        {renderCheckIcon()}
      </TouchableOpacity>
      <Text
        style={[
          styles.text,
          completed && {
            color: COLORS.GRAY_300,
            textDecorationLine: "line-through",
          },
        ]}
      >
        {text}
      </Text>
      <TouchableOpacity onPress={() => handleTaskDelete(id)}>
        <Trash2 color={COLORS.GRAY_300} />
      </TouchableOpacity>
    </View>
  );
}
