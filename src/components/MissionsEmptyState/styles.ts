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
    marginRight: 6,
    marginBottom: 38,
  },
  button: {
    width: "60%",
    height: 56,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
    marginHorizontal: 16,
    backgroundColor: theme.colors.primary,
    marginTop: 38,
  },
  buttonTitle: {
    flex: 1,
    color: theme.colors.heading,
    fontWeight: "bold",
    fontSize: 15,
    textAlign: "center",
  },
});