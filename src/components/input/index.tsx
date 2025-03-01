import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";

import styles from "./styles";
import { CirclePlus } from "lucide-react-native";
import { COLORS } from "../../constants/color";
import { useState } from "react";
import { InputProps } from "./types";

export function Input(props: InputProps) {
  const { onPress } = props;

  const [task, setTask] = useState("");

  function handleOnPress() {
    if (task.trim().length === 0) {
      return Alert.alert("Ops", "Digite uma tarefa para adicionar a sua lista");
    }

    onPress(task);
    setTask("");
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputContainer}
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor={COLORS.GRAY_300}
        onChangeText={setTask}
        value={task}
      />
      <TouchableOpacity style={styles.button} onPress={handleOnPress}>
        <CirclePlus size={20} color="white" />
      </TouchableOpacity>
    </View>
  );
}
