import React from "react";
import { View, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import SpaceshipSvg from "../../assets/spaceship.svg";

import { useMissions } from "../../hooks/useMissions";

import { styles } from "./styles";

export function MissionsErrorState() {
  const { refetch } = useMissions();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Could not {"\n"}load missions data.</Text>
      <Text style={styles.subtitle}>Try again later.</Text>
      <SpaceshipSvg width={80} height={80} />
      <RectButton style={styles.button} onPress={() => refetch()}>
        <Text style={styles.buttonTitle}>Try again</Text>
      </RectButton>
    </View>
  );
}
