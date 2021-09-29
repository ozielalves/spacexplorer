import { Dimensions, StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    width: width,
    height: 70,
    backgroundColor: theme.colors.secondary80,
    overflow: "hidden",
    borderRadius: 8,
  },
  skeleton: {
    width: "20%",
    height: "100%",
    opacity: 0.2,
  },
});
