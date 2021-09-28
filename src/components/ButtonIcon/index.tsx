import React, { ReactNode } from "react";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { Text, View, } from "react-native";

import { theme } from "../../global/styles/theme";
import { styles } from "./styles";

interface ButtonIconProps extends RectButtonProps {
  title: string;
  icon: ReactNode;
  variant?: "primary" | "secondary30";
}

export function ButtonIcon({
  title,
  icon,
  variant = "primary",
  ...props
}: ButtonIconProps) {
  return (
    <RectButton
      style={{ ...styles.container, backgroundColor: theme.colors[variant] }}
      {...props}
    >
      <View style={styles.iconWrapper}>{icon}</View>

      <Text style={styles.title}>{title}</Text>
    </RectButton>
  );
}
