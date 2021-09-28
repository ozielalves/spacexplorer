import { Dimensions, StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
    backgroundColor: "rgba(0, 0, 0, 0.74)",
  },
  image: {
    width: "100%",
    height: (height * 60) / 100,
    alignSelf: "center",
  },
});
