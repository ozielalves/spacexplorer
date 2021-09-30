import React from "react";
import { Image } from "react-native";
import EmptyAvatarPng from "../../assets/empty-avatar.png";

import { styles } from "./styles";

interface GuildIconProps {
  urlImage?: string;
}

export function GuildIcon({ urlImage }: GuildIconProps) {
  return (
    <Image
      source={urlImage ? { uri: urlImage } : EmptyAvatarPng}
      style={styles.image}
      resizeMode="cover"
    />
  );
}
