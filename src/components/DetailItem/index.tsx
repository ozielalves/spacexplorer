import { LinearGradient } from "expo-linear-gradient";
import React, { ReactNode } from "react";
import { Text, View } from "react-native";

import { theme } from "../../global/styles/theme";
import { styles } from "./styles";

interface DetailItemProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export function DetailItem({ icon, title, description }: DetailItemProps) {
  const { secondary50, secondary70 } = theme.colors;

  return (
    <View style={styles.container}>
      <LinearGradient
        style={styles.iconBorder}
        colors={[secondary50, secondary70]}
      >
        <View style={styles.iconContainer}>{icon}</View>
      </LinearGradient>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
}
