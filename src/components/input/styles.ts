import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/color";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 4,
    height: 54,
    marginTop: -27,
  },
  inputContainer: {
    backgroundColor: COLORS.GRAY_500,
    borderColor: COLORS.GRAY_700,
    borderRadius: 6,
    color: COLORS.GRAY_100,
    flex: 1,
    fontSize: 16,
    padding: 16,
  },
  button: {
    alignItems: "center",
    backgroundColor: COLORS.BLUE_DARK,
    borderRadius: 6,
    justifyContent: "center",
    width: 52,
  },
});
