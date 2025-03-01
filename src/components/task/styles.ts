import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/color";

export default StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: COLORS.GRAY_500,
    borderRadius: 8,
    flexDirection: "row",
    gap: 8,
    height: 64,
    justifyContent: "space-between",
    marginBottom: 8,
    padding: 12,
    width: "100%",
  },
  checkBox: {
    alignContent: "center",
    borderColor: COLORS.BLUE,
    borderRadius: 99,
    borderWidth: 2,
    height: 24,
    justifyContent: "center",
    width: 24,
  },
  text: {
    flex: 1,
    color: COLORS.GRAY_100,
    width: "100%",
  },
});
