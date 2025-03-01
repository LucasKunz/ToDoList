import { Image, Text, View } from "react-native";

import styles from "./styles";

export function EmptyList() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/clipboard.png")}
        style={{ width: 56, height: 56 }}
      />
      <View>
        <Text style={[styles.text, { fontWeight: "700" }]}>
          Você ainda não tem tarefas cadastradas
        </Text>
        <Text style={styles.text}>
          Crie tarefas e organize seus itens a fazer
        </Text>
      </View>
    </View>
  );
}
