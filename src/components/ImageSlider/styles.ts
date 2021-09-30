import { Dimensions, StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 234,
    position: "relative",
  },
  bannerContent: {
    width: width,
    height: 234,
  },
  bannerEmptyState: {
    width: width,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.secondary30,
  },
  title: {
    fontSize: 28,
    maxWidth: '85%',
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,
  },
  previousImageController: {
    position: "absolute",
    left: 24,
    bottom: 104,
  },
  nextImageController: {
    position: "absolute",
    right: 24,
    bottom: 104,
  },
  bannerDescription: {
    width: width,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    bottom: 20,
    paddingHorizontal: 24,
  },
});
