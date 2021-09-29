import React from "react";
import { View, Text } from "react-native";
import SpaceshipSvg from "../../assets/spaceship.svg";

import { styles } from "./styles";

export function MissionsEmptyState() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>No mission {"\n"}were found.</Text>
      <Text style={styles.subtitle}>:(</Text>
    </View>
  );
}
