import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontFamily: theme.fonts.title500,
    fontSize: 24,
    color: theme.colors.heading,
    textAlign: "center",
    marginBottom: 24,
  },
  subtitle: {
    fontFamily: theme.fonts.text400,
    color: theme.colors.primary,
    textAlign: "center",
    fontSize: 60,
    transform: [{ rotate: "90deg" }],
  },
});
