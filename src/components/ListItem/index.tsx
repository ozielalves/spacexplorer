import React from "react";
import { Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";

import CameraSvg from "../../assets/camera.svg";
import { theme } from "../../global/styles/theme";
import { Mission } from "../../models/mission";
import { GuildIcon } from "../GuildIcon";
import { ListItemSkeleton } from "./Skeleton";

import { styles } from "./styles";

interface PrivateProps extends RectButtonProps {
  data: Mission;
}

function ListItem({ data, ...props }: PrivateProps) {
  const { mission_name, launch_date_local, rocket } = data;
  const { flickr_images, article_link } = data.links;

  return (
    <RectButton {...props}>
      <View style={styles.container}>
        <GuildIcon urlImage={flickr_images[0]} />

        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title} numberOfLines={1}>
              {mission_name}
            </Text>
            <Text style={styles.description}>{rocket.rocket_name}</Text>
          </View>
          <View>
            <Text
              style={[styles.description, styles.articleInfo]}
              numberOfLines={1}
            >
              {article_link && article_link.length
                ? "See the acrticle"
                : "No article"}
            </Text>
          </View>
          <View style={styles.footer}>
            <View style={styles.dateInfo}>
              <MaterialCommunityIcons
                name="calendar-today"
                size={24}
                color={theme.colors.primary}
              />
              <Text style={styles.date}>
                {launch_date_local}
              </Text>
            </View>

            <View style={styles.imageCount}>
              <CameraSvg />
              <Text style={styles.images}>{flickr_images.length}</Text>
            </View>
          </View>
        </View>
      </View>
    </RectButton>
  );
}

export { ListItem, ListItemSkeleton };
