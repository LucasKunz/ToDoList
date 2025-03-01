import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/color";

export default StyleSheet.create({
  container: {
    alignItems: "center",
    borderTopColor: COLORS.GRAY_400,
    borderTopWidth: 1,
    justifyContent: "center",
    gap: 16,
    marginTop: 20,
    paddingTop: 48,
  },
  text: {
    color: COLORS.GRAY_300,
    textAlign: "center",
  },
});
