import { Image, View } from "react-native";

import styles from "./styles";

export function Header() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/logo.png")}
        style={{ width: 111, height: 32 }}
      />
    </View>
  );
}
