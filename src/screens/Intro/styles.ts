import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  image: { width: "100%", height: 407 },
  content: { marginTop: -40, marginHorizontal: 50 },
  title: {
    color: theme.colors.heading,
    textAlign: "center",
    fontSize: 40,
    marginBottom: 16,
    fontFamily: theme.fonts.title700,
    lineHeight: 40,
  },
  subtitle: {
    color: theme.colors.heading,
    textAlign: "center",
    fontSize: 15,
    marginBottom: 64,
    fontFamily: theme.fonts.title500,
    lineHeight: 25,
  },
  icon: {
    transform: [{ rotate: "90deg" }],
  },
});
