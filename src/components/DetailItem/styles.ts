import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 24,
  },
  iconBorder: {
    width: 48,
    height: 51,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  iconContainer: {
    width: 46,
    height: 49,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: theme.colors.secondary80,
  },
  content: {
    width: "100%",
    marginLeft: 20,
  },
  title: {
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,
    fontSize: 18,
    marginBottom: 12,
  },
  description: {
    fontFamily: theme.fonts.text400,
    color: theme.colors.highlight,
    fontSize: 13,
  },
});
