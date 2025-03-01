import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/color";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerText: {
    fontWeight: "700",
  },
  taskContainer: {
    marginTop: 20,
  },
  statusContainer: {
    backgroundColor: COLORS.GRAY_400,
    borderRadius: 99,
    color: COLORS.GRAY_200,
    fontWeight: "700",
    marginLeft: 8,
    paddingVertical: 2,
    paddingHorizontal: 8,
  },
});
